import React from 'react'
import styled from "styled-components";

import TopSectionBackgroundImg from "../../images/thumbnails/landing-page1.jpg";
import TheExpertiseImg from "../../images/thumbnails/Expertise1.png";
import BrandName from '../../components/BrandName';
import {Marginer} from '../../components/marginer';
import Button from '../../components/button';

import { deviceSize } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";

const TopSectionContainer = styled.div`
width: 100%;
height: 800px;
background:url(${TopSectionBackgroundImg});
background-position: 0px -150px;
background-size: cover; // fits the image accordingly to the fitting space
`;

const BackgroundFilter = styled.div`
width: 100%;
height:100%;
background-color: rgba(40, 73, 87, 0.9);
display: flex;
flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
width:100%;
height:100%;
display: flex;
align-items: center;
justify-content: space-evenly;

@media screen and (max-width: ${deviceSize.mobile}px) {
    /* height: 700px;
    background-position: 0px 0px; */
    justify-content: center;
  }
`;

const StandoutImg= styled.div`
width: 44em;
height: 34em;

img{
    width:100%;
    height:100%;
}
`;

const LogoContainer = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
`;

const SloganText = styled.div`
margin: 0;
line-height: 1.4;
color:#fff;
font-weight: 500;
font-size: 35px;
`;

 function TopSection(props) {
     const {children} = props;
     const isMobile = useMediaQuery({maxWidth: deviceSize.mobile});

    return<TopSectionContainer>
        <BackgroundFilter>
            {children}
        <TopSectionInnerContainer>
            <LogoContainer>
                <BrandName logoSize={isMobile ? 50 : 65} textSize={isMobile ? 45 : 55}/>
                <Marginer direction="vertical" margin = {8}/>
                <SloganText>Any Field can be Fixed</SloganText>
                <Marginer direction="vertical" margin = {15}/>
                <Button>Join Now</Button>
            </LogoContainer>
            {!isMobile && (
            <StandoutImg>
                <img src={TheExpertiseImg} alt="An expert in your doorway"/>
            </StandoutImg>
            )}
            </TopSectionInnerContainer>
        </BackgroundFilter>
    </TopSectionContainer>
}
export default TopSection;