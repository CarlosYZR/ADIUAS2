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

//METODO DE REGISTRAR NUEVO ESTUDIANTE
exports.registrar = async(estudiante) => {

  try{
    const registrar = await conexion.promise().query(
      "INSERT INTO adiuas.estudiantes (nombre, edad, escuela, discapacidad, curp, poblacion, genero, correo, numero, cuenta, domicilio, extras) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [estudiante.nombre, estudiante.edad, estudiante.escuela, estudiante.discapacidad, estudiante.curp, estudiante.poblacion, estudiante.genero, estudiante.correo, estudiante.numero, estudiante.cuenta, estudiante.domicilio, estudiante.extras]

    );

    return registrar;
    
  }catch(error){
    console.error("Error al registrar el estudiante:", error);
    throw error;
  }

}