import * as React from 'react';
import styled from 'styled-components';


import useStyles from './styles';
import useWindow from '../hooks/usewindow';

const {useState, useEffect} = React;


export interface EmailInputProps {
	/** @name CSS Class @ignore */ textboxPlaceholder?: string;
	/** @name CallToAction @ignore */ CallToAction?: string;
	/** @name Font Size @default 18px */ size?: string;
	/** @name margin */ color?: string;
	/** @name sent */ sent?: boolean;
	/** @name name */ id?: string;
	children?: React.ReactNode;
}

export const StyledEmailInput = styled.form<EmailInputProps>`
padding: 15px 0px`;


/*
Render Function: ShowContent
Determines whether to show the entry form or the thank you text
*/

export const ShowContent = ({sent, children, textboxPlaceholder, CallToAction}: EmailInputProps) => {
	const { windowWidth } = useWindow();

	if(!sent) {
			
		return (
			<>
				{children}
				<br />
				<div style={useStyles.showContentFrame(windowWidth)}>
				<input
					name="email" type="textbox"
					style={useStyles.showContentTextBox()}
					placeholder={textboxPlaceholder}
				/> 
		 
				 <input 
					style={useStyles.showContentSubmit(windowWidth)}
					value={CallToAction}
					type="submit" 
				/>
				
				</div>
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



export const GetEarlyAccessButton = ({textboxPlaceholder}: EmailInputProps) => {

	const [showButton, setShowButton] = useState(true);
	const { windowWidth } = useWindow();

	var isInViewport = function (elem: HTMLElement) {
		var bounding = elem.getBoundingClientRect();
		return (
			bounding.top >= -175 &&
			bounding.left >= 0 &&
			bounding.bottom + 200 <= (window.innerHeight || document.documentElement.clientHeight) &&
			bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	};


	useEffect(() => {
		function handle() {
			const element = document.getElementById("inputsection") as HTMLElement;

			if(isInViewport(element)) {
				setShowButton(false);
			}
			else
			{
				setShowButton(true);
			}
		  
		}
	
		window.addEventListener('scroll', handle);
		// Specify how to clean up after this effect:
		return () => {
			window.removeEventListener('scroll', handle);
		};
	  });
	

	  

		return (
			<div 
			style={useStyles.earlyAccessFrame(showButton, windowWidth)} >
				<a style={useStyles.earlyAccessButton()} 
					href="#signup">
						{textboxPlaceholder}
				</a>
			</div>
		);
}