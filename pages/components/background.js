import Image from 'next/image'

export default function Background() {
	return (
		<div className='background-container'>
			<div className='background background_noblur'>
				<div className='noblur-container'>
				<Image
					src='/images/codigo_image.png'
					className='background_image'
					layout='fill' />

				</div>
			</div>
			<div className='background background_blur'>
				<Image
					src='/images/codigo_image.png'
					className='background_image'
					layout='fill' />
			</div>
		</div>
	)
}