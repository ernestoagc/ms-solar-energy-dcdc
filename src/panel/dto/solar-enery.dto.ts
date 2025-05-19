export class SolarEnergyDto {
    months: MonthEneryDto[]
    bestAngle:number
    city:string
    totalEnergy:number
    totalOptimalEnergy:number
    quantityPanels:number
}

export class MonthEneryDto {

    year:number
    temperature:number
    month:number
    energy:number
    optimalEnergy:number
}