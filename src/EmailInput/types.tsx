import * as React from 'react';
import styled from 'styled-components';

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
						borderRadius: '10px',
						borderStyle: 'solid',
						borderColor: '#000',
						width: '60%',
						maxWidth: '500px',
						marginRight: '20px',
						marginTop: '10px',
						fontFamily: 'Helvetica'
					}}
					placeholder={textboxPlaceholder}
				/> 
		 
				 <input 
					 style={{
						backgroundColor: 'rgb(46,168,252)',
						background: 'linear-gradient(180deg, rgba(46,168,252,1) 0%, rgba(138,239,254,1) 80%)',
						borderRadius: '10px',
						padding: '10px 10px',
						border: 'none',
						width: '100%',
						maxWidth: '200px',
						fontWeight: 'bold',
						fontFamily: 'Helvetica'
					}} 
					value={CallToAction}
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



export const GetEarlyAccessButton = ({textboxPlaceholder}: EmailInputProps) => {

	const [showButton, setShowButton] = useState(true);

	var isInViewport = function (elem: HTMLElement) {
		var bounding = elem.getBoundingClientRect();
		return (
			bounding.top >= 0 &&
			bounding.bottom <= (window.innerHeight / 2 || document.documentElement.clientHeight / 2)
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
			style={{
				width: '100%',
				height: 'auto',
				maxWidth: '150px',
				fontWeight: 'bold',
				position: 'fixed',
				top: '10px',
				right: '6%',
				visibility: showButton ? "visible" : "hidden"
			}} 
			
			>
				 <a 
			 		style={{
						backgroundColor: 'rgb(46,168,252)',
						background: 'linear-gradient(180deg, rgba(46,168,252,1) 0%, rgba(138,239,254,1) 80%)',
						borderRadius: '12px',
						padding: '10px 10px',
						border: 'none',
						color: '#000',
						width: '100%',
						maxWidth: '200px',
						marginTop: '25px',
						fontWeight: 'bold',
						display: 'inline-block',
						fontSize: '14px',
						textDecoration: 'none',
						textAlign: 'center',
						fontFamily: 'Helvetica'

					}} 
					href="#signup"
						
				>{textboxPlaceholder}</a>
			</div>
		);
}