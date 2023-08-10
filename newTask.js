const readline = require("readline-sync");

const listaDeTareas = [
  { id: 1, nombre: "tarea1", completado: false },
  { id: 2, nombre: "tarea2", completado: true },
];

const principal = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const opciones = [
        "Crear tarea.",
        "Eliminar tareas.",
        "Completar tareas.",
        "Listar de tareas",
      ];
      const index = readline.keyInSelect(opciones, "¿QUE QUIERES HACER?");
      const opcion = index.toString();
      if (opcion) {
        resolve(opcion);
      } else {
        reject("no es una opcion valida");
      }
    }, 2000); // Se simula un retardo de 2 segundos
  });
};

const mostrarTareas = async () => {
  return new Promise((resolve, reject) => {
    if (listaDeTareas) {
      resolve(listaDeTareas);
    } else {
      reject("No existen tareas a mostrar");
    }
  });
};

//función para crear nueva tarea
const crearTarea = async () => {
  return new Promise((resolve, reject) => {
    const nombreTareaCreada = readline.question("¿Que tarea desea crear? ");
    if (nombreTareaCreada) {
      resolve(nombreTareaCreada);
    } else {
      reject("No se pudo crear la tarea");
    }
  });
  //
};

//Función para eliminar una tarea.
const eliminarTarea = async () => {
  return new Promise((resolve, reject) => {
    const index = readline.keyInSelect(
      JSON.stringify(listaDeTareas),
      "¿Cuál de estas tareas deseas eliminar?"
    );
    if (index) {
      resolve(index);
    } else {
      reject("No se pudo eliminar la tarea");
    }
  });
};

//Funcion para cambiar el estado de la tarea.
const cambiarEstadoTarea = async () => {
  return new Promise((resolve, reject) => {
    console.log(listaDeTareas);
    const index = readline.keyInSelect(
      listaDeTareas,
      "¿Cuál de estas tareas deseas completar?"
    );
    if (index) {
      resolve(index);
    } else {
      reject("No se pudo completar la tarea");
    }
  });
};

module.exports = {
  listaDeTareas,
  principal,
  mostrarTareas,
  crearTarea,
  eliminarTarea,
  cambiarEstadoTarea,
};
