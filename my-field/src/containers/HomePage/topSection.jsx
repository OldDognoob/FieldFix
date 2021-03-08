import React from 'react'
import styled from "styled-components";

import TopSectionBackgroundImg from "../../images/services/landing-page1.jpg";

const TopSectionContainer = styled.div`
width: 100%;
height: 800px;
background:url(${TopSectionBackgroundImg});
background-position: 0px -150px;
background-size: cover; // fits the image accordingly to the fitting space
`;

 function TopSection(props) {
    return<TopSectionContainer>Win</TopSectionContainer>
}
export default TopSection;