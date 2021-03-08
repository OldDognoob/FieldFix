import React from "react";
import styled from "styled-components";

const BrandNameContainer = styled.div`
display: flex;
align-items: center;
`;

const NameImage = styled.div`
// if the size is provided then give us px otherwise give us the size we ask for
width: ${({size})=> size ? size + "px" : "4em"};
height: ${({size})=> size ? size + "px" : "4em"};
img{
    width:100%;
    height:100%;
}
`;

const BrandTitle = styled.h2`
margin:0;
font-size: ${({size})=> size ? size + "px" : "25px"};
color:#fff;
font-weight:600;
`;

function BrandName(props){

}
export default BrandName;