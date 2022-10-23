import { NextSeo } from 'next-seo'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <NextSeo
      title="Jayo Web"
      titleTemplate="Jayo Web"
      defaultTitle="Jayo Web"
      description="Soy Jairo Rojas y soy desarrollador web"
      canonical="https://www.jayoweb.com/"
      openGraph={{
        url: "https://www.jayoweb.com/",
        title: "Jayo Web",
        description: "Soy Jairo Rojas y soy desarrollador web",
        images: [
          {
            url: "/favicon.ico",
            width: 800,
            height: 420,
            alt: "Jayo Web",
          },
        ],
      }}
    />
    <Component {...pageProps} />
  </>
}

export default MyApp
