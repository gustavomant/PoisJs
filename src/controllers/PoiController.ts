import { Request, Response } from "express";
import { PoiUseCase } from "../usecases/PoiUseCase";

export class PoiController {
    constructor(private poiUseCase: PoiUseCase) {};

    async createPoi(req: Request, res: Response) : Promise<void> {    
        try {
            await this.poiUseCase.createPoi(req.body);
            res.sendStatus(201);
        } catch (error: any) {
            res.sendStatus(400);
        }
    }

    async getAllPois(req: Request, res: Response) : Promise<void> {
        try {
            const pois = await this.poiUseCase.getAllPois();
            res.status(200).json(pois);
        } catch (error: any) {
            res.sendStatus(400);
        }
    }

    async getNearbyPois(req: Request, res: Response) : Promise<void> {
        try {
            const coordinateX : number = Number(req.query.coordinateX);
            const coordinateY : number = Number(req.query.coordinateY);
            const distance : number = Number(req.query.distance);
            const pois = await this.poiUseCase.getNearbyPois(coordinateX, coordinateY, distance);
            res.status(200).json(pois);
        } catch (error: any) {
            res.sendStatus(400);
        }
    }
}