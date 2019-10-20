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

export interface StyledTextStyleBlockProps {
  color?: SectionBlockColors;
}

export const StyledTextStyleBlock = styled.section<StyledTextStyleBlockProps>`
  font-family: sans-serif;
  color: ${props => props.color || SectionBlockColors.Black};
}`;