import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logoUas from '../assets/img/logo-uas.png';
import '../assets/css/header.css';
import logoAdiuas from '../assets/img/adiuas-logo.png';

const Header = () => {

    const navigate = useNavigate();

    return(

        <>

            <header class="site-header">
                <div class="institutional-header">
                    <a class="uas-mark" href="#" aria-label="ADIUAS, inicio">
                        <img src={logoUas} alt="Logo UAS" />
                    </a>
                    <div class="institutional-title">
                        <h2>Universidad Autónoma de Sinaloa</h2>
                        <h1>Programa de Atención a la Diversidad <b>·</b> ADIUAS</h1>
                    </div>
                </div>

                <div class="institutional-logos" aria-label="Logotipos institucionales">
                    <img src={logoAdiuas} alt="Logo ADIUAS" class="adiuas-logo"/>
                </div>

                <nav class="program-nav" aria-label="Navegación principal">
                    <div class="program-nav-inner">
                        <a href="/" className='header-nav-item'>Inicio</a>
                        <a onClick={()=>navigate('/registro')} aria-current="page" >Registrar visita</a>
                        <details class="nav-dropdown">
                            <summary className='header-nav-item'>Ciclo escolar</summary>
                            <div class="dropdown-panel">

                                <a href="#">2020 - 2021</a>
                                <a href="#">2021 - 2022</a>
                                <a href="#">2022 - 2023</a>
                                <a href="#">2023 - 2024</a>
                                <a href="#">2024 - 2025</a>
                                <a href="#">2025 - 2026</a>

                            </div>
                        </details>
                        <details class="nav-dropdown">
                            <summary className='header-nav-item'>Unidades</summary>
                            <div class="dropdown-panel">
                                
                                <a href="#">Tifotecnologias</a>
                                <a href="#">Audicion y lenguaje</a>
                                <a href="#">Psicopedagogia</a>
                                <a href="#">123</a>
                                <a href="#">123</a>
                                <a href="#">123</a>

                            </div>
                        </details>
                    </div>
                </nav>
            </header>
        
        </>

    );

}

export default Header;