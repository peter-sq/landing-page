import React from 'react';
import styled, { css } from "styled-components";
import Search from "../img/search.png";
import Play from "../img/send.png"

const Container = styled.div`
width:100px;
padding:20px;
display:flex;
flex-direction:column;
-webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
@media only screen and (max-width:480px){
   width:50px;
   }
`;

const Image = styled.div`
width:20px;
align-item:center;
`;

const Text = styled.span`
margin-top:10px;
text-align:center;
@media only screen and (max-width:480px){
    font-size:14px;
   }
`

const MiniCard = () => {
    return (
       <Container>
           <Image src = {Search}/>
           <Text>
               lorem ipssium idfvsk justify jdfxz  wddxvf
           </Text>

       </Container>
    )
}



export default MiniCard;