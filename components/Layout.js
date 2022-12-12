import Nav from './Nav'
import Background from './Background'
import Presentation from './Presentation'

export default function Layout(props) {
  return (
    <>
      <Background />
      <main className='main pr h100vh w100p'>
        <h1>Jairo Rojas - Desarrollador Web</h1>
        <Nav>{props.children}</Nav>
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
    </>
  )
}