import Background from '/components/Background'
import Nav from '/components/Nav'
import Presentation from '/components/Presentation'
import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <div className='home df dfc h100p'>
      <Script src="https://kit.fontawesome.com/9f3be5f028.js" crossOrigin="anonymous"></Script>
      <Head>
        <title>Jayo Web</title>
      </Head>
      <Background />
      <main className='main pr h100vh w100p'>
        <h1>Jayo Web - Developer web</h1>
        <Nav />
        <Presentation />
      </main>
      <style jsx>{`
          main {
          z-index: 200;
          max-width: 1200px;
          margin: 0 auto;
        }

        h1 {
          position: absolute;
        }
      `}</style>
    </div>
  )
}
