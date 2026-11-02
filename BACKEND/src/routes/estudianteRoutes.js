const express = require("express");
const router = express.Router();

const Controller = require("../controllers/estudianteControlador");

// Registrar estudiante
router.post("/registrar", Controller.registrarEstudiantes);

// Listar estudiantes
router.get("/listar", Controller.listarEstudiantes);

module.exports = router;
