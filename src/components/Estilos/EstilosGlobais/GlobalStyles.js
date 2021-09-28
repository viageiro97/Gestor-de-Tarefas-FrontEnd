import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        transition: all 400ms;
        font-size: 16px;
        font-family: ${({theme})=>theme.fontFam};
        background: ${({theme})=>theme.color.bg};
    }

    .Toastify__toast-body { font-family: ${({theme})=>theme.fontFam};}
`

export default GlobalStyles;