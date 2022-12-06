import React from "react";
import styled from "styled-components";

interface IProps {
  children: JSX.Element,
}

const Layout: React.FC<IProps> = ({ children }) => {

  return (
    <StyledView>
      {children}
    </StyledView>
  )
}

const StyledView = styled.div`
  width : 800px;
  height : 800px;
`;

export { Layout }