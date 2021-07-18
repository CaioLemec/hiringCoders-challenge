import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F2F0F5;
        --primary-red: #F50057;
        --negative-primary: #1D1D1F;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased; 
    }

    h1, strong {
        font-weight: 600;
    }
    
    body, input, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400,
    }

    button {
        cursor: pointer;
    }
`