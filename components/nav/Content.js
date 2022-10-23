import Image from 'next/image'

export default function Content(props) {
	return (
		<>
			<div className='df aic'>
				{props.icon ? <i className={props.icon}></i> :
					<div
						className='img-container pr'
						style={{ margin: 0, maxWidth: 700 }}>
						<Image
							className=''
							src={props.src}
							layout='fill'
							objectFit='cover' />
					</div>}
				<h3>{props.subtitle}</h3>
			</div>
			{props.children}
			<style jsx>{`
				.title-container {
					gap: 1rem;
				}

				.img-container {
					flex-shrink: 0;
					width: 5vw;
					height: 5vw;
					max-width: 100px;
					border-radius: 50%;
					overflow: hidden;
				}

				.img-container, h3 {
					box-shadow: 3px 3px 3px #FBD767;
					padding: .5rem;
					margin: 0;
				}

				i {
					filter: drop-shadow(3px 3px 3px #FBD767);
				}
			`}</style>
		</>
	)
}