import * as React from "react"
import styled from "styled-components";
const Wrapper = styled.body`
margin: 0;
text-align: center;
`
const Button = styled.div`
    height: 50px;
    width: 100px;
    cursor: pointer;
    text-decoration: none;
    color: blue;
    background-color: ${(props) =>
        props.bg === "green" ? "green" : "yellow"};
    margin: auto;
    font-size: 2rem;
`;

export default function Home() {
  return <Wrapper>
    <p>afdaf</p>
    <Button>ab</Button>
  </Wrapper>
}
