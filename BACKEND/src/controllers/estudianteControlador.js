const estudiante = require("../DAO/estudianteDAO");

//CONTROLADOR PARA REGISTRAR ESTUDIANTES
exports.registrarEstudiantes = async(request, response) => {

    const camposDelFormulario = [
        'nombre',
        'edad',
        'genero',
        'correo',
        'telefono',
        'grupo',
        'escuela',
        'unidad',
        'poblacion'
    ]

    try{
        const estudianteParaRegistrar = Object.fromEntries(
            camposDelFormulario.map(campo =>[
                campo, request.body[campo]
            ])
        );

        const registro = await estudiante.registrar(estudianteParaRegistrar);

        return response.status(201).json(
            {
                message: "Estudiante registrado correctamente",
                data: registro
            }
        )
    }catch(error){    
        console.error("Error al registrar el estudiante:", error);
        response.status(500).json(
            {
                message: "Error al registrar el estudiante",
                error: error.message
            }
        )
    }

}

//CONTROLADOR PARA LISTAR ESTUDIANTES
exports.listarEstudiantes = async(request, response) => {

    try{
        const estudianteListado = await estudiante.listar();
        response.status(200).json(
            {
                message: "Estudiantes listados correctamente",
                data: estudianteListado
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