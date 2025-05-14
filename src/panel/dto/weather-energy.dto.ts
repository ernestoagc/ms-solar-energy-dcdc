export interface WeatherEnergy {
    inputs: Inputs
    outputs: Outputs
    meta: Meta
  }
  
  export interface Inputs {
    location: Location
    meteo_data: MeteoData
    plane: Plane
  }
  
  export interface Location {
    latitude: number
    longitude: number
    elevation: number
  }
  
  export interface MeteoData {
    radiation_db: string
    meteo_db: string
    year_min: number
    year_max: number
    use_horizon: boolean
    horizon_db: any
    horizon_data: string
  }
  
  export interface Plane {
    fixed_horizontal: FixedHorizontal
    fixed_inclined: FixedInclined
    fixed_inclined_optimal: FixedInclined
  }
  
  export interface FixedHorizontal {
    slope: Slope
    azimuth: Azimuth
  }
  
  export interface Slope {
    value: number
    optimal: string
  }
  
  export interface Azimuth {
    value: string
    optimal: string
  }
  
  export interface FixedInclined {
    slope: Slope2
    azimuth: Azimuth2
  }
  
  export interface Slope2 {
    value: number
    optimal: boolean
  }
  
  export interface Azimuth2 {
    value: number
    optimal: boolean
  }
  
  export interface Outputs {
    monthly: Monthly[]
  }
  
  export interface Monthly {
    year: number
    month: number
    "H(h)_m": number
    "H(i_opt)_m": number
    "H(i)_m": number
    "T2m": number
  }
  
  export interface Meta {
    inputs: Inputs2
    outputs: Outputs2
  }
  
  export interface Inputs2 {
    location: Location2
    meteo_data: MeteoData2
    plane: Plane2
  }
  
  export interface Location2 {
    description: string
    variables: Variables
  }
  
  export interface Variables {
    latitude: Latitude
    longitude: Longitude
    elevation: Elevation
  }
  
  export interface Latitude {
    description: string
    units: string
  }
  
  export interface Longitude {
    description: string
    units: string
  }
  
  export interface Elevation {
    description: string
    units: string
  }
  
  export interface MeteoData2 {
    description: string
    variables: Variables2
  }
  
  export interface Variables2 {
    radiation_db: RadiationDb
    meteo_db: MeteoDb
    year_min: YearMin
    year_max: YearMax
    use_horizon: UseHorizon
    horizon_db: HorizonDb
  }
  
  export interface RadiationDb {
    description: string
  }
  
  export interface MeteoDb {
    description: string
  }
  
  export interface YearMin {
    description: string
  }
  
  export interface YearMax {
    description: string
  }
  
  export interface UseHorizon {
    description: string
  }
  
  export interface HorizonDb {
    description: string
  }
  
  export interface Plane2 {
    description: string
    fields: Fields
  }
  
  export interface Fields {
    slope: Slope3
    azimuth: Azimuth3
  }
  
  export interface Slope3 {
    description: string
    units: string
  }
  
  export interface Azimuth3 {
    description: string
    units: string
  }
  
  export interface Outputs2 {
    monthly: Monthly2
  }
  
  export interface Monthly2 {
    type: string
    timestamp: string
    variables: Variables3
  }
  
  export interface Variables3 {
    "H(h)_m": HHM
    "H(i)_m": HIM
  }
  
  export interface HHM {
    description: string
    units: string
  }
  
  export interface HIM {
    description: string
    units: string
  }
  