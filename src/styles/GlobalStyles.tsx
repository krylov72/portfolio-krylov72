import { createGlobalStyle } from "styled-components";
import { MyTheme } from "../theme/Theme";


export const GlobalStyles = createGlobalStyle`
   *,
   *::before,
   *::after{
        margin: 0;
        padding: 0;
        box-sizing:border-box; 
   }
   
   body {
  margin: 0;
  font-family: 'Fira Code',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p {
    color:${MyTheme.colors.secondtext};
    font-size:16px;
    font-weight:400;
    line-height:21px;   
}

a{
    text-decoration:none;
    font-size:16px;
    line-height:21px;
   
}
li {
  list-style:none;
}



h1,h2,h3{
    color:${MyTheme.colors.maintext}
}
`
