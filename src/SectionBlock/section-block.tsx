import * as React from 'react';
import * as Styles from './section-block.styled';

export interface SectionBlockProps {
    color?: Styles.SectionBlockColors;
    children?: React.ReactNode;
}

export const SectionBlock: React.StatelessComponent<SectionBlockProps> = props => {
    return <Styles.StyledSectionBlock color={props.color}>{props.children || 'Hello, World!'}</Styles.StyledSectionBlock>
 }