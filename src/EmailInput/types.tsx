import * as React from 'react';
import styled from 'styled-components';

const { useEffect, useState } = React;


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

export const ShowContent = ({sent, children, textboxPlaceholder}: EmailInputProps) => {
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
						backgroundColor: 'rgb(46,168,252)',
						background: 'linear-gradient(180deg, rgba(46,168,252,1) 0%, rgba(138,239,254,1) 80%)',
						borderRadius: '12px',
						padding: '10px 10px',
						border: 'none',
						width: '100%',
						maxWidth: '200px',
						fontWeight: 'bold'
					}} 
					value={textboxPlaceholder}
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

	//State Values
	const [showButton, setShowButton] = useState(true);

	const isInViewport = function (elem : HTMLElement) {
		var bounding = elem.getBoundingClientRect();
		return (
			bounding.top >= 0 &&
			bounding.left >= 0 &&
			bounding.bottom  <= (window.innerHeight - (window.innerHeight * 0.20) || document.documentElement.clientHeight + (document.documentElement.clientHeight * 0.20)) &&
			bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	};

		
		useEffect( () => {

			/*const isBottom = (el: HTMLElement) => {
				return el.getBoundingClientRect().top <= window.innerHeight;
			  }*/


			const handler = () => {

				const wrappedElement = document.getElementById('signup') as HTMLElement;
				  
				if (isInViewport(wrappedElement)) {
					setShowButton(false);
				}
				else
				{
					setShowButton(true);
				}

			}

		document.addEventListener('scroll', handler);
  
		return () => {
	  	window.removeEventListener('scroll', handler);
		}
  	})



		return (
			<form action="#signup" method="get"
			style={{
				width: '100%',
				visibility: showButton ? 'visible' : 'hidden',
				height: 'auto',
				maxWidth: '150px',
				fontWeight: 'bold',
				position: 'fixed',
				top: '10px',
				right: '4%'
			}} 
			
			>
				 <input 
					 style={{
						backgroundColor: 'rgb(46,168,252)',
						background: 'linear-gradient(180deg, rgba(46,168,252,1) 0%, rgba(138,239,254,1) 80%)',
						borderRadius: '12px',
						padding: '10px 10px',
						border: 'none',
						width: '100%',
						maxWidth: '150px',
						fontWeight: 'bold',
						

					}} 
					value={textboxPlaceholder}
					type="submit" 
				/>
			</form>
		);
}