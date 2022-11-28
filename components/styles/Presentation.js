import css from 'styled-jsx/css'

export default css`
  .presentation  {
    height: 50%;
  }

  .presentation__card {
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
    position: relative;
    padding: 1rem;
    background-color: #fff;
    border-radius: 1rem;
    color: #000;
  }
  
   @media screen and (max-width: 725px) {
     .presentation__card {
       max-width: 80%;
     }
   }
`