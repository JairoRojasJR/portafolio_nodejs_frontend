import Image from 'next/image'

export default function Learned(props) {
	const redirect = () => {
		if (props.link) window.open(props.link, '_BLANK');
	}
	return (
		<>
			<div className='learned'>
				<div className='learned__img-container'>
					<Image
						className='learned__img ofcn'
						src={props.src}
						layout='fill'
						alt={props.alt}
						onClick={() => redirect()}
					/>
				</div>
				<div className='learned__text'>
					{props.title ? <h4>{props.title}</h4> : ''}
					{props.text ? <p>{props.text}</p> : props.children}
				</div>
				{!props.link ? '' :
					<div className='link-container'>
						<div className='link'>
							<p onClick={() => window.open(props.link)}>Visitar</p>
						</div>
					</div>}
			</div>
			<style jsx>{`
				.learned {
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					box-shadow: 3px 3px 3px #ababab;
					border-radius: .3rem;
					padding: 1rem .8rem;
          margin: 1rem 0;
          max-width: 700px;
				}

				.learned__img-container {
					position: relative;
					flex-basis: 40%;
					min-height: 100px;
				}

				.learned__text {
					flex-basis: 60%;
					padding: 0 1.5rem;
				}

				h4, p {
					margin: 0;
					text-align: center;
				}

				.learned__text p {
					text-align: justify;
				}

				.link-container {
					flex-basis: 100%;
					display: flex;
					justify-content: center;
				}

				.link {
					background-color: #FBD767;
					border: .1rem solid #000;
					border-left: .3rem solid #000;
					box-shadow: 3px 3px 3px #ababab;
					border-radius: .2rem;
					cursor: pointer;
				}

				.link p {
					padding: .3rem;
					text-wrap: break-word;
				}

				@media screen and (max-width: 660px){
					.learned {
						flex-direction: column;
						flex-wrap: nowrap;
					}

					.learned__img-container {
						flex-basis: auto;
					}
				}
				`}</style>
		</>
	)
}