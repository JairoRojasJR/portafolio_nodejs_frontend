import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import React from "react";

export default function Presentation() {
  const divPresentation = useRef(null);
  useEffect(() => {
    divPresentation.current.style.animation = 'deploidPresCard 3s forwards';
  })
  return(
    <>
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
      <style jsx>{`
        .presentation__card {
          max-width: 50%;
          height: 100%;
        }        

        .presentation__image-container {
          width: 5.5rem;
          height: 5.5rem;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
        }

        .presentation__text-container {
          padding: .5rem;
          background-color: #fff;
          border-radius: 1rem;
          color: #000;
          font-size: 0.8rem;
          max-height: 100%;
          overflow: hidden;
        }

        .presentation__text-container p {
          line-height: 1.1rem;
        }

        @keyframes deploidPresCard {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @media screen and (max-width: 725px) {
          .presentation__card {
            max-width: 80%;
          }
        }
      `}</style>
    </>
  )
}