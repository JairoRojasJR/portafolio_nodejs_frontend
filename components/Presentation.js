import Image from "next/image"

export default function Presentation() {
  return(
    <>
      <div className='presentation__card df aic jcsp'>
        <div className='presentation__image-container pr'>
          <Image
            className='ofcr'
            src={'/images/myselft.jpg'}
            layout='fill' />
        </div>
        <div className='presentation__text-container'>
          <p>
            Hola, yo soy Jairo Rojas y soy desarrollador Web. Bienvenido a mi portafolio ;)
          </p>
        </div>
      </div>
      <style jsx>{`
        .presentation__card {
          max-width: 50%;
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
        }

        .presentation__text-container p {
          line-height: 1.1rem;
        }
      `}</style>
    </>
  )
}