import * as React from 'react';
import { StyledTextStyleBlock, TextStyleBlockProps } from './types'

/**
 * @icon Type
 */
export const TextStyleBlock: React.StatelessComponent<TextStyleBlockProps> = (props): JSX.Element => {
	return (
		<StyledTextStyleBlock {...props}>
			{props.children}
		</StyledTextStyleBlock>
	);
};
 
