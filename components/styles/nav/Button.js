import css from 'styled-jsx/css'

export default css`
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
  	padding: 1.5rem;
  	border-radius: 1.3rem;
  	border: .3rem solid #000;
  	z-index: 300;
  	overflow-y: auto;
  }

  .link-opened .link__content {
  	display: flex;
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
  		transform: rotate(-90deg) translateY(-300%) scale(.8);
  		z-index: 300;
  	}
  }
`