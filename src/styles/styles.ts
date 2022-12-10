import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
      --background: #f8f2f5;
      
      --red: #e52e4d;
      --blue: #5429cc;
      --green:#33cc95;
      --blue-light: #6933ff;
      
      --text-title: #363f5f;
      --text-body: #969cb3;

      --shape: #fff;
    }
  
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body, input, textarea, button{
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6{
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
    }
  
  html{
    @media (max-width: 1080px) {
      font-size: 0.9375rem;
    }
    @media (max-width: 720px) {
      font-size: 0.875rem;
    }
  }
  
  body{
      background-color: var(--background);
      -webkit-font-smoothing: antialiased;
    }

  button{
      cursor: pointer;
    }

  [disabled]{
    opacity: 0.7;
    cursor: not-allowed;
    filter: grayscale(70%);
  }

  .react-modal-overlay{
    background: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;

    border-radius:4px;
  }
  
  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    border: 0;
    background: transparent;

    transition: ease;

    &:hover{
      filter: brightness(90%);
    }
  }
`
