import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::befor,
    *::after {
      border-box:  box-sizing;
    }

    html {
      font-size: 10px;
    }

    body {
      color: #333;
      line-height: 1.5;
    }

    ul,
    li {
      list-style: none;
    }

    a{
      text-decoration: none;
      color: #333;
    }

    button {
      background-color: royalblue;
      outline: none;
      border: none;
      padding: .8rem 1.4rem;
      border-radius: 5px;
      cursor: pointer;
      color: #fff;
      &:hover {
        background-color: rgb(26, 73, 212);
      }
    }

    img {
      display: block;
    }
`

export default GlobalStyle;