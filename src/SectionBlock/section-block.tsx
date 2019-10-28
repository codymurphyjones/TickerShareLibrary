import * as React from 'react';
import { SectionBlockProps, StyledSectionBlock }  from './types';


export const SectionBlock: React.StatelessComponent<SectionBlockProps> = props => {
    return <StyledSectionBlock {...props}>{props.children || 'Hello, World!'}</StyledSectionBlock>
 }