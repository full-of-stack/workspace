import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  color: #2c2c2c;
`;

interface Props {
  content: string;
}

const Logo: React.FC<Props> = ({ content }) => {
  return (
    <>
      <H1>{content}</H1>
    </>
  );
};

export default Logo;
