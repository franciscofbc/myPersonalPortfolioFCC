import { createGlobalStyle } from 'styled-components';

export const colors = {
  red: '#be3144',
  white: '#f0f0f0',
  darkBlue: '#343c44',
  blue: '#45567d',
};

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
}

.container{
    background-color:red;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
}
`;
