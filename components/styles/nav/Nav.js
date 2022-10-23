import css from 'styled-jsx/css'

export default css`
  nav {
    padding: 1.5rem;
    padding-top: 2rem;
    gap: 1.5rem;
    height: 50%;
  }

  @media screen and (max-width: 725px) {
    nav {
      flex-direction: column;
      gap: 3rem;
      padding: .5rem;
    }
  }
`