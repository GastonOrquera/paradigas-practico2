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
exports.agregarTarea = agregarTarea;
exports.getTareas = getTareas;
const io_1 = require("./io");
let tareas = [];
function agregarTarea() {
    return __awaiter(this, void 0, void 0, function* () {
        let cantTareas = Number(yield (0, io_1.input)("Cuantas tareas desea agregar: \n"));
        console.clear();
        console.log("Esta creando una nueva tarea.\n");
        crearTarea();
        console.log("Tareas creadas exitosamente.\n");
    });
}
function getTareas() {
    return tareas;
}
function crearTarea() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < tareas.length; i++) {
            let titulo;
            do {
                titulo = yield (0, io_1.input)(`T${i + 1} - Ingrese el titulo: ⋙ `);
                if (titulo.trim() === "") {
                    console.log("El titulo no puede ir vacio.\n");
                    return;
                }
                else if (titulo.length > 100) {
                    console.log("El titulo no puede tener mas de 100 caracteres.\n");
                    return;
                }
            } while (titulo.trim() === "" || titulo.length > 100);
            let descripcion;
            do {
                descripcion = yield (0, io_1.input)(`T${i + 1} - Ingrese la descripcion: ⋙ `);
                if (descripcion.length > 500) {
                    console.log("\nLa descripcion no puede contener mas de 500 caracteres.");
                    console.log("Cantidad de caracteres ingresados: ");
                    console.log(descripcion.length);
                    return;
                }
            } while (descripcion.length > 500);
            let estado = "Pendiente";
            let opcionEstado;
            do {
                opcionEstado = Number(yield (0, io_1.input)(`${i + 1} - Ingrese el estado:\n` +
                    "[1] Pendiente\n" +
                    "[2] En curso\n" +
                    "[3] Terminada\n" +
                    "[4] Cancelada\n⋙ "));
                if (![1, 2, 3, 4].includes(opcionEstado)) {
                    console.log("Respuesta incorrecta: ", opcionEstado);
                    console.log("Respuestas correctas [1] - [2] - [3] - [4]\n");
                }
            } while (![1, 2, 3, 4].includes(opcionEstado));
            switch (opcionEstado) {
                case 1:
                    estado = "Pendiente";
                    break;
                case 2:
                    estado = "En curso";
                    break;
                case 3:
                    estado = "Terminada";
                    break;
                case 4:
                    estado = "Cancelada";
                    break;
            }
            // Guardar las tareas en el array
            console.log(`Tarea N° [${i + 1}] cargada...\n`);
            tareas.push({ titulo, descripcion, estado });
        }
    });
}
