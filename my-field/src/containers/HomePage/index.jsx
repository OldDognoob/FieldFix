import React from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import TopSection from "./topSection";
import { deviceSize } from "../../components/responsive";
import { Marginer } from "../../components/marginer";
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
function HomePage(props) {
  return (
    <PageContainer>
      <TopSection>
        <Navbar/>
      </TopSection>
      <InnerPageContainer>
        <ContentContainer>
        <Title>Our most valuable services & More</Title>
        </ContentContainer>
        <ServiceCard/>
      </InnerPageContainer>
    </PageContainer>
  );
}
export default HomePage;
