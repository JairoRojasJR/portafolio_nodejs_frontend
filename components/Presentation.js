import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import React from "react";
import styles2 from "./styles/Presentation";

export default function Presentation() {
  const divPresentation = useRef(null);
  useEffect(() => {
    divPresentation.current.style.animation = 'deploidPresCard 3s forwards';
  })
  return(
    <div className='presentation df aic jcc'>
      <div className='presentation__card df aic jcc'>
        <div className='presentation__image-container pr'>
          <Image
            className='ofcr'
            src={'/images/myselft.jpg'}
            layout='fill' />
        </div>
        <div
          ref={divPresentation}
          className={`presentation__text-container`}
          >
          <p>
            Hola, yo soy Jairo Rojas y soy desarrollador Web. Bienvenido a mi portafolio ;)
          </p>
        </div>
      </div>
      <style jsx>{styles2}</style>
    </div>
  )
}