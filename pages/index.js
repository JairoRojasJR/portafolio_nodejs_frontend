import Background from '/components/Background'
import Nav from '/components/Nav'
import Presentation from '/components/Presentation'
import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <div className='home df dfc h100p'>
      <Script src="https://kit.fontawesome.com/9f3be5f028.js" crossOrigin="anonymous"></Script>
      <Script id="0507289068" type="application/ld+json">
        {
          {
            "@context": "https://jayoweb.com",
            "@type": "desarrollador web",
            "author": "Jairo Rojas",
            "description": "Jairo Rojas desarrollador web Machala. Creación de sitios web para empresas, negocios, sitios personales",
            "image": "myselft.jpg"
          }
        }
      </Script>
      <Head>
        <title>Jayo Web</title>
      </Head>
      <Background />
      <main className='main pr h100vh w100p'>
        <h1>Jairo Rojas - Desarrollador Web</h1>
        <Nav />
        <Presentation />
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          z-index: 200;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          align-items: center;
          justify-content: center;
        }

        h1 {
          position: absolute;
          background-color: #0009;
          border-radius: .5rem;
          padding: .5rem 1rem;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
