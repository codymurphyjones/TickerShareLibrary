import * as React from 'react';
import { FooterProps, StyledFooter, StyledFooterSection }  from './types';


export const Footer: React.StatelessComponent<FooterProps> = props => {
    return <StyledFooter {...props}>
                <StyledFooterSection maxWidth="30%" center={true}>Centered</StyledFooterSection>
                <div>Centered</div>
            </StyledFooter>
 }