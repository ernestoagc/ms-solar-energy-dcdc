export class SolarEnergyDto {
    months: MonthEneryDto[]
    bestAngle:number
    city:string
}

export class MonthEneryDto {

    year:number
    temperature:number
    month:number
    energy:number
    optimalEnergy:number
}