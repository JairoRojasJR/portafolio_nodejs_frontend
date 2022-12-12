import Image from 'next/image'

export default function Content(props) {
	return (
		<div className='content df fdc aic'>
			<div className='df aic'>
				{props.icon ? <i className={props.icon}></i> :
					<div
						className='img-container pr'
						style={{ margin: 0, maxWidth: 700 }}>
						<Image
							alt={props.alt}
							src={props.src}
							layout='fill'
							objectFit='cover' />
					</div>}
				<h3>{props.subtitle}</h3>
			</div>
			{props.children}
			<style jsx>{`
				.content {
					background: #fff;
					position: absolute;
					height: 80vh;
					width: 90%;
					overflow-y: auto;
					z-index: 150;
					padding: .5rem;
          border: .3rem solid #333;
					border-radius: .3rem;
					animation: deploy .5s forwards;
				}

				@keyframes deploy {
					0% {
						transform: scaleY(0);
					}
					100% {
						transform: scaleY(1);
					}
				}

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

				@media screen and (max-width: 725px) {
					.content {
						position: absolute;
						height: 90vh;
					}
				}
			`}</style>
		</div>
	)
}