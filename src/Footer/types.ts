// src/hello-world.styled.ts
import styled from 'styled-components';

enum FooterColors {
  Pale = 'palevioletred',
  Whip = 'papayawhip',
  Black = '#000000',
  Gray = '#222121',
  Charcoal = '#171717',
  Royal = '#23025c',
  Gold = '#f6ac3e',
  White = '#ffffff'
}

export interface FooterProps {
  color?: FooterColors;
  fontColor?: FooterColors;
}

export interface FooterSectionProps {
  maxWidth?: string;
  center?: boolean;
}

export const StyledFooter = styled.section<FooterProps>`
  padding-top: 15px; 
  font-family: sans-serif;
  background: ${props => props.color || FooterColors.Charcoal};
  color: ${props => props.fontColor || FooterColors.White};
}`;


export const StyledFooterSection = styled.section<FooterSectionProps>`
  display: inline-block; margin: auto auto;
  ${props =>
    props.maxWidth ? `max-width:`.concat(props.maxWidth) : ``};

  ${props =>
      props.center ? `text-align: center;` : ``};
}`;