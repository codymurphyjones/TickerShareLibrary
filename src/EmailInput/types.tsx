
// src/hello-world.styled.ts
import styled from 'styled-components';

 export interface EmailInputProps {
	/** @name CSS Class @ignore */ textboxPlaceholder?: string;
	/** @name Font Size @default 18px */ size?: string;
	/** @name margin */ color?: string;
	/** @name sent */ sent?: boolean;
	children?: React.ReactNode;
	
}

export const StyledEmailInput = styled.form<EmailInputProps>`
padding: 15px 0px`;


/*

Render Function: ShowContent
Determines whether to show the entry form or the thank you text
*/

export var ShowContent = ({sent, children}: EmailInputProps) => {
	if(!sent) {
		return (
			<>
				{children}
				<br />
				<input
					name="email" type="textbox"
					style={{
						backgroundColor: "#FFF",
						padding: '10px 10px',
						borderRadius: '5px',
						borderStyle: 'solid',
						borderColor: '#000',
						width: '60%',
						maxWidth: '600px',
						marginRight: '20px',
						marginTop: '10px'
					}}
				/> 
		 
				 <input 
					 style={{
						backgroundColor: "#44b9fc",
						borderRadius: '15px',
						padding: '10px 10px',
						borderStyle: 'solid',
						borderColor: '#000',
						width: '100%',
						maxWidth: '200px',
						fontWeight: 'bold'
					}} 
					value="Get early access!" 
					type="submit" 
				/>
			</>
		);
	}

	return (
		<span style={{fontSize: '35px'}}>
			Thank you for signing up wth TickerShare
			<br /><br />
			We will send an email when the account system has been opened up for registrations.
		</span>
	)
}
