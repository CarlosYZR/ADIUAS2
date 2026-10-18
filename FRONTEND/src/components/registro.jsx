import "../assets/css/registro.css";

const Registro = () => (
  <main className="registro-page">
    <section className="registro-card" aria-labelledby="registro-title">
      <header className="registro-heading">
        <h1 id="registro-title">Formulario de registro</h1>
      </header>

      <form className="registro-form" onSubmit={(event) => event.preventDefault()}>
        <fieldset className="registro-fieldset">
          <legend>Datos personales</legend>
          <div className="registro-grid">
            <label className="registro-field">
              <span>Nombre(s)</span>
              <input name="nombres" type="text" autoComplete="given-name" placeholder="" required />
            </label>
            <label className="registro-field">
              <span>Apellido paterno</span>
              <input name="apellido_paterno" type="text" autoComplete="family-name" placeholder="" required />
            </label>
            <label className="registro-field">
              <span>Apellido materno</span>
              <input name="apellido_materno" type="text" placeholder="" />
            </label>
            <label className="registro-field">
              <span>Fecha de nacimiento</span>
              <input name="fecha_nacimiento" type="date" required />
            </label>
            <label className="registro-field">
              <span>CURP</span>
              <input name="curp" type="text" maxLength="18" placeholder="" />
            </label>
            <label className="registro-field">
              <span>Sexo</span>
              <select name="sexo" defaultValue="">
                <option value="" disabled>Selecciona una opción</option>
                <option value="mujer">Mujer</option>
                <option value="hombre">Hombre</option>
                <option value="no-especificar">Prefiero no especificar</option>
              </select>
            </label>
          </div>
        </fieldset>

        <fieldset className="registro-fieldset">
          <legend>Contacto y ubicación</legend>
          <div className="registro-grid">
            <label className="registro-field">
              <span>Correo electrónico</span>
              <input name="correo" type="email" autoComplete="email" placeholder="nombre@ejemplo.com" required />
            </label>
            <label className="registro-field">
              <span>Teléfono celular</span>
              <input name="telefono" type="tel" autoComplete="tel" inputMode="tel" placeholder="10 dígitos" />
            </label>
            <label className="registro-field">
              <span>Municipio</span>
              <input name="municipio" type="text" placeholder="Municipio" />
            </label>
            <label className="registro-field">
              <span>Domicilio</span>
              <input name="domicilio" type="text" autoComplete="street-address" placeholder="Calle, número y colonia" />
            </label>
          </div>
        </fieldset>

        <fieldset className="registro-fieldset">
          <legend>Información académica y apoyos</legend>
          <div className="registro-grid">
            <label className="registro-field">
              <span>Unidad académica</span>
              <input name="unidad_academica" type="text" placeholder="Facultad o escuela" />
            </label>
            <label className="registro-field">
              <span>Programa educativo</span>
              <input name="programa_educativo" type="text" placeholder="Carrera o programa" />
            </label>
            <label className="registro-field">
              <span>Grado o semestre</span>
              <select name="grado" defaultValue="">
                <option value="" disabled>Selecciona una opción</option>
                <option>1.º - 3.º semestre</option>
                <option>4.º - 6.º semestre</option>
                <option>7.º semestre o superior</option>
                <option>Otro</option>
              </select>
            </label>
            <label className="registro-field">
              <span>Tipo de apoyo que solicitas</span>
              <select name="tipo_apoyo" defaultValue="">
                <option value="" disabled>Selecciona una opción</option>
                <option>Orientación</option>
                <option>Acompañamiento académico</option>
                <option>Ajustes razonables</option>
                <option>Accesibilidad</option>
                <option>Otro</option>
              </select>
            </label>
            <label className="registro-field registro-field--full">
              <span>Describe los apoyos o ajustes que necesitas</span>
              <textarea name="descripcion_apoyo" rows="4" placeholder="Comparte la información que consideres importante" />
            </label>
            <label className="registro-field registro-field--full">
              <span>Documento de identificación (opcional)</span>
              <input name="documento" type="file" accept=".pdf,.jpg,.jpeg,.png" />
              <small>Formatos permitidos: PDF, JPG o PNG.</small>
            </label>
          </div>
        </fieldset>

        <fieldset className="registro-fieldset">
          <legend>Contacto de emergencia (opcional)</legend>
          <div className="registro-grid">
            <label className="registro-field">
              <span>Nombre de contacto</span>
              <input name="contacto_emergencia" type="text" placeholder="Nombre completo" />
            </label>
            <label className="registro-field">
              <span>Teléfono de contacto</span>
              <input name="telefono_emergencia" type="tel" inputMode="tel" placeholder="10 dígitos" />
            </label>
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

export default Registro;
