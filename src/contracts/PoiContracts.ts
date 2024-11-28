export interface CreatePoiPayload {
    name: string,
    coordinateX: number, 
    coordinateY: number
}

export interface PoiDto {
    name: string,
    coordinateX: number,
    coordinateY: number
}

export interface NearbyPoiDto {
    name: string,
    coordinateX: number,
    coordinateY: number,
    distance: number
}