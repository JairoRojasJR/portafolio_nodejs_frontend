import Image from 'next/image'

export default function Learned(props) {
  return (
    <>
      <div className='learned'>
        <div className='learned__img-container'>
          <Image
            className='learned__img ofcn'
            src={props.src}
            layout='fill'
          />
        </div>
        <div className='learned__text'>
          <p>
            {props.text}
          </p>
        </div>
      </div>
      <style jsx>{`
				.learned {
					width: 100%;
					display: flex;
					box-shadow: 3px 3px 3px #ababab;
					border-radius: .3rem;
					padding: 2rem .8rem;
          margin: 1rem 0;
          max-width: 700px;
				}

				.learned__img-container {
					position: relative;
					flex-basis: 50%;
					height: 100px;
				}

				.learned__text {
					flex-basis: 50%;
					padding: .3rem;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.learned__text p {
					text-align: center;
					margin: 0;
				}

				@media screen and (max-width: 660px){
					.learned {
						flex-direction: column;
					}

					.learned__img-container {
						flex-basis: auto;
					}
				}
				`}</style>
    </>
  )
}