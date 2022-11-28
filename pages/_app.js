import { NextSeo } from 'next-seo'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <NextSeo
      title="Desarrollador web Machala Jayo Web"
      titleTemplate="Desarrollador web Machala Jayo Web"
      defaultTitle="Desarrollador web Machala Jayo Web"
      description="Jairo Rojas desarrollador web Machala. Creación de sitios web para empresas, negocios, sitios personales"
      canonical="https://www.jayoweb.com/"
      openGraph={{
        url: "https://www.jayoweb.com/",
        title: "Desarrollador web Machala Jayo Web",
        description: "Jairo Rojas desarrollador web Machala. Creación de sitios web para empresas, negocios, sitios personales",
        images: [
          {
            url: "/favicon.ico",
            width: 800,
            height: 420,
            alt: "Jayo Web",
          }
        ],
        book: {
          authors: "Jairo Rojas",
          tags: "desarrollador, web, Machala, programador, websites"
        }
      }}
      additionalMetaTags={[{
        property: "keywords",
        content: "desarrollador, web, Machala, programador, websites"
      },{
        property: "author",
        content: "Jairo Rojas"
      }]}
    />
    <Component {...pageProps} />
  </>
}

export default MyApp
