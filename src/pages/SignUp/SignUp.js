import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Icon from "./Icon";
import Input from "./Input";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { green } from "@material-ui/core/colors";

function SignUp() {
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  return (

    <SignUp className="container-SignUp">
    <MainContainer>
    
     
      <WelcomeText>Bienvenido</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button content="Sign Up" />
      </ButtonContainer>
      <LoginWith>OR LOGIN WITH</LoginWith>
      <HorizontalRule />
      <IconsContainer>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={TwitterBackground}>
          <FaTwitter />
        </Icon>
      </IconsContainer>
      <ForgotPassword>Has olvidado tu contraseña?</ForgotPassword>
    </MainContainer></SignUp>
  );
}

const MainContainer = styled.div`

  display:flex;
  align-items: center;
  flex-direction:column ;
  

  height: 100vh;
  width: 100vw;
  background: hsla(202, 88%, 16%, 0.822);
  box-shadow: 0 80px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: auto;
  letter-spacing: 0.14rem;
  @media only screen and (max-width: 320px) {
    width: 100vw;
    height: 100vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: |30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`
;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 80%;
  width: 30%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 30%;
  display: flex;
  align-items: auto;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;

`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 0.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`

  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 50%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default SignUp;