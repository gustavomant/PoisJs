"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoiController = void 0;
class PoiController {
    constructor(poiUseCase) {
        this.poiUseCase = poiUseCase;
    }
    ;
    createPoi(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdPoi = yield this.poiUseCase.createPoi(req.body);
                res.sendStatus(201);
            }
            catch (error) {
                res.sendStatus(400);
            }
        });
    }
    getAllPois(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pois = yield this.poiUseCase.getAllPois();
                res.status(200).json(pois);
            }
            catch (error) {
                res.sendStatus(400);
            }
        });
    }
    getNearbyPois() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.PoiController = PoiController;
