import * as React from 'react';
import * as Styles from './text-style-block.styled';

export interface TextStyleBlockProps {
    color?: Styles.SectionBlockColors;
    children?: React.ReactNode;
}

export const TextStyleBlock: React.StatelessComponent<TextStyleBlockProps> = props => {
    return <Styles.StyledTextStyleBlock color={props.color}>{props.children || 'Hello, World!'}</Styles.StyledTextStyleBlock>
 }