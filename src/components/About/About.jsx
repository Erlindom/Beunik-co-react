import React, { Component } from 'react';
import './about.css';

class About extends Component {
    render() {
        return (
            <section className="features_section" id='feature'>
            {/* feature_1 */}

            <div className="features">
                <div className="numbers">
                    <img className='icon_number' src={require('../../img/1.png')} alt="" />
                    <h2 className='title_features'>Explora</h2>
                </div>

                <div className='feature_border'>
                    <div className='feature_content'>
                        <img className='image_feature' src={require('../../img/image_feature1.jpg')} alt="" />
                        <img className='image_feature_mobile' src={require('../../img/feature 1 mobile.png')} alt="" />
                        <p className='info_feature'> <span className='text_feature_blue'> Un catálogo completo con muestras de trabajo reales</span> <br /> realizadas por salones de belleza y barberías que te inspirarán </p>
                    </div>
                </div>
            </div>


            {/* feature_2 */}
            <div className="features">
                <div className="numbers">
                    <img className='icon_number' src={require('../../img/2.png')} alt="" />
                    <h2 className='title_features'>Elige</h2>
                </div>

                <div className='feature_border'>
                    <div className='feature_content-2'>
                        <p className='info_feature info_width'> Mira el perfil de cada profesional, salón de belleza o barbería con toda la información y <a href="#" className='text_link_blue'>reseñas validadas</a> para que <span className='text_feature_blue'> tomes la mejor decisión </span> </p>
                        <img className='image_feature-2' src={require('../../img/image_feature2.jpg')} alt="" />                        
                        <img className='image_feature_mobile' src={require('../../img/feature 2 mobile.png')} alt="" />
                    </div>
                </div>
            </div>

            {/* feature_3 */}
            <div className="features">
                <div className="numbers">
                    <img className='icon_number' src={require('../../img/3.png')} alt="" />
                    <h2 className='title_features'>Agenda</h2>
                </div>

                <div className='feature_border'>
                    <div className='feature_content-2 feature_content-3'>
                        <p className='info_feature info_width'> <span className='text_feature_blue'> Una agenda que se ajusta a tus tiempos. </span> Reserva y separa la cita con tu profesional directamente y sin complicaciones. </p>
                        <img className='image_feature-2' src={require('../../img/image_feature3.png')} alt="" />                        
                        <img className='image_feature_mobile' src={require('../../img/feature 3 mobile.png')} alt="" />
                    </div>
                </div>
            </div>

            {/* feature_4 */}
            <div className="features">
                <div className="numbers">
                    <img className='icon_number' src={require('../../img/4.png')} alt="" />
                    <h2 className='title_features'>Califica</h2>
                </div>

                <div className='feature_border'>
                    <div className='feature_content-2'>
                        <div className='column_feature_button'>
                            <p className='info_feature info_width_feature-button'> <span className='text_feature_blue'>Comenta y reseña,</span> permite que otros tomen la mejor decisión  a través de tu experiencia y tu recomendación. </p>
                            <img className='image_feature_mobile' src={require('../../img/feature 4 mobile.png')} alt="" />
                            <a href="https://play.google.com/store/apps/details?id=com.beunik_employees&hl=es_CO&gl=US" target={"blank"} className='btn_feature'>
                                <i className="bx bxs-down-arrow-square icon_btn"></i> Descargar App
                            </a>
                            <a href="https://www.youtube.com/watch?v=x85UF-X1aq0" target={"blank"} className='link_info_btn'>
                                Ver video de cómo usar Beunik
                            </a>

                        </div>
                        <img className='image_feature-2' src={require('../../img/image_feature4.jpg')} alt="" />                        
                       
                    </div>
                </div>
            </div>

            
        </section>
        )
    }
}

export default About;