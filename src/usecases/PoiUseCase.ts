import { PointOfInterest } from "@prisma/client";
import { CreatePoiPayload, NearbyPoiDto, PoiDto } from "../contracts/PoiContracts";
import prisma from "../prisma/client";

export class PoiUseCase {
    async createPoi(createPoiPayload: CreatePoiPayload) : Promise<void> {
        await prisma.pointOfInterest.create({
            data: createPoiPayload
        });
    }

    async getAllPois() : Promise<PoiDto[]> {
        const pois : PointOfInterest[] = await prisma.pointOfInterest.findMany();
        const poisDto: PoiDto[] = pois.map(poi => ({
            id: poi.id,
            name: poi.name,
            coordinateX: Number(poi.coordinateX),
            coordinateY: Number(poi.coordinateY)
        }));
      
        return poisDto;
    }

    async getNearbyPois(
        coordinateX: number,
        coordinateY: number,
        distance: number
    ) : Promise<NearbyPoiDto[]> {
        const pois = await prisma.pointOfInterest.findMany();
        const poisDto: NearbyPoiDto[] = pois.map((poi) => {
            const deltaX: number = poi.coordinateX - coordinateX;
            const deltaY: number = poi.coordinateY - coordinateY;
        
            return {
                id: poi.id,
                name: poi.name,
                coordinateX: Number(poi.coordinateX),
                coordinateY: Number(poi.coordinateY),
                distance: Math.sqrt(Math.pow(Number(deltaX), 2) + Math.pow(Number(deltaY), 2)),
            };
        })
        .filter((poi) => {
            if(poi.distance <= distance) return poi;
        })
        .sort((a, b) => a.distance - b.distance);
        
        return poisDto;
    }
}