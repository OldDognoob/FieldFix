import React from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import TopSection from "./topSection";

const Title = styled.h1`
font-weight: 900;
color: #000;
`;
function HomePage(props) {
  return (
    <PageContainer>
      <TopSection>
        <Navbar/>
      </TopSection>
      <InnerPageContainer>
        <Title>Our most valuable services & More</Title>
      </InnerPageContainer>
    </PageContainer>
  );
}
export default HomePage;
