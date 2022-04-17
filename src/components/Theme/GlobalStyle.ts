import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        max-width: 100%;
        font-size: 100%;
        &::-webkit-scrollbar{
            width: 0.7rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgray;
        }
    }
    body {
        font-family: Montserrat, sans-serif;
        background: #2f313c;
        color: #fff;
    }
    ul {
        list-style: none;
        padding: 0;
    }
    a {
        text-decoration: none;
    }
    section {
        min-height: 50vh;
        background: #ddd;
        color: #000;
    }
    
`
export default GlobalStyle