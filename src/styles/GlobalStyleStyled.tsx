import {createGlobalStyle} from 'styled-components'
import JalnanTtf from '../fonts/Jalnan.ttf'
import JalnanOTF from '../fonts/JalnanOTF.otf'

const GlobalStyleStyled = () => {
  return <GlobalStyle />
}

export default GlobalStyleStyled

//--background: #161616;
//     --background-card: #252525;
//     --background-level-one: rgba(53,53,53,.5);
//     --border-card: hsla(0,0%,100%,.1);
//     --side-spacing: clamp(1rem,5vw,4em);
//     --text-color-100: #eee;
//     --text-color-70: #9b9b9b;
//     --text-color-40: #5d5d5d;
//     --font-size: 1rem;
//     --blur: blur(30px);
//     --blur-light: blur(15px);
//     --color-positive: #26f52e;
//     --border-size: 1px;
//     --radius-big: 10rem;
//     --radius-norm: 1rem;
//     --transition-long: 800ms;
//     --transition-medium: 400ms;
//     --transition-short: 200ms;
//     --curve: cubic-bezier(0.16,1,0.3,1);
//     --card-inner-padding-vertical: 1.5rem;
//     --card-inner-padding-horizontal: 2.25rem;
//     --button-inner-padding-vertical: 1.25rem;
//     --button-inner-padding-horizontal: 3rem;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'JalnanTtf'; 
    src: local('JalnanTtf'), local('JalnanTtf');
    font-style: normal;
    src: url(${JalnanTtf}) format('JalnanTtf');
    font-weight: 300;
  }
  @font-face {
    font-family: 'JalnanOTF';
    src: local('JalnanOTF'), local('JalnanOTF');
    font-style: normal;
    src: url(${JalnanOTF}) format('JalnanOTF');
    font-weight: 300;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: JalnanTtf,JalnanOTF,sans-serif;
    font-weight: 600;
    font-size: 100%;
    vertical-align: baseline;
    user-select: none;
  }
  body{
    
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;

  }
  html,
  body,
  body > #root{
    height: 100%;
    background: #161616;
    
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  
`
