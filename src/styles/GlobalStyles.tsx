import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, // для всех
    *::before, // для ховеров до
    *::after {// для ховеров после
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }
`
