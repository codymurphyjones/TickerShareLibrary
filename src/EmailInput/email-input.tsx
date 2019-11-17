import React from 'react';
import { StyledEmailInput, EmailInputProps, ShowContent } from './types'

/*

https://manage.auth0.com/dashboard/us/tickershare/applications/ULW9Lda9mdm8bWMfcBS8SOUSKUY_QFqn/quickstart

*/

export const EmailInput = (props: EmailInputProps) => {
	return (
		
		<StyledEmailInput method="POST">
				{ShowContent(props)}
		</StyledEmailInput>
	);
}
    