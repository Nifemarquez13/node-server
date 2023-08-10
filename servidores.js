const http = require("http");
const port = 3000;
const host = "localhost";

const { listaDeTareas } = require("./newTask");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/tareas") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(listaDeTareas));
  } else {
    res.statusCode = 404;
    res.end("Recurso no encontrado");
  }
});

server.listen(port, host, () => {
  console.log("Servidor encendido");
});
