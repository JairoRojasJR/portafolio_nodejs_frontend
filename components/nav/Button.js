import Image from "next/image"
import styles from "../styles/nav/Button"

export default function Button(props) {
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
					{props.title}
				</div>
			</button>
			<div
				className='link__content fdc aic'>
				{props.children}
			</div>
			<style jsx>{styles}</style>
		</div>
	)
}