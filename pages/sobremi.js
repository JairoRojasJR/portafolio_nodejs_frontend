import Layout from "../components/Layout";
import Content from "../components/nav/Content";
import Card from "../components/nav/Card";
import Image from "next/image";

export default function sobremi() {
  return (
    <Layout>
      <Content
        title='Sobre mi'
        subtitle='Jairo Rojas - Desarrollador Web'
        src='/images/myselft.jpg'
        alt='Jairo Rojas desarrollador web'
      >
        <Card
          title='¿Quién soy?'
          src='/images/estudiante.png'
          alt='estudiante programacion'>
          <p>
            Hola, yo soy Jairo Rojas, tengo 22 años y soy desarrollador web. Con un nivel de estudio de Bachillerato técnico en Informática, tengo poco más de un año de experiencia en el mundo del desarrollo web. Soy un joven perseverante y autodidacta, he aprendido mucho viendo cursos, leyendo y prácticando, adquiriendo así unas bases sólidas sobre las tecnologías básicas y sobre las no tan básicas que se necesitan para poner en marcha y/o mantener un proyecto. Me dedico a desarrollar sitios y aplicaciones web. Actualmente resido en la ciudad de Machala, provincia del Oro, Ecuador
          </p>
        </Card>
        <Card
          title='Tecnologías que manejo'
          src='/images/technologies.png'
          alt='tecnologias'>
          <p>
            Actualmente tengo conocimiento y experiencia en las siguientes tecnologías: html, css, javascript, php, bases de datos (SQL y NoSQL), react, nodejs, git (sistema de control de versiones) y github. No soy un experto ni mucho menos en las tecnologías mencionadas, pero estoy aprendiendo y practicando para ser mejor cada día. Pero bueno, dejando de lado tanta palabrería, te invito a conocer los proyectos que he realizado, todos por mi cuenta y con mis propias habilidades, para que juzgues por ti mismo y te hagas una idea de mi nivel.
          </p>
        </Card>
        <Card
          title='Para empresas/negocios'
          src='/images/empresa.png'
          alt='empresas'>
          <p>
            Si eres un visitante de una empresa o un negocio en busca desarrollador web, sitio web o mantenimiento web, te invito a revisar mis proyectos y prácticas, y si cumplo con sus expectativas, darme la oportunidad de demostrarle mis habilidades y el valor que le puedo aportar a su empresa o negocio.
          </p>
        </Card>
        <Card
          title='Y para personas (proyectos personales)'
          src='/images/persona.png'
          alt='persona'>
          <p>
            Por el contrario, si eres una persona que necesita un sitio o una aplicación web, de igual manera te invito a revisar mis proyectos, y comentarme tu proyecto, será un gusto ayudarte a implementar una solución.
          </p>
        </Card>
        <h3>En adición</h3>
        <Card
          title='Mis principales fortalezas'
          src='/images/personalidad.png'
          alt='personalidad'
        >
          <ul>
            <li>Me gusta aprender.</li>
            <li>Soy autodidacta.</li>
            <li>Soy muy curioso.</li>
            <li>Me apasiona el mundo de la tecnología.</li>
            <li>Soy perseverante.</li>
          </ul>
        </Card>
        <Card
          title='Programas que manejo (muy básico):'
          src='/images/programas-que-manejo.png'
          alt='programas'
        >
          <ul>
            <li>Adobe Photoshop (edición de imágenes/fotos)</li>
            <li>Adobe Premiere (edición de videos)</li>
            <li>Word, Excel, PowerPoint.</li>
          </ul>
        </Card>
        <Card
          title='Contáctame'
          src='/images/contacto.png'
          alt='contactame'
        >
          <div className='contact-buttons df'>
            <a
              href={'https://wa.me/593988542528'} 
              target={'_BLANK'}
              rel={'noreferrer'}>
              <div className='contact-btn whatsapp df aic cp'>
                <Image
                  alt='whatsapp'
                  src={'/images/whatsapp-logo.png'}
                  width={25}
                  height={25} />
                <span>Whatsapp</span>
              </div>
            </a>
            <a
              href={'tel:+593988542528'} 
              target={'_BLANK'}
              rel={'noreferrer'}>
              <div className='contact-btn phone df aic cp'>
                <Image
                  alt='llamar'
                  src={'/images/telefono-logo.png'}
                  width={25}
                  height={25} />
                <span>Llamar</span>
              </div>
            </a>
          </div>
        </Card>
      </Content>
      <style jsx>{`
        .contact-buttons {
          gap: .3rem;
        }

        .contact-btn {
          border-radius: 3rem;
          gap: .3rem;
          height: 100%;
          padding: .5rem;
        }

        .whatsapp {
          background: #03C100;
          color: #fff;
          border: .2rem solid #01a000;
        }

        .phone {
          background: #EEE;
          border: .2rem solid #333;
        }
      `}</style>
    </Layout>
  )
}