const estudiante = require("../models/estudiante");
const conexion = require("../config/database");


//METODO DE LISTAR ESTUDIANTES (SE SUPONE)
exports.listar = async () => {

  const [registros] = await conexion.promise().query("SELECT * FROM adiuas.students");

  return registros.map(
    registro => new estudiante(
      registro.id,
      registro.nombre,
      registro.edad,
      registro.genero,
      registro.correo,
      registro.telefono,
      registro.grupo,
      registro.escuela,
      registro.unidad,
      registro.poblacion
    )
  );
};

//METODO DE REGISTRAR NUEVO ESTUDIANTE
exports.registrar = async (estudiante) => {

  try {
    const registrar = await conexion.promise().query(
      "INSERT INTO adiuas.students (nombre, edad, genero, correo, telefono, grupo, escuela, unidad, poblacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [estudiante.nombre, estudiante.edad, estudiante.genero, estudiante.correo, estudiante.telefono, estudiante.grupo, estudiante.escuela, estudiante.unidad, estudiante.poblacion]

    );

    return registrar;

  } catch (error) {
    console.error("Error al registrar el estudiante:", error);
    throw error;
  }

}