import React from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import TopSection from "./topSection";
import { deviceSize } from "../../components/responsive";
import { Marginer } from "../../components/marginer";
import Services  from "./services";
import SpecialistAd  from "../../components/specialistAd";
import  Footer  from "../../components/footer";


const Title = styled.h1`
font-weight: 900;
color: #000;
`;
const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* padding: 1em; */
  @media screen and (max-width: ${deviceSize.mobile}px) {
    
  }
`;

// const service = ({"id":1, "title": "I will arrange your finance problems",
// "thumbnailUrl": "https://images.unsplash.com/photo-1554252116-ee59370d1f66?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1349&q=80","rate": 34,
// "rating": 4, "specialist": { "id": 1, "fullName": "George Sentio" }});

function HomePage(props) {
  return (
    <PageContainer>
      <TopSection>
        <Navbar useTransparent />
      </TopSection>
      <InnerPageContainer>
        <Marginer direction="vertical" margin="2em" />
        <ContentContainer>
          <Services />
        </ContentContainer>
        <Marginer direction="vertical" margin="5em" />
        <SpecialistAd />
        <Marginer direction="vertical" margin="5em" />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
export default HomePage;
