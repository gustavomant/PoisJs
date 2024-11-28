import { Router } from "express";
import { PoiController } from "../controllers/PoiController";
import { PoiUseCase } from "../usecases/PoiUseCase";

const router = Router();

const poiUseCase = new PoiUseCase();
const poiController = new PoiController(poiUseCase);

router.get("/", poiController.getAllPois.bind(poiController));
router.post("/", poiController.createPoi.bind(poiController));
router.post("/nearby", poiController.getNearbyPois.bind(poiController));

export default router;