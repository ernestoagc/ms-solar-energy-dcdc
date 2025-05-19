import { Injectable } from '@nestjs/common';
import {HttpHelperService} from '../../common/http/http-helper.service';
import { WeatherEnergy } from '../dto/weather-energy.dto';
import { SolarEnergyDto } from '../dto/solar-enery.dto';

@Injectable()
export class PanelService {

    mapCities: Map<string, CityType>;

    constructor(
        private readonly httpHelperService:HttpHelperService<any>
      ){

        this.mapCities = new Map();
        this.mapCities.set("STO", {latitude:59.400,longitude:17.934, description:'Stockholm'});
        this.mapCities.set("MAD", {latitude:40.4194864,longitude:-3.7166049, description:'Madrid'});

      }

   async getSolarEnergy(
    location:string, 
    angle:string, 
    quantityPanel:number,
    year:string='2023'){

    let urlBase= "https://re.jrc.ec.europa.eu/api/MRcalc";
    let {latitude,longitude, description} = this.mapCities.get(location);

    let urlApi = `${urlBase}?lat=${latitude}&lon=${longitude}&horirrad=1&angle=${angle}&startyear=${year}&endyear=${year}&avtemp=1&optrad=1&selectrad=1&outputformat=json`

    console.log("==>URL");
    console.log(urlApi);
      //let responseWeather  = await this.httpHelperService.get(urlApi) as AxiosResponse<WeatherEnergy>

      let responseWeather  = await this.httpHelperService.get(urlApi)

   
    return this.mapWeatherApitoSolarEneryDto(responseWeather.data,quantityPanel,description);
      }


      private mapWeatherApitoSolarEneryDto(data:WeatherEnergy,quantityPanel:number, city:string){
        let obj = new SolarEnergyDto();
        obj.bestAngle =data.inputs.plane.fixed_inclined_optimal.slope.value;
        obj.city=city;
        obj.months = [];
        obj.totalEnergy=0;
        obj.totalOptimalEnergy =0;
        data.outputs.monthly.map(we=>{
          obj.months.push({year:we.year,month:we.month,temperature:we.T2m,energy:we['H(i)_m'],optimalEnergy:we['H(i_opt)_m']});
          obj.totalEnergy = obj.totalEnergy + Number(we['H(i)_m']);
          obj.totalOptimalEnergy = obj.totalOptimalEnergy + Number(we['H(i_opt)_m']);
        });

        obj.totalEnergy = obj.totalEnergy *quantityPanel;
        obj.totalOptimalEnergy = obj.totalOptimalEnergy *quantityPanel;

        return obj;

      }


      
}
