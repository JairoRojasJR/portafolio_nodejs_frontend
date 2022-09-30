import ButtonNav from './ButtonNav'
import MyLearning from './nav/MyLearning'
import About from './nav/About'
import Proyects from './nav/Proyects'
import { useState } from "react";

export default function Nav() {
  const [linkOpened, setLinkOpened] = useState(null);

  const openLink = (section) => {
    if(section === linkOpened) setLinkOpened(null)
    else setLinkOpened(section);
  }

  return (
    <>
      <ButtonNav
        router={MyLearning}
        icon='/magicbook.png'
        openLink={openLink}
        linkOpened={linkOpened}
        section={'learning'}>
        Mi aprendizaje
      </ButtonNav>
      <ButtonNav
        router={Proyects}
        icon='/proyects.png'
        openLink={openLink}
        linkOpened={linkOpened}
        section={'proyects'}>
        Mis proyectos
      </ButtonNav>
      <ButtonNav
        router={About}
        icon='/person.png'
        openLink={openLink}
        linkOpened={linkOpened}
        section={'about'}>
        Sobre mi
      </ButtonNav>
    </>
  )
}