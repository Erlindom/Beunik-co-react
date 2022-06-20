import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header className='header'>
            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1" d="M0,256L80,266.7C160,277,320,299,480,266.7C640,235,800,149,960,122.7C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                </path>
            </svg>

            <section className="principal-section" id='home'>
                <div className='content_text'>
                    <h1 className='principal_title'>La App móvil donde podrás encontrar ese look único que has soñado y elegir al profesional que lo hará realidad.</h1>

                    <a href="https://play.google.com/store/apps/details?id=com.beunik_employees&hl=es_CO&gl=US" target={"blank"} className="principal_btn">
                        <i className='bx bxs-down-arrow-square icon_btn'></i> Descargar APP
                    </a>
                    <a href="" className="link_decoration">
                        Ver video de cómo usar Beunik
                    </a>
                </div>

                <img src={require('../../img/header_phone.png')} alt="" className="principal_image" />
        
            </section>

        </header>
        )
    }
}

export default Header;