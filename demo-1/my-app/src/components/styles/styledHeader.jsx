import React from "react";

import styled from "styled-components";

const H1 = styled.h1`
    text-align: center;
`

const StyledHeader = props => {
  return (
    <H1>
      {props.children}
    </H1>
  )
}

export default StyledHeader;