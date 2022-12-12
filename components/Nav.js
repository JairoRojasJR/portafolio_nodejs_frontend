import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/router";

export default function Nav(props) {
  const router = useRouter();

  const infLinks = [
    {
      'path': '/miaprendizaje',
      'altLogo': 'libro',
      'srcLogo': '/magicbook.png',
      'title': 'Mi aprendizaje'
    },
    {
      'path': '/proyectos',
      'altLogo': 'proyectos',
      'srcLogo': '/proyects.png',
      'title': 'Proyectos'
    },
    {
      'path': '/sobremi',
      'altLogo': 'persona',
      'srcLogo': '/person.png',
      'title': 'Sobre mi'
    }
  ]

  return (
    <nav className='df aifs jcc'>
      <div className='container-buttons jcc'>
        {infLinks.map(link => (
          <Link
            key={link.path}
            href={`${router.asPath !== '/' && router.asPath === link.path ? '/' : link.path}`}>
            <a className='df aic'>
              <div className='logo'>
                <Image
                  alt={link.altLogo}
                  src={link.srcLogo}
                  height={50}
                  width={50}
                  style={{ 'zIndex': 200 }} />
              </div>
              <div className={`link-button ${router.asPath === link.path ? 'opened' : ''}`}>
                {link.title}
              </div>
            </a>
          </Link>
        ))}
      </div>
      <div className='container-content df jcc'>
        {props.children}
      </div>
      <style jsx>{`
        nav {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 50%;
        }

        .container-buttons {
          display: flex;
          padding: 1.5rem;
          padding-top: 2rem;
          gap: 1.5rem;
          width: 100%;
          min-height: 100px;
          height: 20%;
        }

        .logo {
          z-index: 300;
        }

        .link-button {
          padding: .5rem 1.9rem;
          border-radius: .4rem;
          font-family: 'Baskerville', sans-serif;
          background-color: #efefef;
          border: 3px solid #1b1b1b;
          transform: translateX(-1rem);
          z-index: 100;
          color: #333;
          font-weight: 900;
        }

        .container-content {
          position: relative;
          width: 100%;
          flex-grow: 1;
          color: #000;
        }

        .opened {
          background: #FBD767;
        }

        a:hover {
          z-index: 250;
        }

        a:hover > .link-button {
          background: #7EC0DE;
        }

        a:hover > .logo {
          transform: scale(1.3)
        }

        @media screen and (max-width: 725px) {
          nav {
            flex-direction: row;
          }

          .container-buttons {
            flex-direction: column;
            padding: .5rem;
            height: 100%;
            width: 15%;
            min-width: 75px;
          }

          a {
            width: 80%;
            margin-left: 1rem;
          }

          .link-button {
            width: 200px;
            position: absolute;
            margin-left: 50px;
          }

          .container-content {
            height: 100vh;
            display: flex;
            align-items: center;
          }
        }
        `}</style>
    </nav>
  )
}