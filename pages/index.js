import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/Layout'

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
        <title>Desarrollador web Machala Jairo Rojas</title>
      </Head>
      <Layout />
    </div>
  )
}
