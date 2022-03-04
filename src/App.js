import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  width:100%;
  height:100vh;
  background-color:#E0FFFF;
  display:flex;
  justify-content:center;
  align-items:center;
}
`
const Title = styled.div`
font-size:3rem;
padding:5vh 5vw 5vh 5vw;
`
const Container = styled.div`
width:40vw;
height:50vh;
background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:25px;
`
const Btn1 = styled.button`
width:12vw;
margin-top:5vh;
background-color:white;
border:none;
border-radius:20px;
font-size:2rem;
`
const Btn2 = styled.button`
width:12vw;
margin-bottom:5vh;
background-color:white;
border:none;
border-radius:20px;
font-size:2rem;
`

export default class App extends React.Component{
  state = {
    number: 0
  };

  add = () => {
    this.setState({
      number:
        this.state.number === 10
          ? (this.state.number = 10)
          : this.state.number + 1
    });
  };
  remove = () => {
    this.setState({
      number:
        this.state.number === 0
          ? (this.state.number = 0)
          : this.state.number - 1
    });
  };

  render() {
    return (
      <Container>
        <GlobalStyle/>
        <Btn1 onClick={this.add}>+</Btn1>
        <Title>{this.state.number}</Title>
        <Btn2 onClick={this.remove}>-</Btn2>
      </Container>
    );
  }
}
 