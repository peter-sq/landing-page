import React,  {useState} from 'react';
import styled, { css } from "styled-components";
import phone from '../img/mobilez.png';
import MiniCard from './MiniCard';
import Play from "../img/play.png";



const Container = styled.div`
display:flex;
height:80%;
@media only screen and (max-width:480px){
   flex-direction:column;
   }
`;

const Image = styled.img`
display: ${(props) => props.open && "none"};
height:100%;
margin-left:100px;
`;

const Video = styled.video`
display: ${(props) => !props.open && "none"};
height:300px;
position:absolute;
top:0;
bottom:0;
margin:auto;
right:0;
@media only screen and (max-width:480px){
    width:100%;
   }


`;
const Wrapper = styled.div`
padding:50px;
display:flex;
flex-direction:column;
@media only screen and (max-width:480px){
    padding:20px;
  
   }
`

const Left = styled.div`
width:50%;
position:relative;
@media only screen and (max-width:480px){
    display:none;
   }
`;

const Right = styled.div`
width:50%;
@media only screen and (max-width:480px){
    width:100%;
   }
`;

const Title = styled.h1``;
const Desc = styled.p`
font-size:20px;
margin-top:20px;
color:#555;
`

const CardContainer = styled.div`
display:flex;
justify-content:space-between;
margin-top:50px;

`;

const Button = styled.button`
width:180px;
border:none;
border-radius:10px;
background-color:darkblue;
color:white;
font-size:20px;
padding:15px;
margin-top:50px;
cursor:pointer;
`;

const Icon = styled.img`
  width: 18px;
  margin-right: 10px;
`;

const Modal = styled.div`
width:100vw;
height:100vh;
position:absolute;
top:0;
left:0;
background-color: rgba(0,0,0,0.5)
`;

const CloseButton = styled.button`
position:absolute;
background-color:white;
padding:5px;
border:none;
border-radius:5px;
right:5px;
top:30%;
`;





const Service = () => {
    const Smallscreen = window.screen.width <= 480 ? true : false;
    const [open, setOpen] = useState(false);
    return(
       <Container>
        <Left>
            <Image open = {open} src = {phone} />
            <Video  open = {open} 
            autoplay
             loop 
             controls
              src = 'https://www.youtube.com/watch?v=Loo_6FNKsTU'/>
        </Left>
        <Right>
            <Wrapper>
                <Title>Simple way to start</Title>
                <Desc> We provide digital experience services to startups and small
            businesses to looking for a partner of their digital media, design &
            development, lead generation and communications requirents. We work
            with you, not for you. Although we have a great resources
            </Desc>
            <CardContainer>
                <MiniCard>

                </MiniCard>
                <MiniCard>
                    
                    </MiniCard>
                    <MiniCard>
                    
                    </MiniCard>
            </CardContainer>
            <Button onClick = {() => setOpen(true)}>
            <Icon src={Play} />
                How it works
                </Button>
            </Wrapper>
        </Right>
        {Smallscreen && open && (
            <Modal>
                <Video  open = {open} 
            autoplay
             loop 
             controls
              src = 'https://www.youtube.com/watch?v=Loo_6FNKsTU'/>
              <CloseButton onClick = {() => setOpen(false)}>close</CloseButton>
            </Modal>
        )}
     

       </Container>
    )
}


export default Service;