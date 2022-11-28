import Button from './nav/Button'
import Content from './nav/Content'
import Card from './nav/Card'

import styles from './styles/nav/Nav';
import { useState } from "react";

export default function Nav() {
  const [linkOpened, setLinkOpened] = useState(null);

  const openLink = (section) => {
    if (section === linkOpened) setLinkOpened(null)
    else setLinkOpened(section);
  }

  return (
    <nav className='df aifs jcc'>
      <Button
        title='Mi aprendizaje'
        icon='/magicbook.png'
        alt='book'
        openLink={openLink}
        linkOpened={linkOpened}
        section={'learning'}>
        <Content
          title='Mi ruta de aprendizaje'
          subtitle='Mi camino por el desarrollo web'
          icon='fa-solid fa-route'>
          <Card 
            src='/images/html_css_js-profesor_dalto.png'
            alt='basic techonologies'>
            <p>
              Aprendí las tecnologías básicas de la web, como lo son html, css y javascript mediante los cursos impartidos por Lucas Dalto en su canal de youtube Soy Dalto.
            </p>
          </Card>
          <Card 
            src='/images/php-profesor_oscar.png'
            alt='php'>
            <p>
              Una vez que ya tenía conocimientos mas sólidos de html, css y js, continué aprendiendo las bases de php, el lenguaje de programación de lado del servidor mediante el curso impartido por Oscar Uh en su canal de youtube Develoteca
            </p>
          </Card>
          <Card 
            src='/images/sql_git-profesor_nicolas.png'
            alt='bases de datos sql'>
            <p>
              Posteriormente aprendí las bases y la sintaxis de sql y el manejo de control de versiones con git, todo esto gracias a Nicolas Shurmann en su curso de sql, y su curso de git en su canal de youtube HolaMundo.
            </p>
          </Card>
          <Card 
            src='/images/react_nodejs-profesora_estefania.png'
            alt='react y nodejs'>
            <p>
              Por último, (hasta el momento) he aprendido a usar la libreria react y el entorno de desarrollo nodejs gracias a los cursos de Estefanía en el canal de youtube freeCodeCamp Español. En este momento me encuentro fortaleciendo mis conocimientos en estas tecnologías
            </p>
          </Card>
        </Content>
      </Button>
      <Button
        title='Mis proyectos'
        icon='/proyects.png'
        alt='proyects'
        openLink={openLink}
        linkOpened={linkOpened}
        section={'proyects'}>
        <Content 
          title='Proyectos'
          subtitle='Proyectos que he construido'
          src='/images/carpeta.png'
          alt='folder'
          >
          <Card
            link='http://portfoliojayo.x10.mx/'
            title='Crud + Login + Sign Up + Recuperacion de contraseña.'
            src='/images/jayocrud_proyects.png'
            alt='crud' >
            <p>
              Proyecto de práctica con html, css, javascript y php vanilla. Incluye una sección de login, registrarse, recuperación de contraseña, su página de inicio y de administración de proyectos, los cuales se alojan en una base de datos sql.
            </p>
          </Card>
        </Content>
      </Button>
      <Button
        title='Sobre mi'
        icon='/person.png'
        alt='person'
        openLink={openLink}
        linkOpened={linkOpened}
        section={'about'}>
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
              Hola, me llamo Jhon Jairo y soy desarrollador web. Empecé a aprender desarrollo web en profundidad a inicios de este año 2022, por mi cuenta de forma completamente autodidacta, viendo cursos en youtube, leyendo documentación, practicando y corrigiendo error tras error. Ya tenía ciertas bases antes de empezar ya que seguí la especialidad de informática durante mi etapa de Bachillerato Técnico en Informática, lo cual me dio una perspectiva más amplia en el sector. Llevo poco menos de un año de aprendizaje en del desarrollo web, le he dedicado muchas horas al día, y siento que he aprendido mucho. Tampoco soy un crack en el sector ni mucho menos, pero seguiré aprendiendo y mejorando día a día ya que apasiona y además soy muy perseverante.
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
            text='Whatsapp, Gmail, Telegram'
          />
        </Content>
      </Button>
      <style jsx>{styles}</style>
    </nav>
  )
}