class Estudiante {

    constructor(id, nombre, edad, genero, correo, telefono, grupo, escuela, unidad, poblacion) {

        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.correo = correo;
        this.telefono = telefono;
        this.grupo = grupo;
        this.escuela = escuela;
        this.unidad = unidad;
        this.poblacion = poblacion;

    }

}

module.exports = Estudiante;