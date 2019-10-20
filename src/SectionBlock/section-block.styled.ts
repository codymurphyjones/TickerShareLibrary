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

export interface StyledSectionBlockProps {
  color?: SectionBlockColors;
}

export const StyledSectionBlock = styled.section<StyledSectionBlockProps>`
  padding: 4em;
  font-family: sans-serif;
  background: ${props => props.color || SectionBlockColors.Gold};
}`;