import "../assets/css/padron.css";
import { useEffect, useMemo, useState } from 'react';

const normalizar = (valor) => String(valor ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

const Padron = () => {
    const [estudiantes, setEstudiantes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState('');
    const [filtros, setFiltros] = useState({
        busqueda: '',
        genero: '',
        grupo: '',
        escuela: '',
        unidad: '',
    });

    const opcionesFiltro = (campo) => [...new Set(
        estudiantes
            .map((estudiante) => estudiante[campo])
            .filter((valor) => valor !== null && valor !== undefined && String(valor).trim() !== '')
            .map(String)
    )].sort((a, b) => a.localeCompare(b, 'es'));

    const estudiantesFiltrados = useMemo(() => estudiantes.filter((estudiante) => {
        const coincideBusqueda = !filtros.busqueda || Object.values(estudiante)
            .some((valor) => normalizar(valor).includes(normalizar(filtros.busqueda.trim())));

        return coincideBusqueda
            && (!filtros.genero || String(estudiante.genero ?? '') === filtros.genero)
            && (!filtros.grupo || String(estudiante.grupo ?? '') === filtros.grupo)
            && (!filtros.escuela || String(estudiante.escuela ?? '') === filtros.escuela)
            && (!filtros.unidad || String(estudiante.unidad ?? '') === filtros.unidad);
    }), [estudiantes, filtros]);

    const actualizarFiltro = (campo) => (evento) => {
        setFiltros((actuales) => ({ ...actuales, [campo]: evento.target.value }));
    };

    const limpiarFiltros = () => setFiltros({
        busqueda: '',
        genero: '',
        grupo: '',
        escuela: '',
        unidad: '',
    });

    useEffect(() => {
        const cargarEstudiantes = async () => {
            try {
                const respuesta = await fetch('http://localhost:3000/estudiantes/listar');
                if (!respuesta.ok) {
                    const detalle = await respuesta.json().catch(() => null);
                    throw new Error(detalle?.error || detalle?.message || `Error del servidor (${respuesta.status}).`);
                }

                const resultado = await respuesta.json();
                setEstudiantes(resultado.data ?? []);
            } catch (error) {
                setError(error.message === 'Failed to fetch' ? 'No se pudo conectar con el servidor.' : error.message || 'Ocurrió un error al cargar el padrón.');
            } finally {
                setCargando(false);
            }
        };

        cargarEstudiantes();
    }, []);

    return(
        <main className="padron">
            <section className="padron-container">

                <div className="filtros-padron">
                    <h2>Filtros del padrón</h2>
                    <div>
                        <label>
                            Buscar: &nbsp;
                           <input
                                type="search"
                                value={filtros.busqueda}
                                onChange={actualizarFiltro('busqueda')}
                                placeholder="Ingresa cualquier dato"
                            />
                        </label>
                        {[
                            ['genero', 'Género'],
                            ['grupo', 'Grupo'],
                            ['escuela', 'Escuela'],
                            ['unidad', 'Unidad']    
                        ].map(([campo, etiqueta]) => (
                            <label key={campo}>
                                {etiqueta}: &nbsp;
                               <select value={filtros[campo]} onChange={actualizarFiltro(campo)}>
                                    <option value="">Todos</option>
                                    {opcionesFiltro(campo).map((opcion) => (
                                        <option key={opcion} value={opcion}>{opcion}</option>
                                    ))}
                                </select>
                            </label>
                        ))}
                        <br />
                        <button type="button" onClick={limpiarFiltros}>Limpiar</button>
                    </div>
                    {!cargando && !error && (
                        <h3 role="status">Mostrando {estudiantesFiltrados.length} de {estudiantes.length} estudiantes</h3>
                    )}
                </div>


                {cargando && <p role="status">Cargando estudiantes...</p>}
                {error && <p role="alert">{error}</p>}
                {!cargando && !error && estudiantes.length === 0 && <p>No hay estudiantes registrados.</p>}

                {!cargando && !error && estudiantes.length > 0 && estudiantesFiltrados.length === 0 && (
                    <p>No hay estudiantes que coincidan con los filtros.</p>
                )}

                {!cargando && !error && estudiantesFiltrados.length > 0 && (
                    <div className="tabla-padron">
                        <table>
                            <thead>
                                <tr>
                                    <th >ID</th>
                                    <th>Nombre</th>
                                    <th>Edad</th>
                                    <th>Género</th>
                                    <th>Correo</th>
                                    <th>Teléfono</th>
                                    <th>Grupo</th>
                                    <th>Escuela</th>
                                    <th>Unidad</th>
                                    <th>Población</th>
                                </tr>
                            </thead>
                            <tbody>
                                {estudiantesFiltrados.map((estudiante, indice) => (
                                    <tr key={estudiante.id ?? indice}>
                                        <td>{estudiante.id ?? '—'}</td>
                                        <td>{estudiante.nombre ?? '—'}</td>
                                        <td>{estudiante.edad ?? '—'}</td>
                                        <td>{estudiante.genero ?? '—'}</td>
                                        <td>{estudiante.correo ?? '—'}</td>
                                        <td>{estudiante.telefono ?? '—'}</td>
                                        <td>{estudiante.grupo ?? '—'}</td>
                                        <td>{estudiante.escuela ?? '—'}</td>
                                        <td>{estudiante.unidad ?? '—'}</td>
                                        <td>{estudiante.poblacion ?? '—'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>
        </main>
    );

}

export default Padron;
