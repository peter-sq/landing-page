import React from 'react';
import App from '../img/app.png';
import styled from "styled-components";
import AnimatedShape from  './AnimatedShape';


const Container = styled.div`
   display:flex;
   @media only screen and (max-width:480px){
  flex-direction:column;
  padding: 30px 20px;
  }
`;
const Image = styled.img`
width:80%;
`;
const Left = styled.div`
   width:50%;
   @media only screen and (max-width:480px){
   display:none;
  }
`;
const Right = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
margin-top:30px;
   width:50%;
   @media only screen and (max-width:480px){
   width:100%;
   }
`;

const Title = styled.span`
font-size:70px;
@media only screen and (max-width:480px){
    font-size:50px;
   }
`;
const SubTitle = styled.h1`
font-size:24px;
font-style:italic;
color:#333`;
const Desc = styled.p`
font-size:20px;
color:#777;
margin-top:30px;
`;
const Button = styled.button`
width:150px;
border:none;
padding:15px 20px;
background-color:darkblue;
color:white;
font-size:20px;
border-radius:20px;
margin-top:20px;
cursor:pointer;
display:flex;
alighn-item:center;

`;

const Features = () => {
    return(
       <Container>
           <Left>
               <Image src = {App}>
                   </Image>
                   </Left>
           <Right>
               <Title>
                   <b>Good</b> design<br/>
                   <b>Good </b> Business
               </Title>
               <SubTitle>
                   we know that good design mean good business
               </SubTitle>
               <Desc>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Desc>
        <Desc>
          We care your business and guarantee you to achieve marketing goals.
        </Desc>
        <Button>Learn More</Button>

           </Right>
           <AnimatedShape/>

       </Container>

    )
}


export default Features;