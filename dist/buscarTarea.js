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
exports.buscarTarea = buscarTarea;
const io_1 = require("./io");
const agregarTarea_1 = require("./agregarTarea");
function buscarTarea() {
    return __awaiter(this, void 0, void 0, function* () {
        let tareas = (0, agregarTarea_1.getTareas)();
        for (let i = 0; i < tareas.length; i++) {
            console.log(`Tarea [${i + 1}] - Titulo: ${tareas[i].titulo}`);
        }
        let opcionElegida = Number(yield (0, io_1.input)("Elija una opcion: "));
        if (opcionElegida > 0 && opcionElegida <= tareas.length) {
            let t = tareas[opcionElegida - 1];
            console.log(`Título: ${t.titulo}`);
            console.log(`Descripción: ${t.descripcion}`);
            console.log(`Estado: ${t.estado}`);
            console.log(`Dificultad: ${t.dificultad}`);
            console.log("---- ---- ---- ---- ---- ----\n");
        }
        else {
            console.log("Opción incorrecta.\n");
        }
    });
}
