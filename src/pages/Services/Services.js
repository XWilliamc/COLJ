import React from 'react'
import './Section.css'

function Services() {
    return (
        <div>
                  {/**section */}
      <main>
        <section className="container-section">
          <div className="container-titulo1">
            <h1 className="section-h1" id="mision">
              Mision
            </h1>
            <p>
            Somos una empresa vallecaucana que fabrica y comercializa colchones y 
            artículos complementarios,como bases cama con altos estándares calidad.</p>
          <p>
            Cuyo objetivo permanente es proporcionarles a nuestros clientes la tranquilidad y
            confianza que nuestra compañía ha construido durante años en el mercado,
            trabajando diariamente con la ayuda y apoyo de nuestro equipo de trabajo, 
            para el cumplimiento de nuestra labor, teniendo siempre presente la sana competencia,
            el aporte al crecimiento de nuestra región, y el uso de insumos limpios y 
            de calidad durante toda la cadena productiva.
            </p>
          </div>
          <div className="container-img">
            <img
              src=""
              className="img-svg"
            />
          </div>
        </section>

        <section className="container-section">
          <div className="container-titulo1">
            <h1 className="section-h1" id="vision">
              Vision
            </h1>
            <p>
            En el 2023 COLJ busca estar consolidado en el mercado regional como uno de los mejores fabricantes
            del sector, manteniendo la misma línea de calidad que hasta el momento nos ha caracterizado
            Brindándole a nuestros clientes la cercanía y asesoría personalizada que necesitan 
            con un equipo de trabajo capacitado y motivado que permite que todos nuestros objetivos se cumplan a cabalidad.
            </p>
          </div>
          <div className="container-img">
            <img
              src=""
              className="img-svg"
            />
          </div>
        </section>

        <section className="container-section">
          <div className="container-titulo1">
            <h1 className="section-h1" id="historia">
              Historia
            </h1>
            <p>
           En COLJ nos mueve mejorar continuamente para ofrecerle los mejores productos a nuestros clientes.

           Es por esta razón que nuestra esencia es fabricar con alta calidad y 
           ofrecerles un servicio de asesoría personalizada, para que se vuelvan parte de nuestra familia 
           y empiecen a soñar con nosotros.</p>
           <p>
           Sabemos lo que nuestros productos aportan a la calidad de vida de nuestros consumidores, 
           y nos sentimos orgullosos de hacer parte de ello, 
           siendo una empresa que de la mano de nuestro talento humano le cumple cada día a la calidad.
            </p>
          </div>
          <div className="container-img">
            <img
              src="https://curiosfera-historia.com/wp-content/uploads/historia-del-colch%C3%B3n-siglo-XIX.jpg"
              
              className="  img-svg"
              
          
        />
          </div>
        </section>
      </main>
        </div>
    )
}

export default Services
