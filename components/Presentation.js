import Image from "next/image"
import { useRouter } from "next/router";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Presentation() {
  const router = useRouter();

  return (
    <div className='presentation df aic jcc'>
      <div className='presentation__card df aic jcc'>
        <div className='presentation__image-container pr'>
          <Image
            alt="Jairo Rojas desarrollador web"
            className='ofcr'
            src={'/images/myselft.jpg'}
            layout='fill' />
        </div>
        <div className={`presentation__text-container`}>
          {router.asPath === '/' ?
            <Typewriter
              words={["Hola yo soy Jairo Rojas y soy desarrollador web, bienvenido a mi portafolio."]}
              loop={1}
              cursor
              cursorStyle='|'
              typeSpeed={30}
            />
            :
            <p>Hola yo soy Jairo Rojas y soy desarrollador web, bienvenido a mi portafolio.</p>
          }
        </div>
      </div>
      <style jsx>{`
        .presentation  {
          height: 50%;
        }

        .presentation__card {
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
          position: relative;
          padding: 1rem;
          background-color: #fff;
          border-radius: 1rem;
          color: #000;
          font-size: 1.1rem;
        }

        p {
          margin: 0;
          padding: 0;
        }
        
        @media screen and (max-width: 725px) {
          .presentation__card {
            max-width: 80%;
          }
        }
      `}</style>
    </div>
  )
}