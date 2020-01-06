const express = require("express");
const routes = express.Router();

const BatidaController = require("./controllers/BatidaController");


routes.get("/batidas", BatidaController.index);
routes.get("/batidas/:id", BatidaController.detalhar);
routes.post("/batidas", BatidaController.gravar);
routes.put("/batidas/:id", BatidaController.atualizar);
routes.delete("/batidas/:id", BatidaController.apagar);
routes.get("/batidas/rd/:n", BatidaController.rd);

 module.exports=routes;