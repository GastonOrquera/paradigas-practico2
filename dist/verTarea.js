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
exports.verTarea = verTarea;
const io_1 = require("./io");
const agregarTarea_1 = require("./agregarTarea");
// ``
function verTarea() {
    return __awaiter(this, void 0, void 0, function* () {
        let tareas = (0, agregarTarea_1.getTareas)();
        if (tareas.length === 0) {
            console.log("No hay tareas registradas.");
            return;
        }
        let opcion;
        do {
            console.log("¿Qué tareas deseas ver?\n  [1] - Todas\n  [2] - Pendientes\n  [3] - En curso\n  [4] - Terminadas\n  [5] - Terminadas\n  [0] - Volver\n");
            opcion = Number(yield (0, io_1.input)("⋙ "));
            switch (opcion) {
                case 1:
                    yield verTodas();
                    break;
                case 2:
                    yield pendientes();
                    break;
                case 3:
                    yield enCurso();
                    break;
                case 4:
                    yield terminadas();
                    break;
                case 5:
                    yield cancelada();
                    break;
                case 0:
                    console.log("Volviendo a el menu.\n");
                    break;
                default:
                    console.log("Opcion incorrecta.");
                    break;
            }
        } while (opcion !== 0);
    });
}
function verTodas() {
    return __awaiter(this, void 0, void 0, function* () {
        let tareas = (0, agregarTarea_1.getTareas)();
        // let hayPendientes = false;
        for (let i = 0; i < tareas.length; i++) {
            // hayPendientes = true;
            console.log(`Tarea [${i + 1}] - Titulo: ${tareas[i].titulo}`);
            console.log(`Descripción: ${tareas[i].descripcion}`);
            console.log(`Estado: ${tareas[i].estado}`);
            console.log("---- ---- ---- ---- ---- ----\n");
        }
        // if (!hayPendientes) {
        //     console.log("No hay tareas.\n");
        // }
    });
}
function pendientes() {
    return __awaiter(this, void 0, void 0, function* () {
        let tareas = (0, agregarTarea_1.getTareas)();
        let hayPendientes = false;
        for (let i = 0; i < tareas.length; i++) {
            if (tareas[i].estado === "Pendiente") {
                hayPendientes = true;
                console.log(`Tarea [${i + 1}] - Título: ${tareas[i].titulo}`);
                console.log(`Descripción: ${tareas[i].descripcion}`);
                console.log(`Estado: ${tareas[i].estado}`);
                console.log("---- ---- ---- ---- ---- ----\n");
            }
        }
        if (!hayPendientes) {
            console.log("No hay tareas pendientes.\n");
        }
    });
}
function enCurso() {
    return __awaiter(this, void 0, void 0, function* () {
        let tareas = (0, agregarTarea_1.getTareas)();
        let hayPendientes = false;
        console.log("---- TAREAS EN CURSO ----\n");
        for (let i = 0; i < tareas.length; i++) {
            if (tareas[i].estado === "En curso") {
                hayPendientes = true;
                console.log(`Tarea [${i + 1}] - Título: ${tareas[i].titulo}`);
                console.log(`Descripción: ${tareas[i].descripcion}`);
                console.log(`Estado: ${tareas[i].estado}`);
                console.log("---- ---- ---- ---- ---- ----\n");
            }
        }
        if (!hayPendientes) {
            console.log("No hay tareas pendientes.\n");
        }
    });
}
function terminadas() {
    return __awaiter(this, void 0, void 0, function* () {
        let tareas = (0, agregarTarea_1.getTareas)();
        let hayPendientes = false;
        console.log("---- TAREAS TERMINADAS ----\n");
        for (let i = 0; i < tareas.length; i++) {
            if (tareas[i].estado === "Terminada") {
                hayPendientes = true;
                console.log(`Tarea [${i + 1}] - Título: ${tareas[i].titulo}`);
                console.log(`Descripción: ${tareas[i].descripcion}`);
                console.log(`Estado: ${tareas[i].estado}`);
                console.log("---- ---- ---- ---- ---- ----\n");
            }
        }
        if (!hayPendientes) {
            console.log("No hay tareas pendientes.\n");
        }
    });
}
function cancelada() {
    return __awaiter(this, void 0, void 0, function* () {
        let tareas = (0, agregarTarea_1.getTareas)();
        let hayPendientes = false;
        console.log("---- TAREAS CANCELADA ----\n");
        for (let i = 0; i < tareas.length; i++) {
            if (tareas[i].estado === "Cancelada") {
                hayPendientes = true;
                console.log(`Tarea [${i + 1}] - Título: ${tareas[i].titulo}`);
                console.log(`Descripción: ${tareas[i].descripcion}`);
                console.log(`Estado: ${tareas[i].estado}`);
                console.log("---- ---- ---- ---- ---- ----\n");
            }
        }
        if (!hayPendientes) {
            console.log("No hay tareas pendientes.\n");
        }
    });
}
