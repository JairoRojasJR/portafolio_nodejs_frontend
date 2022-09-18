import Image from "next/image";

export default function ButtonNav(props) {
	const Content = props.router;
	return (
		<div className='link__nav'>
			<button className='link__nav-button df aic'>
				<i className='icon-container pr cp'>
					<Image
						src={props.icon}
						layout='fill' />
				</i>
				<div className='link__nav-text df aic jcc pr h100p cp'>
					{props.children}
				</div>
			</button>
			<div className='link__content'>
				<Content></Content>
			</div>
			<style jsx>{`
				.link__nav-button {
					gap: .4rem;
					background-color: transparent;
					border: none;
					height: 2.5rem;
				}

				.icon-container {
					width: 3.5rem;
					height: 3.5rem;
					z-index: 200;
				}

				.link__nav:nth-child(3) .link__nav-button {
					gap: 0;
				}

				.link__nav-text {
					padding: .5rem 1.5rem;
					border-radius: .4rem;
					font-family: 'Libre Baskerville', sans-serif;
					background-color: #efefef;
					border: 3px solid #1b1b1b;
					transform: translateX(-1rem);
					z-index: 100;
				}

				.link__nav:nth-child(3) .icon-container {
					transform: translateX(.5rem);
				}

				.icon-container {
					filter: drop-shadow(2px 2px 5px #1b1b1b) drop-shadow(2px 2px 5px #1b1b1b);
				}
				
				.link__nav-text {
					box-shadow: 2px 2px 5px 2px #1b1b1b;
				}
				
				.icon-container:hover + .link__nav-text,
				.link__nav-text:hover {
					background-color: #F4CF62;
				}
				
				.link__nav-button:hover > .icon-container {
					transform: scale(1.5);
				}

				.link__content {
					display: none;
				}
			`}</style>
		</div>
	)
}