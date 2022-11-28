import Image from "next/image"
import React from "react";
import styles2 from "./styles/Presentation";
import { Typewriter } from "react-simple-typewriter";

export default function Presentation() {
  return (
    <div className='presentation df aic jcc'>
      <div className='presentation__card df aic jcc'>
        <div className='presentation__image-container pr'>
          <Image
            className='ofcr'
            src={'/images/myselft.jpg'}
            layout='fill' />
        </div>
        <div className={`presentation__text-container`}>
          <Typewriter
            words={["Hola yo soy Jairo Rojas y soy desarrollador web, bienvenido a mi portafolio."]}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={30}
          />
        </div>
      </div>
      <style jsx>{styles2}</style>
    </div>
  )
}