import { verTarea } from "./verTarea";
import { agregarTarea } from "./agregarTarea";
import { buscarTarea } from "./buscarTarea"
import { input, rl } from "./io";

export async function menu(): Promise<void> {

    let nombre = await input("Ingrese su nombre: ");
    console.clear();
    console.log("Bienvenido [", nombre, "]\n");
    let opcion;
    do {
        console.log("[1] - Ver tareas\n[2] - Buscar tareas\n[3] - Agregar tareas\n[0] - Salir\n");
        opcion = Number(await input("⋙ "));
        switch (opcion) {
            case 1: await verTarea(); break;
            case 2: await buscarTarea(); break;
            case 3: await agregarTarea(); break;
            case 0: console.log("\nSaliendo...\n"); break;
            default: console.log("Opcion incorrecta."); break;
        }

    } while (opcion !== 0);

    rl.close();

    console.log("Hasta luego [", nombre, "]");
}