// src/hello-world.styled.ts
import styled from 'styled-components';

export enum SectionBlockColors {
  Pale = 'palevioletred',
  Whip = 'papayawhip',
  Black = '#000000',
  Gray = '#222121',
  Charcoal = '#171717',
  Royal = '#23025c',
  Gold = '#f6ac3e',
  White = '#ffffff'
}

export interface SectionBlockProps {
  color?: SectionBlockColors;
  margin?: string;
  padding?: string;
  paddingsm?: string;
  children?: React.ReactNode;
  center?: boolean;
}

export const StyledSectionBlock = styled.section<SectionBlockProps>`
padding: ${props => props.padding || 'auto'};
  font-family: sans-serif;
  background: ${props => props.color || SectionBlockColors.Black};
  margin: ${props => props.margin || 'auto auto'};

  ${props =>  {
    if(props.center)
      return `text-align: center;`;

      return ``;
    
  }}
  
  @media screen and (max-width: 992px) {
	  padding: ${props => props.paddingsm || props.padding};
	  
  }
}`;