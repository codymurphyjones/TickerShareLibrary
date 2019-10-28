// src/hello-world.styled.ts
import styled from 'styled-components';

enum SectionBlockColors {
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
  children?: React.ReactNode;
}

export const StyledSectionBlock = styled.section<SectionBlockProps>`
  padding: ${props => props.padding || '4em'};
  font-family: sans-serif;
  background: ${props => props.color || SectionBlockColors.Gold};
  margin: ${props => props.margin || 'auto auto'};
}`;