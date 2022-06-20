import React, { Component }  from "react";
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import About from '../components/About/About';
import Acordeon from '../components/Acordeon/Acordeon';
import Contact from '../components/Footer/Footer';

class HomePage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          open: true
        }
      }
    render() {
        return (
            <div>
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

              <Acordeon question="¿Qué son las reseñas validadas?">
              <p>Para BeUnik es muy importante brindarte todas las herramientas y guiarte para que tomes las mejores decisiones en la elección de tu estilo, por ello dentro de la App solo encontrarás reseñas, calificaciones o comentarios de usuarios y usuarias que ya han utilizado los servicios que ofrece BeUnik y han vivido la experiencia directamente con los salones de belleza y barberías. <br/> Las reseñas validadas dentro de la App son diferentes a las reseñas de la aplicación de BeUnik en la Play Store de Google. Estas las puede hacer cualquier persona y no pueden ser validadas ni controladas por BeUnik.
              </p>
              </Acordeon>

              <Acordeon question="¿Qué son las muestras de trabajo?">
              <p>Las muestras de trabajo son la colección de imágenes que muestran el proceso y/o resultado del trabajo que se han realizado en los salones de belleza y las barberías, y son subidas a la App directamente por las y los profesionalesa descritos a una de estas entidades.
              </p>
              </Acordeon>

              <Acordeon question="¿En la aplicación solo se puede encontrar servicios de belleza para mujer?">
              <p>No. BeUnik conecta con diferentes tipos de servicios en belleza y cuidado para hombres y mujeres. <br/>
              Tienes la opción de elegir si deseas ver los servicios solo para mujeres, solo para hombres o ver todo el contenido para ambas categorías.
              </p>
              </Acordeon>

              <Acordeon question="¿Qué información ven los salones de belleza y barberías sobre mí?">
              <p>Las entidades (salones de belleza, barberías y spa) solo tienen acceso a tu nombre, el cual es necesario en el momento en el que reservas o separas una cita con la o el profesional. <br/>
              De ninguna manera, los establecimientos ni sus empleados pueden acceder a tus datos personales a través de la App de BeUnik.
              </p>
              </Acordeon>

              <Acordeon question="¿Si soy un profesional, salón de belleza o barbería cómo me piedo registrar en BeUnik?">
              <p>Debes dirigirte a la página de <a className="p_blue_features" href="https://entidades.beunik.co/">BeUnik PRO</a> para registrarte como una entidad. <br/>
              Allí podrás encontrar cómo la app de BeUnik te conectará con nuevos clientes y todas las funcionalidades y bondades que tiene la App para ofrecerte y ayudarte.
              </p>
              </Acordeon>

              <Acordeon question="¿En dónde funciona la aplicación?">
              <p>En el momento, la App solo funciona en el sistema operativo Android. <br/>
              Próximamente también podrás descargar la App desde el sistema IOS.
              </p>
              </Acordeon>


            </div>
            <Contact />
            </div>
        )
    }
}

export default HomePage;