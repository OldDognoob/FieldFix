import React from 'react'
import styled from "styled-components";

import TopSectionBackgroundImg from "../../images/services/landing-page1.jpg";
import TheExpertiseImg from "../../images/services/Expertise.png";
import BrandName from '../../components/BrandName';

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
`;

 function TopSection(props) {
    return<TopSectionContainer>
        <BackgroundFilter>
        <TopSectionInnerContainer>
            <LogoContainer>
                <BrandName/>
            </LogoContainer>
            <StandoutImg>
                <img src={TheExpertiseImg} alt="An expert in your doorway"/>
            </StandoutImg>
            </TopSectionInnerContainer>
        </BackgroundFilter>
    </TopSectionContainer>
}
export default TopSection;