import ButtonNav from './ButtonNav'
import MyLearning from '/routers/MyLearning'
import About from '/routers/About'
import Proyects from '/routers/Proyects'

export default function Nav() {
  return (
    <>
      <ButtonNav
        router={MyLearning}
        icon='/magicbook.png'>
        Mi aprendizaje
      </ButtonNav>
      <ButtonNav
        router={Proyects}
        icon='/proyects.png'>
        Mis proyectos
      </ButtonNav>
      <ButtonNav
        router={About}
        icon='/person.png'>
        Sobre mi
      </ButtonNav>
    </>
  )
}