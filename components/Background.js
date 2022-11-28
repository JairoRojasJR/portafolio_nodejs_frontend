import Image from 'next/image'

export default function Background() {
	return (
		<div className='background-container pf'>
			<div className='background background_noblur pf w100p oh'>
				<div className='noblur-container h100vh pr'>
					<Image
						alt='codigo'
						src='/images/codigo_image.png'
						className='background_image ofcr'
						layout='fill' />
				</div>
			</div>
			<div className='background background_blur pf w100p oh h100vh'>
				<Image
					alt='codigo'
					src='/images/codigo_image.png'
					className='background_image ofcr fb1r'
					layout='fill' />
			</div>
			<style jsx>{`
				.background {
					top: 0
				}

				.background_noblur {
					height: 50%;
					z-index: 100;
				}

				.background_image {
					object-position: top;
				}				
			`}</style>
		</div>
	)
}