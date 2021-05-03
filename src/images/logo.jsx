import React from "react";
import styled from "styled-components";
import logo from '../images/olive-branch.png';

const StyledLogo = styled.span`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0;
    min-height: 70px;
    min-width: 100px;
    padding: 0;
    text-decoration: none;
`

function Logo() {
    return (
      <StyledLogo>
        <a href='/'><img src={logo} alt="logo" height="50" style={{ marginTop: 4 }} /></a>
      </StyledLogo>
    )
  }

export default Logo