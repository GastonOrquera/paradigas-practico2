import { input } from "./io";
import { getTareas } from "./agregarTarea"


export async function buscarTarea(): Promise<void> {
    let tareas = getTareas();

    for (let i = 0; i < tareas.length; i++) {
        console.log(`Tarea [${i + 1}] - Titulo: ${tareas[i].titulo}`);
    }

    let opcionElegida: number = Number(await input("Elija una opcion: "));

    if (opcionElegida > 0 && opcionElegida <= tareas.length) {
        let t = tareas[opcionElegida - 1];
        console.log(`Título: ${t.titulo}`);
        console.log(`Descripción: ${t.descripcion}`);
        console.log(`Estado: ${t.estado}`);
        console.log("---- ---- ---- ---- ---- ----\n");
    } else {
        console.log("Opción incorrecta.\n");
    }
}