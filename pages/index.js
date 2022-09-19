import Background from '/components/Background'
import Nav from '/components/Nav'
import Head from 'next/head'
import Presentation from '/components/Presentation'

export default function Home() {
  return (
    <div className='home df dfc h100p'>
      <Head>
        <title>Jayo Web</title>
      </Head>
      <Background />
      <div className='main pr h100vh w100p'>
        <nav className='nav df aifs jcc'>
          <Nav />
        </nav>
        <div className='presentation df aic jcc'>
          <Presentation />
        </div>
      </div>
      <style jsx>{`
        .main {
          z-index: 200;
        }

        .nav {
          padding: 1.5rem;
          padding-top: 2rem;
          gap: 1.5rem;
        }

        .nav, .presentation  {
          height: 50%;
        }

        @media screen and (max-width: 725px) {
          .nav {
            flex-direction: column;
            gap: 3rem;
          }
        }
      `}</style>
    </div>
  )
}
