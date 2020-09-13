import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import { color_primary } from '~/styles/variables';

import { darken } from 'polished';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,700;1,800&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline:0;
  }

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${color_primary};
  }

  &::-webkit-scrollbar-track {
    background: ${darken(0.2, '#eee')};
    border-top: 0;
    border-bottom: 0;
    border-right: 0;
  }

  html, body, #root {
    min-height: 100%;
    height: 100%;
  }

  textarea{
    resize: none;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button,textarea {
    font: 14px 'Poppins', sans-serif;
  }

  input {
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid transparent;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #333;
    margin: 8px 0;

    &::placeholder {
      color: #bbb;
    }

    &:focus {
      border: 1px solid lightskyblue;
    }
  }

  button {
    cursor: pointer;
    height: 44px;
    font-weight: bold;
    border: 0;
    border-radius: 4px;
    font-size: 18px;
  }
`;
