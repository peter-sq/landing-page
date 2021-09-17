import React from 'react';
import styled, { css } from "styled-components";


const Container = styled.div`
  height: 50px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-item:center;
`;

const Left = styled.div`
width:60%;
display:flex;
align-item:center;
justify-content:space-between;

`
const Logo = styled.h1`
font-weight: bold;
text-decoration: underline crimson;
`;
const Menu = styled.ul`
display:flex;
@media only screen and (max-width:480px){
  display:none;
}

`;
const MenuItem = styled.li`
margin-right: 30px;
font-size:20px;
font-weight:bold;
color:gray;
list-style:none;
`;
const Button = styled.button`
border:2px solid white;
padding:10px 15px;
background-color:crimson;
color:white;
font-weight:bold;
border-radius:10px;
cursor:pointer;
`

const Navbar = () => {
    return(
        <Container> 
           
            <Wrapper>
           <Logo>Petvotng.</Logo>
           <Left>
           <Menu>
               <MenuItem>Home</MenuItem>
               <MenuItem>Features</MenuItem>
               <MenuItem>Service</MenuItem>
               <MenuItem>Pricing</MenuItem>
               <MenuItem>Contact</MenuItem>
              
           </Menu>
           </Left>
           <Button>JOIN NOW</Button>
            </Wrapper>
           
           
         
            </Container>
        
        
    );
};

export default Navbar;