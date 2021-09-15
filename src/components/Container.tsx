import React from 'react';
import styled from 'styled-components';

export interface ContainerProps {
  width?: number;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
}

const Container: React.FC<ContainerProps> = ({
  width,
  children,
  justifyContent,
  alignItems,
  display,
}) => {
  return (
    <ContainerDiv
      alignItems={alignItems}
      justifyContent={justifyContent}
      width={width}
      display={display}
    >
      {children}
    </ContainerDiv>
  );
};

export default Container;
const ContainerDiv = styled('div')<{
  width?: number;
  justifyContent?: string;
  alignItems?: string;
  display?: string;
}>`
  width: ${(props) => `${props.width}%` || '70%'};
  display: ${(props) => props.display || 'unset'};
  justify-content: ${(props) => props.justifyContent || 'unset'};
  align-items: ${(props) => props.alignItems || 'unset'};
`;
