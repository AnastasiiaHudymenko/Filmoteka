import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  font-family: 'Roboto', sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul  {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
// .container {
//   // border: 1px solid blue;
//   padding-left: 20px;
//   padding-right: 20px;

//   margin-left: auto;
//   margin-right: auto;

//   @media screen and (min-width: 320px) {
//     width: 320px;
//   }

//   @media screen and (min-width: 768px) {
//     width: 768px;
//     padding-left: 32px;
//     padding-right: 32px;
//   }

//   @media screen and (min-width: 1280px) {
//     width: 1280px;
//     padding-left: 32px;
//     padding-right: 32px;
//   }
// }
