import React from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import TopSection from "./topSection";
import { deviceSize } from "../../components/responsive";
// import { Marginer } from "../../components/marginer";
import ServiceCard from "../../components/serviceCard";

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
  padding: 1em;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }
`;

const service = {"id":1, "title": "Fix everything",
"thumbnailUrl": "http://localhost:3000/car.png","rate": 34,
"rating": 4, "specialist": { "id": 1, "fullName": "George Sentio" }};

function HomePage(props) {
  return (
    <PageContainer>
      <TopSection>
        <Navbar/>
      </TopSection>
      <InnerPageContainer>
        <ContentContainer>
        <Title>Our most valuable services & More</Title>
        <ServiceCard {...service}/>
        </ContentContainer>
      </InnerPageContainer>
    </PageContainer>
  );
}
export default HomePage;
