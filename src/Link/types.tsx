// src/hello-world.styled.ts
import styled from 'styled-components';

export interface LinkProps {
    href?: string;
    children?: React.ReactNode;
}

export const StyledLink = styled.a<LinkProps>`
  padding-top: 15px; 
  font-family: sans-serif;
}`;
