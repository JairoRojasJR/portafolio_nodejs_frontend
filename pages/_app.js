import { NextSeo } from 'next-seo'
import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=G-CC3Y6FT8G2`}
    />
    <Script
      id="gascript2"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CC3Y6FT8G2', {
              page_path: window.location.pathname,
            });
          `,
      }}
    />
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
      }, {
        property: "author",
        content: "Jairo Rojas"
      }]}
    />
    <Component {...pageProps} />
  </>
}

export default MyApp
