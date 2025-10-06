import { input } from "./io";
import { getTareas } from "./agregarTarea"

// ``

export async function verTarea(): Promise<void> {

    let tareas = getTareas();

    if (tareas.length === 0) {
        console.log("No hay tareas registradas.");
        return;
    }


    let opcion: number;

    do {
        console.log("¿Qué tareas deseas ver?\n  [1] - Todas\n  [2] - Pendientes\n  [3] - En curso\n  [4] - Terminadas\n  [5] - Canceladas\n  [0] - Volver\n");
        opcion = Number(await input("⋙ "));

        switch (opcion) {
            case 1: await verTodas(); break;
            case 2: await pendientes(); break;
            case 3: await enCurso(); break;
            case 4: await terminadas(); break;
            case 5: await cancelada(); break;
            case 0: console.log("Volviendo a el menu.\n"); break;
            default: console.log("Opcion incorrecta."); break;
        }

    } while (opcion !== 0);

}

async function verTodas(): Promise<void> {
    let tareas = getTareas();

    for (let i = 0; i < tareas.length; i++) {
        console.log(`Tarea [${i + 1}] - Titulo: ${tareas[i].titulo}`);
        console.log(`Descripción: ${tareas[i].descripcion}`);
        console.log(`Estado: ${tareas[i].estado}`);
        console.log(`Dificultad: ${tareas[i].dificultad}`);
        console.log("---- ---- ---- ---- ---- ----\n");
    }

}

async function pendientes(): Promise<void> {
    let tareas = getTareas();

    let hayPendientes = false;

    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].estado === "Pendiente") {
            hayPendientes = true;
            console.log(`Tarea [${i + 1}] - Título: ${tareas[i].titulo}`);
            console.log(`Descripción: ${tareas[i].descripcion}`);
            console.log(`Estado: ${tareas[i].estado}`);
            console.log(`Dificultad: ${tareas[i].dificultad}`);
            console.log("---- ---- ---- ---- ---- ----\n");
        }
    }

    if (!hayPendientes) {
        console.log("No hay tareas pendientes.\n");
    }
}

async function enCurso(): Promise<void> {
    let tareas = getTareas();

    let hayPendientes = false;

    console.log("---- TAREAS EN CURSO ----\n");

    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].estado === "En curso") {
            hayPendientes = true;
            console.log(`Tarea [${i + 1}] - Título: ${tareas[i].titulo}`);
            console.log(`Descripción: ${tareas[i].descripcion}`);
            console.log(`Estado: ${tareas[i].estado}`);
            console.log(`Dificultad: ${tareas[i].dificultad}`);
            console.log("---- ---- ---- ---- ---- ----\n");
        }
    }

    if (!hayPendientes) {
        console.log("No hay tareas pendientes.\n");
    }
}

async function terminadas(): Promise<void> {
    let tareas = getTareas();

    let hayPendientes = false;

    console.log("---- TAREAS TERMINADAS ----\n");

    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].estado === "Terminada") {
            hayPendientes = true;
            console.log(`Tarea [${i + 1}] - Título: ${tareas[i].titulo}`);
            console.log(`Descripción: ${tareas[i].descripcion}`);
            console.log(`Estado: ${tareas[i].estado}`);
            console.log(`Dificultad: ${tareas[i].dificultad}`);
            console.log("---- ---- ---- ---- ---- ----\n");
        }
    }

    if (!hayPendientes) {
        console.log("No hay tareas pendientes.\n");
    }
}

async function cancelada(): Promise<void> {
    let tareas = getTareas();

    let hayPendientes = false;

    console.log("---- TAREAS CANCELADA ----\n");

    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].estado === "Cancelada") {
            hayPendientes = true;
            console.log(`Tarea [${i + 1}] - Título: ${tareas[i].titulo}`);
            console.log(`Descripción: ${tareas[i].descripcion}`);
            console.log(`Estado: ${tareas[i].estado}`);
            console.log(`Dificultad: ${tareas[i].dificultad}`);
            console.log("---- ---- ---- ---- ---- ----\n");
        }
    }

    if (!hayPendientes) {
        console.log("No hay tareas pendientes.\n");
    }
}
