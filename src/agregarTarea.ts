import { input } from "./io";

// ⋙ ⫸

export type Tarea = { titulo: string; descripcion: string; estado: string; dificultad: string; };
let tareas: Tarea[] = [];

export async function agregarTarea(): Promise<void> {

    let cantTareas: number = Number(await input("Cuantas tareas desea agregar: \n"));

    console.clear();

    console.log("Esta creando una nueva tarea.\n");


    for (let i = 0; i < cantTareas; i++) {

        let titulo: string;
        do {
            titulo = await input(`T${i + 1} - Ingrese el titulo: ⋙ `);
            if (titulo.trim() === "") {
                console.log("El titulo no puede ir vacio.\n");
                return;
            } else if (titulo.length > 100) {
                console.log("El titulo no puede tener mas de 100 caracteres.\n");
                return;
            }

        } while (titulo.trim() === "" || titulo.length > 100);

        let descripcion: string;
        do {
            descripcion = await input(`T${i + 1} - Ingrese la descripcion: ⋙ `);

            if (descripcion.length > 500) {
                console.log("\nLa descripcion no puede contener mas de 500 caracteres.");
                console.log("Cantidad de caracteres ingresados: ", descripcion.length);
                return;
            }

        } while (descripcion.length > 500);

        let estado: string = "Pendiente";
        let opcionEstado: number;
        do {
            opcionEstado = Number(await input(
                `${i + 1} - Ingrese el estado:\n` +
                "[1] Pendiente\n" +
                "[2] En curso\n" +
                "[3] Terminada\n" +
                "[4] Cancelada\n⋙ "
            ));

            if (![1, 2, 3, 4].includes(opcionEstado)) {
                console.log("Respuesta incorrecta: ", opcionEstado);
                console.log("Respuestas correctas [1] - [2] - [3] - [4]\n");
            }
        } while (![1, 2, 3, 4].includes(opcionEstado));

        switch (opcionEstado) {
            case 1: estado = "Pendiente"; break;
            case 2: estado = "En curso"; break;
            case 3: estado = "Terminada"; break;
            case 4: estado = "Cancelada"; break;
            default: estado = "Pendiente"; break;
        }

        let dificultad: string;
        do {
            dificultad = await input(
                `${i + 1} - Ingrese la dificultad:\n` +
                "[1] Fácil\n" +
                "[2] Media\n" +
                "[3] Difícil\n⋙ "
            );

            if (!["1", "2", "3"].includes(dificultad)) {
                console.log("Opción inválida. Ingrese 1, 2 o 3.\n");
            }
        } while (!["1", "2", "3"].includes(dificultad));

        switch (dificultad) {
            case "1": dificultad = "🌟🌑🌑"; break;
            case "2": dificultad = "🌟🌟🌑"; break;
            case "3": dificultad = "🌟🌟🌟"; break;
        }

        // Guardar las tareas en el array

        console.log(`Tarea N° [${i + 1}] cargada...\n`);

        tareas.push({ titulo, descripcion, estado, dificultad });
    }

    console.log("Tareas creadas exitosamente.\n");
}

export function getTareas(): Tarea[] {
    return tareas;
}
