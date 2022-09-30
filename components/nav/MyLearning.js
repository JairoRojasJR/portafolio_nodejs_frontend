import Learned from './Learned'

export default function MyLearning() {
	return (
		<>
			<h3 style={{margin: 0, maxWidth: 700}}>
				<i className='fa-solid fa-route'></i>
				Mi ruta de aprendizaje
			</h3>
			<Learned
				src='/images/html_css_js-profesor_dalto.png'
				text='Aprendí las tecnologías básicas de la web, como lo son html, css y javascript mediante los cursos impartidos por Lucas Dalto en su canal de youtube Soy Dalto.'
			/>
			<Learned
				src='/images/php-profesor_oscar.png'
				text='Una vez que ya tenía conocimientos mas sólidos de html, css y js, continué aprendiendo las bases de php, el lenguaje de programación de lado del servidor mediante el curso impartido por Oscar Uh en su canal de youtube Develoteca'
			/>
			<Learned
				src='/images/sql_git-profesor_nicolas.png'
				text='Posteriormente aprendí las bases y la sintaxis de sql y el manejo de control de versiones con git, todo esto gracias a Nicolas Shurmann en su curso de sql, y su curso de git en su canal de youtube HolaMundo.'
			/>
			<Learned
				src='/images/react_nodejs-profesora_estefania.png'
				text='Por último, (hasta el momento) he aprendido a usar la libreria react y el entorno de desarrollo nodejs gracias a los cursos de Estefanía en el canal de youtube freeCodeCamp Español. En este momento me encuentro fortaleciendo mis conocimientos en estas tecnologías'
			/>
		</>
	)
}