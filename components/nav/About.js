import Image from 'next/image'

export default function About() {
	return (
		<>
			<div className='myselft-container df aic'>
				<div className='myselft-img--container pr'>
					<Image
						className='myselft-img'
						src={'/images/myselft.jpg'}
						layout='fill'
						objectFit='cover' />
				</div>
				<p>Jairo Rojas - Desarrollador Web</p>
			</div>
			<section className='about__section'>
				<h4>¿Quién soy?</h4>
				<p>Hola, me presento, me llamo Jhon Jairo y soy desarrollador web. Soy un joven ecuatoriano con muchas ganas de aprender. Empecé a aprender desarrollo web en profundidad a inicios de este año 2022, todo por mi cuenta de forma completamente autodidacta, viendo cursos en youtube, leyendo documentación, practicando y corrigiendo error tras error consultando a otros que pasaron por el mismo error, etc. Ya tenía ciertas bases antes de empezar ya que seguí la especialidad de informática durante mi etapa de Bachillerato Técnico en Informática, lo cual me dio una perspectiva más amplia en el sector. Llevo poco menos de un año de aprendizaje en del desarrollo web, pero ha sido un año vaya que “intenso”, ya que le he dedicado muchas horas al día, y siento que he aprendido mucho. Tampoco soy un crack en el sector ni mucho menos, pero si que le he hechado muchas ganas, ya que me apasiona mucho y seguiré aprendiendo día a día.</p>
			</section>
			<section className='about__section'>
				<h4>Tecnologías que manejo</h4>
				<p>Actualmente tengo conocimiento y experiencia en las siguientes tecnologías: html, css, javascript, php, bases de datos (SQL y NoSQL), react, nodejs, git (sistema de control de versiones) y github. No soy un experto ni mucho menos en las tecnologías mencionadas, pero estoy aprendiendo y practicando para ser mejor cada día. Pero bueno, dejando de lado tanta palabrería, te invito a conocer los proyectos que he realizado, todos por mi cuenta y con mis propias habilidades, para que juzgues por ti mismo y te hagas una idea de mi nivel.</p>
			</section>
			<section className='about__section'>
				<h4>Para empresas/negocios</h4>
				<p>Si eres un visitante de una empresa o un negocio en busca desarrolladores web, te invito a revisar mis proyectos y prácticas, y si cumplo con sus expectativas, darme la oportunidad de demostrarle mis habilidades y el valor que le puedo aportar a la misma.</p>
			</section>
			<section className='about__section'>
				<h4>Y para persona natural</h4>
				<p>Por el contrario, si eres una persona natural que necesita un sitio o una aplicación web, de igual manera te invito a revisar mis proyectos, y comentarme tu proyecto, será un gusto ayudarte a implementar una solución.</p>
			</section>
			<h4>En adición:</h4>
			<section className='about__section'>
				<h5>Mis principales fortalezas</h5>
				<ul>
					<li>Me gusta aprender.</li>
					<li>Soy autodidacta.</li>
					<li>Soy muy curioso.</li>
					<li>Me apasiona el mundo de la tecnología.</li>
					<li>Soy perseverante.</li>
				</ul>
			</section>
			<section className='about__section'>
				<h5>Programas que manejo (muy básico):</h5>
				<ul>
					<li>Adobe Photoshop (edición de imágenes/fotos)</li>
					<li>Adobe Premiere (edición de videos)</li>
					<li>Word, Excel, PowerPoint.</li>
				</ul>
			</section>
			<section className='about__section'>
				<h4>Contáctame</h4>
				<p>Whatsapp, Gmail, Telegram</p>
			</section>
			<style jsx>
				{`
					.myselft-container {
						gap: 1rem;
					}

					.myselft-img--container {
						flex-shrink: 0;
						width: 100px;
						height: 100px;
						border-radius: 50%;
						overflow: hidden;
						box-shadow: 3px 3px 3px #FBD767;
					}

					.myselft-container p {
						font-weight: 700;
						box-shadow: 3px 3px 3px #FBD767;
					}

					.about__section {
						box-shadow: 3px 3px 3px #ABABAB;
						padding: 1rem;
						width: 95%;
					}

					.about__section p {
						line-height: 1.5rem;
						text-align: justify;
					}
				`}
			</style>
		</>
	)
}