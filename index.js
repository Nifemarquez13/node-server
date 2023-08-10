const {
  listaDeTareas,
  principal,
  mostrarTareas,
  crearTarea,
  eliminarTarea,
  cambiarEstadoTarea,
} = require("./newTask");

async function menu() {
  let opcion;
  do {
    opcion = await principal();
    switch (opcion) {
      case "0":
        crearTarea()
          .then((descripcion) => {
            listaDeTareas.push({
              id: listaDeTareas.length + 1,
              nombre: descripcion,
              completado: false,
            });
            console.error("se agregó la tarea exitosamente");
          })
          .catch((error) => {
            console.error("No se pudo agregar la tarea", error);
          });
        break;
      case "1":
        eliminarTarea()
          .then((descripcion) => {
            listaDeTareas.splice(descripcion, 1);
            console.error("se eliminó la tarea exitosamente");
          })
          .catch((error) => {
            console.error("No se pudo eliminar la tarea", error);
          });
        break;
      case "2":
        try {
          const tarea = await cambiarEstadoTarea();
          const tareaEncontrada = listaDeTareas.filter(
            (_, indice) => index === indice
          )[0];
          tareaEncontrada.completado = !tareaEncontrada.completado;
          console.log(listaDeTareas);
        } catch (error) {
          console.error("Error al completar las tareas:", error);
        }
        break;
      case "3":
        try {
          const tarea = await mostrarTareas();
          console.log(tarea);
        } catch (error) {
          console.error("Estas son las tareas: ", error);
        }
        break;
      case "4":
        console.log("Gracias, vuelve pronto!");
        break;
      default:
        console.log(
          "Opción incorrecta. Por favor, seleccione una opción válida."
        );
        principal();
        break;
    }
  } while (opcion !== 0);
}

menu();
