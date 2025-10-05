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
exports.menu = menu;
const verTarea_1 = require("./verTarea");
const agregarTarea_1 = require("./agregarTarea");
const buscarTarea_1 = require("./buscarTarea");
const io_1 = require("./io");
function menu() {
    return __awaiter(this, void 0, void 0, function* () {
        let nombre = yield (0, io_1.input)("Ingrese su nombre: ");
        console.clear();
        console.log("Bienvenido [", nombre, "]\n");
        let opcion;
        do {
            console.log("[1] - Ver tareas\n[2] - Buscar tareas\n[3] - Agregar tareas\n[0] - Salir\n");
            opcion = Number(yield (0, io_1.input)("⋙ "));
            switch (opcion) {
                case 1:
                    yield (0, verTarea_1.verTarea)();
                    break;
                case 2:
                    yield (0, buscarTarea_1.buscarTarea)();
                    break;
                case 3:
                    yield (0, agregarTarea_1.agregarTarea)();
                    break;
                case 0:
                    console.log("\nSaliendo...\n");
                    break;
                default:
                    console.log("Opcion incorrecta.");
                    break;
            }
        } while (opcion !== 0);
        io_1.rl.close();
        console.log("Hasta luego [", nombre, "]");
    });
}
