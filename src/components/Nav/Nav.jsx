import React, { Component } from 'react';
import './nav.css';
import logo_white from '../../img/logo_white.svg';

class Nav extends Component {
    constructor() {
        super();

        this.state = {
            nav: "",
            closeNav: ""
        }
    }

    navClick = () => {
        this.setState({
            nav: this.state.nav === "" ? "is-active" : "",
            closeNav: this.state.closeNav === "" ? "" : ""
        })
      }


    render() {
        return (
            <div className='container_nav'>

                   <a href="#home">
                        <div className='logo_content_menu'>
                            <img className='logo2' src={require("../../img/Beunik_Horizontal.png")} alt="" />
                        </div>
                    </a>

               <div className="contenedor_hamburger">
                    <button className={`hamburger ${this.state.nav}`} onClick={this.navClick}>
                        <div className="bar"></div>
                    </button>
               </div>

                <div className='navegation' style={this.state.nav ? { left: "0px" } : { left: "" }}>
                    <a href="#home">
                        <div>
                            <img className='logo' src={logo_white} alt="" />
                        </div>
                    </a>

                    <nav className='nav_content'>
                        <a className={`nav_links ${this.state.closeNav}`} onClick={this.navClick} href="https://play.google.com/store/apps/details?id=com.beunik_employees&hl=es_CO&gl=US" target={"blank"} >
                            <i className='bx bxs-down-arrow-square icon_nav'></i> Descargar App
                        </a>
                        <a className={`nav_links ${this.state.closeNav}`} onClick={this.navClick} href="#feature">
                            <i className='bx bxs-rocket icon_nav' ></i> Caracteristicas
                        </a>
                        <a className={`nav_links ${this.state.closeNav}`} onClick={this.navClick} href="#questions">
                            <i className='bx bxs-add-to-queue icon_nav' ></i> Preguntas Frecuentes
                        </a>
                        <a className={`nav_links ${this.state.closeNav}`} onClick={this.navClick} href="#contact">
                            <i className='bx bxs-message-square-dots icon_nav'></i> Contacto
                        </a>
                    </nav>

                </div>
            </div>
        )    
  };
}

export default Nav;
