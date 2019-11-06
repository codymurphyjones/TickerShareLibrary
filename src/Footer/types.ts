// src/hello-world.styled.ts
import styled from 'styled-components';
import { SectionBlockColors } from '../SectionBlock';


export interface FooterProps {
  color?: SectionBlockColors;
  fontColor?: SectionBlockColors;
  className?: string;
  padding?: string;
}


export const StyledFooter = styled.section<FooterProps>`
  font-family: sans-serif;
  background: ${props => props.color || SectionBlockColors.Charcoal};
  color: ${props => props.fontColor || SectionBlockColors.White};
  ${props =>
		props.padding
			? `padding: ${props.padding};`
			: ''};
}`;