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


exports.registrar = async(estudiante) => {

  try {
    const registrar = await conexion.promise().query(
      "INSERT INTO adiuas.estudiantes (nombre, edad, escuela, discapacidad, curp, poblacion, genero, correo, numero, cuenta, domicilio, extras) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [estudiante.nombre, estudiante.edad, estudiante.escuela, estudiante.discapacidad, estudiante.curp, estudiante.poblacion, estudiante.genero, estudiante.correo, estudiante.numero, estudiante.cuenta, estudiante.domicilio, estudiante.extras]

    );

    return registrar;

  } catch (error) {
    console.error("Error al registrar el estudiante:", error);
    throw error;
  }

}*/