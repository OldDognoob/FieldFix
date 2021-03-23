import React from "react";
import styled from "styled-components";
import LogoImg from "../../images/logos/brand.png";
import {Link} from "react-router-dom";

const BrandNameContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NameImage = styled.div`
  // if the size is provided then give us px otherwise give us the size we ask for
  width: ${({ size }) => (size ? size + "px" : "3em")};
  height: ${({ size }) => (size ? size + "px" : "3em")};
  img {
    width: 100%;
    height: 100%;
  }
`;

const BrandTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "25px")};
  /* color: #696767; */
  font-weight: 700;
  margin-left: 6px;
`;

const StyledLink = styled(Link)`
text-decoration: none;
`;

function BrandName(props) {
  const { logoSize, textSize, color, hidelogo } = props;
  return (
    <BrandNameContainer>
      {!hidelogo && (
        <Link to="/"><NameImage size={logoSize}>
          <img src={LogoImg} alt="FieldFix Brand Logo" />
        </NameImage>
        </Link>
      )}
      <StyledLink to="/">
      <BrandTitle size={textSize} color={color}>
        FieldFix
      </BrandTitle>
      </StyledLink>
    </BrandNameContainer>
  );
}
export default BrandName;
