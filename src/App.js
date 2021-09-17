
import styled, { css } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Features from "./components/Feature";
import Service from "./components/Service";
import Price from "./components/Price";
import Footer from "./components/Footer";
import Contact from "./components/Contact";



      const Container = styled.div`
        height: 100vh;
        overflow: hidden;
        position: relative;
      `;

      const Shape = css`
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      `;

      const IntoShape = styled.div`
      ${Shape}
      clip-path: polygon(100% 0, 64% 0%, 49% 100%, 100% 99%);
      background-color:  #dc143c;
    
      `;
      const FeatureShape = styled.div`
      ${Shape}
      clip-path: polygon(0 0, 55% 0%, 33% 100%, 0% 100%);
      background-color:  pink;
    
      `;
      const ServiceShape = styled.div`
      ${Shape}
      clip-path: polygon(0 0, 33% 0%, 33% 90%, 0% 90%);
      background-color:      #f88497;
    
      `;

      const PriceShape = styled.div`
      ${Shape}
      clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
      background-color:      crimson;
    
      `;

        const App = () => {
          const Smallscreen = window.screen.width <= 480 ? true : false;
          return(
            <>
            <Container>
                  <Navbar />
                  <Intro />
                  <IntoShape />
            </Container>

              <Container>
                  <Features />
                  <FeatureShape />
              </Container>

                  <Container>
                  <Service />
                  {!Smallscreen &&  <ServiceShape />}
                 
                  </Container>

                  <Container>
                  <Price />
                  <PriceShape/>
                  </Container>

                  <Container>
                  <Contact />
                  <Footer/>
                  </Container>
                  
          </>
        
       

  );
};

export default App;
