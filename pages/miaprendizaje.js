import Layout from "../components/Layout";
import Content from "../components/nav/Content";
import Card from "../components/nav/Card";

export default function miaprendizaje() {
  return (
    <Layout>
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
            Por último, (hasta el momento) he aprendido a usar la libreria react y el entorno de desarrollo nodejs gracias a los cursos de Estefanía en el canal de youtube freeCodeCamp
            Español. En este momento me encuentro fortaleciendo mis conocimientos en estas tecnologías
          </p>
        </Card>
      </Content>
    </Layout>
  )
}