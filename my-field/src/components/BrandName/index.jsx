import React from "react";
import styled from "styled-components";
import LogoImg from "../../images/logos/brand.png";

const BrandNameContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NameImage = styled.div`
  // if the size is provided then give us px otherwise give us the size we ask for
  width: ${({ size }) => (size ? size + "px" : "4em")};
  height: ${({ size }) => (size ? size + "px" : "4em")};
  img {
    width: 100%;
    height: 100%;
  }
`;

const BrandTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "35px")};
  color: #fff;
  font-weight: 700;
  margin-left: 6px;
`;

function BrandName(props) {
    const { logoSize, textSize} = props;
  return (
    <BrandNameContainer>
      <NameImage size={logoSize}>
        <img src={LogoImg} alt="FieldFix Brand Logo" />
      </NameImage>
      <BrandTitle size={textSize}>FieldFix</BrandTitle>
    </BrandNameContainer>
  );
}
export default BrandName;
