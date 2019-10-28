import * as React from 'react';
import { ContentProps, StyledContent } from './types'


export const Content: React.StatelessComponent<ContentProps> = (props): JSX.Element => {
	return (
		<StyledContent {...props} >
			{props.children}
		</StyledContent>
	);
};