const estudiante = require("../models/estudiante");
const conexion = require("../config/database");


//USAR PROMESAS, AWAIT Y ASYNC PARA QUE NO DEJE DE CORRER
//EL CODIGO
//METODO DE LISTAR ESTUDIANTES (SE SUPONE)
exports.listar = async() => {
  const [registros] = await conexion.promise().query("SELECT * FROM estudiantes");

  return registros.map(
    registro => new estudiante(
        registro.id,
        registro.nombre,
        registro.edad,
        registro.escuela,
        registro.discapacidad,
        registro.curp,
        registro.poblacion,
        registro.genero,
        registro.correo,
        registro.numero,
        registro.cuenta,
        registro.domicilio,
        registro.extras,
      )
  );
};


exports.registrar = async(estudiante) => {

    const registrar = await conexion.promise().query(
        "INSERT INTO adiuas.estudiantes (nombre, edad...) VALUES (?, ?, ?)",
        [estudiante.nombre, estudiante.edad]

    );

}