const estudiante = require("../DAO/estudianteDAO");

//CONTROLADOR PARA REGISTRAR ESTUDIANTES
exports.registrarEstudiantes = async(request, response) => {

    try{
        const obtenerDatosEstudiante = request.body;
        const nuevoRegistro = await estudiante .registrar(obtenerDatosEstudiante);
        response.status(201).json(
            {
                message: "Estudiante registrado correctamente",
                data: nuevoRegistro
            }
        );
    }catch(error){
        console.error("Algo no salio como se esperaba", error);
        response.status(500).json(
            {
                message: "Error al registrar el estudiante",
                error: error.message
            }
        );
    }

}

//CONTROLADOR PARA LISTAR ESTUDIANTES
exports.listarEstudiantes = async(request, response) => {

    try{
        const estudiantes = await estudiante.listar();
        response.status(200).json(
            {
                message: "Estudiantes listados correctamente",
                data: estudiantes
            }
        )

    }catch(error){
        console.error("Error al listar los estudiantes:", error);
        response.status(500).json(
            {
                message: "Error al listar los estudiantes",
                error: error.message
            }
        );
    }

}