import Layout from "../components/Layout";
import Content from "../components/nav/Content";
import Card from "../components/nav/Card"

export default function proyectos() {
  return (
    <Layout>
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
        <Card
          link='http://jayodev.x10.mx/'
          title='Sitio web para instalador de tumbados gypsum'
          src='/images/tumbadogypsum_proyects.png'
          alt='tumbado gypsum Machala Luis Rojas' >
          <p>
            Proyecto de negocio que da a conocer el servicio y los trabajos realizados de tumbado gypsum en la ciudad de Machala por Luis Rojas y sus compañeros de trabajo.
          </p>
        </Card>
      </Content>
    </Layout>
  )
}