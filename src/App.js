import React, { Component } from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Acordeon from './components/Acordeon/Acordeon';
import Contact from './components/Footer/Footer';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true
    }
  }


    render() {
        return (
          <div className="App">
            <Nav />
            <Header />
            <About />
            <div className='content_faq'>
              <h2 className='title_accordion'>Encuentra todas las respuestas en un solo lugar</h2>
              <Acordeon question="¿Qué puedo hacer en Beunik?">
            <p>
              En BeUnik podrás encontrar toda la inspiración que necesitas para definir tu estilo y conectar directamente con profesionales, salones de belleza y barberías dispuestas a ayudarte a hacerlo realidad.
              <br/>
              Al utilizar la App de BeUnik puedes:
              <br/>
              - Explorar el trabajo realizado por una entidad y sus profesionales a través de las muestras de trabajo para inspirarte y ayudarte a elegir tu próximo cambio de estilo.
              <br/>
              - Ver la agenda de tus salones de belleza y barberías favoritas y reservar según tu disponibilidad de tiempo.
              <br/>
              - Elegir ver muestras de trabajo para mujer, para hombre o ambas opciones.
              <br/>
              - Una colección completa de servicios como cortes de cabello de diferentes estilos, tratamientos, alizados, color y extensiones para cabello, servicios para barba, cejas, pestañas, limpieza y depilación facial, peinados, maquillaje, uñas y asesoría directa con los y las profesionales que respondan todas tus dudas.
              <br/>
              - Ver la información completa de una entidad, su ubicación, descripción, lista de servicios que ofrece con sus respectivos valores, muestras de trabajo, profesionales adscritos y la puntuación y calificaciones otorgada por los usuarios.
              <br/>
              - Ver la información completa de un profesional, sus muestras de trabajo, la entidad en la cual trabaja, lista de servicios que ofrece con sus respectivos valores, y ranking según la calificación otorgada por los usuarios.
              <br/>
              - Seguir salones de belleza y barberías con las que hayas conectado por su profesionalismo o su trabajo.
              <br/>
              - Calificar y reseñar tu experiencia como usuario o usuaria con un profesional o una entidad.
            </p>
              </Acordeon>

              <Acordeon question="¿La App de Beunik tiene algún costo?">
              <p>
                  No, BeUnik es completamente gratuita para los usuarios. Podrás explorar y utilizar sus funcionalidades sin problema.
              </p>
              </Acordeon> 

              <Acordeon question="¿Debo registrarme para utilizar la App de Beunik?">
              <p>
                Puedes utilizar la aplicación sin crear una cuenta o registrarte: explora las muestras de trabajo de profesionales, salones de belleza y barberías; mira todos los servicios que pueden ofrecer con sus correspondientes valores; lee las reseñas y calificaciones que otros usuarios y usuarias han realizado para que tomes una mejor decisión, entre muchas otras opciones.
                <br/>
                Sin embargo, para utilizar algunas funcionalidades de la App como la reserva o agendamiento de citas, seguir salones de belleza y barberías, guardar muestras de trabajo y calificar o reseñar un profesional o establecimiento necesitaremos validar tu información, por lo que te solicitaremos que crees una cuenta en BeUnik. No te preocupes, el proceso de registro solo toma 5 minutos.
              </p>
              </Acordeon>
            </div>
            <Contact />
          </div>
        )
    }
}

export default App;
