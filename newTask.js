const { listenerCount } = require("process");
const readline = require("readline-sync");

const listaDeTareas = [
  { id: 1, nombre: "tarea1", completado: false },
  { id: 2, nombre: "tarea2", completado: true },
];

const principal = () => {
  const opciones = [
    "Crear tarea.",
    "Eliminar tareas.",
    "Completar tareas.",
    "Listar de tareas",
  ];
  const index = readline.keyInSelect(opciones, "¿QUE QUIERES HACER?");
  menu(index.toString());
};

function menu(elige) {
  console.log(elige);
  switch (elige) {
    case "0":
      crearTarea();
      break;
    case "1":
      eliminarTarea();
      break;
    case "2":
      cambiarEstadoTarea();
      break;
    case "3":
      mostrarTareas();
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
}

const mostrarTareas = () => {
  console.log(listaDeTareas);
  principal();
};

//función para crear nueva tarea
const crearTarea = () => {
  const nombreTareaCreada = readline.question("¿Que tarea desea crear? ");
  listaDeTareas.push({
    id: listaDeTareas.length + 1,
    nombre: nombreTareaCreada,
    completado: false,
  });
  principal();
};

//Función para eliminar una tarea.
const eliminarTarea = () => {
  const index = readline.keyInSelect(
    JSON.stringify(listaDeTareas),
    "¿Cuál de estas tareas deseas eliminar?"
  );
  listaDeTareas.splice(index, 1);
  console.log(listaDeTareas);
  principal();
};

const cambiarEstadoTarea = () => {
  console.log(listaDeTareas);
  const index = readline.keyInSelect(
    listaDeTareas,
    "¿Cuál de estas tareas deseas completar?"
  );
  const tareaEncontrada = listaDeTareas.filter(
    (_, indice) => index === indice
  )[0];
  tareaEncontrada.completado = !tareaEncontrada.completado;
  console.log(listaDeTareas);
  principal();
};

principal();
