import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const globalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    letter-spacing: 0.2rem;
    background-image: linear-gradient(#000116, #222222);
  }
`;

const styledNav = styled.ul`
  margin: 0;
  padding: 0;
  display: inline-flex;
  type: none;
  left: 0vh;
  top: 30vh;
  position: fixed;
  & li {
    list-style-type: none;
    & div {
      cursor: pointer;
      display: inline-flex;
      & h3 {
        list-style-type: none;
        margin: 0 1vmin 0 0;
        font-size: 2vmin;
        font-weight: 900;
        text-shadow: 2px 2px 10px #ffffff
        content: '|';
        color: RGB(236, 140, 253);
      }
    }
  }
`;
const styledNavP = styled.p`
  margin: 0.5vmin 0 0 0;
  font-size: 1.5vmin;
  text-shadow: 0px 0px 1.5px #ffffff;
  color: RGB(236, 140, 253);
  opacity: ${props => (props.active ? 1 : 0.1)};
  transition: 0.7s ease;
  :hover {
    opacity: 1;
    transition: 0.7s ease;
  }
`;
const styledDiv = styled.div`
  height: 100vh;
  background: none;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  border: 5px solid white;
  display: flex;
  box-sizing: border-box;
  /* transition: transform 1s;
& [status="current"] {
  transform: translateY(0);
}
& [status="down"] {
  transform: translateY(100%);
} */
`;
export { globalStyle, styledNav, styledNavP, styledDiv };
