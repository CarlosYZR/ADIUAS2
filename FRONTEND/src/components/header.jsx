import logoUas from '../assets/img/logo-uas.png';
import '../assets/css/header.css';
import logoAdiuas from '../assets/img/adiuas-logo.png';

const Header = () => {

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
                        <a href="index.jsx">Inicio</a>
                        <a href="RegistroVisita.php" aria-current="page">Registrar visita</a>
                        <details class="nav-dropdown">
                            <summary>Ciclo escolar</summary>
                            <div class="dropdown-panel">

                                <a href="#"></a>
                                
                            </div>
                        </details>
                        <details class="nav-dropdown">
                            <summary>Unidades</summary>
                            <div class="dropdown-panel">
                                
                                <a href="informes.php"></a>
                               
                            </div>
                        </details>
                    </div>
                </nav>
            </header>
        
        </>

    );

}

export default Header;