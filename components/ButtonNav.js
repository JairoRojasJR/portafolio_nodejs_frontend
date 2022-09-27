import Image from "next/image";

export default function ButtonNav(props) {
	const Content = props.router;

	const hoverinLink = e => {
		e.target.closest('.link__nav-button').classList.add('link__hover');
	}

	const hoveroutLink = e => {
		e.target.closest('.link__nav-button').classList.remove('link__hover');
	}

	return (
		<div className={`link__nav${props.linkOpened === props.section ? ' link-opened' : ''}`}>
			<button
				className='link__nav-button df aic'
				onClick={() => props.openLink(props.section)}>
				<i
					className='icon-container pr cp'
					onMouseEnter={hoverinLink}
					onMouseLeave={hoveroutLink}
				>
					<Image
						src={props.icon}
						layout='fill' />
				</i>
				<div
					className='link__nav-text df aic jcc pr h100p cp'
					onMouseEnter={hoverinLink}
					onMouseLeave={hoveroutLink}
					>
					{props.children}
				</div>
			</button>
			<div
				className='link__content'>
				<Content></Content>
			</div>
			<style jsx>{`
				.link__nav {
					order: 2;
					display: flex;
				}

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

				.link__nav-text {
					padding: .5rem 1.5rem;
					border-radius: .4rem;
					font-family: 'Libre Baskerville', sans-serif;
					background-color: #efefef;
					border: 3px solid #1b1b1b;
					transform: translateX(-1rem);
					z-index: 100;
				}

				.link__content {
					display: none;
					position: absolute;
					background-color: #f1f1f1;
					width: 90%;
					height: 80%;
					top: 11%;
					left: 5%;
					color: #000;
					padding: 2.5rem;
					border-radius: 1.3rem;
					border: .3rem solid #000;
					z-index: 300;
					overflow-y: auto;
				}

				.link-opened .link__content {
					display: block;
					animation: deploidContent .6s forwards;
				}

				@keyframes deploidContent {
					0% {
						transform: scaleY(0);
					}
					100% {
						transform: scaleY(1);
					}
				}

				.link-opened .link__nav-button {
					position: relative;
					z-index: 400;
				}

				.icon-container {
					filter: drop-shadow(2px 2px 5px #1b1b1b) drop-shadow(2px 2px 5px #1b1b1b);
				}
				
				.link__nav-text {
					box-shadow: 2px 2px 5px 2px #1b1b1b;
				}

				.link__nav-button.link__hover {
					position: relative;
					z-index: 500;
				}
				
				.link__nav-button.link__hover .icon-container {
					transform: scale(1.2);
				}

				.link__nav-button.link__hover .link__nav-text {
					background-color: #FBD767;
				}

				.link-opened .icon-container {
					transform: scale(1.2);
				}

				.link-opened .link__nav-text {
					background-color: #FBD767;
				}

				@media screen and (max-width: 725px) {
					.link__content {
						width: 80%;
						margin-left: 13%;
					}

					.link__nav-text {
						width: 200px;
					}

					.link-opened .link__nav-text {
						transition: transform .5s;
						transform: rotate(-90deg) translateY(-200%) scale(.8);
					}
				}
			`}</style>
		</div>
	)
}