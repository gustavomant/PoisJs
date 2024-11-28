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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoiUseCase = void 0;
const client_1 = __importDefault(require("../prisma/client"));
class PoiUseCase {
    createPoi(createPoiPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdPoi = yield client_1.default.pointOfInterest.create({
                data: createPoiPayload
            });
            return createdPoi;
        });
    }
    getAllPois() {
        return __awaiter(this, void 0, void 0, function* () {
            const pois = yield client_1.default.pointOfInterest.findMany();
            const poisDto = pois.map((poi) => ({
                id: poi.id,
                name: poi.name,
                coordinateX: Number(poi.coordinateX),
                coordinateY: Number(poi.coordinateY)
            }));
            return poisDto;
        });
    }
    getNearbyPois() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.PoiUseCase = PoiUseCase;
