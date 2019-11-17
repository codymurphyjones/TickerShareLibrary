import * as React from 'react';
import { StyledEmailInput, EmailInputProps } from './types'


/**
 * @icon Type
 */
export class EmailInput extends React.Component<EmailInputProps> {
	
	render() {
	let sentValue = () => {
		if(!this.props.sent) {

		return (
		<>
			<input
				name="email" type="textbox"
				style={{
					backgroundColor: "#FFF",
					padding: '10px 10px',
					borderRadius: '5px',
    				borderStyle: 'groove',
					borderColor: '#000',
					width: '60%',
					maxWidth: '600px',
					marginRight: '20px'
				}}
			/> 
			 
			 <input 
			 	style={{
					backgroundColor: "#44b9fc",
					borderRadius: '15px',
					padding: '10px 10px',
    				borderStyle: 'groove',
					borderColor: '#000',
					width: '100%',
					maxWidth: '200px',
				}} 
				value="Get early access" 
				type="submit" 
				/>
		</>
				);
	}

	return (<span style={{fontSize: '35px'}}>Thank you for signing up wth TickerShare</span>)
	
	}
	return (
		
		<StyledEmailInput method="POST" {...this.props}>
			{sentValue()}
		</StyledEmailInput>
	);
	}
};


    