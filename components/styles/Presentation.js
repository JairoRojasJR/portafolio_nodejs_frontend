import css from 'styled-jsx/css'

export default css`
  .presentation  {
    height: 50%;
  }

  .presentation__card {
          max-width: 50%;
          height: 100%;
        }        

        .presentation__image-container {
          width: 5.5rem;
          height: 5.5rem;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
        }

        .presentation__text-container {
          padding: 1rem;
          background-color: #fff;
          border-radius: 1rem;
          color: #000;
          max-height: 100%;
          overflow: hidden;
        }

        .presentation__text-container p {
          line-height: 1.5rem;
          margin: 0;
          text-align: center;
        }

        @keyframes deploidPresCard {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @media screen and (max-width: 725px) {
          .presentation__card {
            max-width: 80%;
          }
        }
`