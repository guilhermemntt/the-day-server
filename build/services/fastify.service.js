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
const fastify_1 = __importDefault(require("fastify"));
const index_route_1 = __importDefault(require("../routes/index.route"));
const fastifyService = {
    init: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const server = fastify_1.default({});
            index_route_1.default.forEach(route => {
                server.route(route);
            });
            yield server.listen(3000);
            console.log(`Fastify service initialized on port ${server.server.address().port}.`);
        }
        catch (error) {
            throw error;
        }
    })
};
exports.fastifyService = fastifyService;
