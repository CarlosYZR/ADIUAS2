import "../assets/css/registro.css";

const Registro = () => {

  return(
    <main className="registro-page">
      <section className="registro-card" aria-labelledby="registro-title">
        <header className="registro-heading">
          <h1 id="registro-title">Formulario de registro</h1>
        </header>

        <form className="registro-form" action="http://localhost:3000/estudiantes/registrar" method="POST">
          <fieldset className="registro-fieldset">
            <legend>Datos personales</legend>
            <div className="registro-grid">
              <label className="registro-field">
                <span>Nombre(s)</span>
                <input name="nombre" type="text" autoComplete="given-name" placeholder="" required />
              </label>
              <label className="registro-field">
                <span>Sexo</span>
                <select name="genero" defaultValue="No seleccionado" required>
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="mujer">Mujer</option>
                  <option value="hombre">Hombre</option>
                  <option value="no-especificar">Prefiero no especificar</option>
                </select>
              </label>
            </div>
          </fieldset>

          <fieldset className="registro-fieldset">
            <legend>Datos</legend>
            <div className="registro-grid">
              <label className="registro-field">
                <span>Correo electrónico</span>
                <input name="correo" type="email" autoComplete="email" placeholder="" required />
              </label>
              <label className="registro-field">
                <span>Numero</span>
                <input name="telefono" type="number" inputMode="tel" placeholder="" maxLength="10"/>
              </label>
            </div>
          </fieldset>

          <fieldset className="registro-fieldset">
            <legend>Información académica y apoyos</legend>
            <div className="registro-grid">
              <label className="registro-field">
                <span>Unidad académica</span>
                <input name="unidad" type="text" placeholder="" />
              </label>
              <label className="registro-field">
                <span>Programa educativo</span>
                <input name="escuela" type="text" placeholder="" />
              </label>
              <label className="registro-field">
                <span>Grado o semestre</span>
                <select name="poblacion" defaultValue="">
                  <option value="" disabled>Selecciona una opción</option>
                  <option>1.º - 3.º semestre</option>
                  <option>4.º - 6.º semestre</option>
                  <option>7.º semestre o superior</option>
                  <option>Otro</option>
                </select>
              </label>
              {/* <label className="registro-field registro-field--full">
                <span>Datos extra</span>
                <textarea name="descripcion_apoyo" rows="4" placeholder="Escribe datos que te pueden ayudar a darle un mejor seguimiento al caso" />
              </label>
              <label className="registro-field registro-field--full">
                <span>Documento de identificación (opcional)</span>
                <input name="documento" type="file" accept=".pdf,.jpg,.jpeg,.png" />
                <small>Formatos permitidos: PDF, JPG o PNG.</small>
              </label> */}
            </div>
          </fieldset>

          <label className="registro-consent">
            <input name="acepta_contacto" type="checkbox" required />
            <span>Confirmo que la información proporcionada es correcta y autorizo que el equipo ADIUAS se ponga en contacto conmigo.</span>
          </label>

          <div className="registro-actions">
            <button className="registro-submit" type="submit">Enviar registro</button>
            <button className="registro-reset" type="reset">Limpiar formulario</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Registro;
