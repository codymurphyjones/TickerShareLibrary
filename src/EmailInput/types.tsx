import * as React from 'react';
import styled from 'styled-components';
import {useSpring, animated } from 'react-spring'
import useStyles from './styles';
import useWindow from '../hooks/usewindow';
//import { Image } from '../Image';

import fetch, {
    Response
} from "node-fetch";

import { 
	IoIosCheckmarkCircleOutline
} from "react-icons/io";

import { AiOutlineLoading } from "react-icons/ai";


const {useState, useEffect } = React;


export interface EmailInputProps {
	/** @name CSS Class @ignore */ textboxPlaceholder?: string;
	/** @name CallToAction @ignore */ CallToAction?: string;
	/** @name Font Size @default 18px */ size?: string;
	/** @name margin */ color?: string;
	/** @name name */ id?: string;
	/** @name actionUrl */action?: string;
	children?: React.ReactNode;
}

export interface EarlyAccessButtonProps {
	/** @name Font Size @default 18px */ textboxPlaceholder?: string;
	/** @name margin */ sent?: boolean;
}

export interface LoadingAnimationProps {
	/** @name loading */ loading?: boolean;
}


export const StyledEmailInput = styled.form<EmailInputProps>`
padding: 15px 0px
position: relative`;

function submitEmail(email:string,callback:()=>void) {
	
	fetch('https://usebasin.com/f/43a0ded73401.json', {
        method: 'post',
        body:    JSON.stringify({email:email}),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    })
    .then((res:Response) => res.json())
    .then(json => { console.log(json); callback()});
}

const AnimatedAiOutlineLoading = animated(AiOutlineLoading);


/*
Render Function: ShowContent
Determines whether to show the entry form or the thank you text
*/


function FetchLoading({loading}: LoadingAnimationProps) {
	const [resetOrbit, setResetOrbit] = useState(false);
	const animationData = {opacity: loading ? 0 : 1};
	
	const props = useSpring(animationData)
	const rotate = useSpring({
			degree: 360, 
			from: {
					degree: 0
				  }, 
			config: 
				  { 
					duration: 5000 
				  },
				  onRest: () => setResetOrbit(state => !state),
					reset: resetOrbit
				});
	
	return (<animated.div style={props}>
				<div style={{display: loading ? 'flex' : 'none', position: 'absolute', height: '100%', width: '100%', top: '0px', left: '0px'}}>
					<div style={useStyles.showLoadingFrame()} >
							<AnimatedAiOutlineLoading 
								style={{
									transform: rotate.degree.interpolate(o => `rotate(${o}deg)`)
								}}
								size="8em" 
							/>
					</div>
				</div>
			</animated.div>
				)
}

export const ShowContent = ({ children, textboxPlaceholder, CallToAction}: EmailInputProps) => {
	const { windowWidth } = useWindow();
	const [formSent, setformSent] = useState(false);
	const [email, setEmail] = useState("");
	
	const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const {value} = e.currentTarget;
        setEmail(value);
    }
	
	const [isLoading, setIsLoading] = useState(false);

	if(!formSent) {
			
		return (
			<>
				{children}
				<br />
				<div style={useStyles.showContentFrame(windowWidth)}>
					<input className="inputbox"
						name="email" type="textbox"
						style={useStyles.showContentTextBox(windowWidth)}
						placeholder={textboxPlaceholder}
						value={email}
						onChange={handleInputChange}
					/> 
		 
					<input 
						style={useStyles.showContentSubmit(windowWidth)}
						value={CallToAction}
						type="submit"
						onClick={(e) => {	
								setIsLoading(true);
								e.preventDefault();
								submitEmail(email,() => { 
										setIsLoading(false);
										setformSent(true);
									}
								);			
							}}
					/>
					<FetchLoading loading={isLoading} />
				</div>
				<GetEarlyAccessButton sent={formSent} textboxPlaceholder="Get early access" />
				
			</>
		);
	}

	return (
		<span style={{fontSize: '18px', color: '#fff'}}>
			<br />
			<button type="submit" onClick={(e) => { e.preventDefault();}} style={useStyles.showContentSubmit(windowWidth)}>
				<IoIosCheckmarkCircleOutline style={{display: "inline-block", verticalAlign: 'middle' }} size="2em" /> 
				<span style={{marginLeft: "5px"}}>Invite Requested</span>
			</button><br />
			<br />
			You will receive an email when your invite is ready
		</span>
	)
}

export const GetEarlyAccessButton = ({sent,textboxPlaceholder}: EarlyAccessButtonProps) => {

	const [showButton, setShowButton] = useState(true);
	const { windowWidth } = useWindow();

	var isInViewport = function (elem: HTMLElement) {
		var bounding = elem.getBoundingClientRect();
		return (
			bounding.top >= -300 &&
			bounding.left >= 0 &&
			bounding.bottom + 200 <= (window.innerHeight || document.documentElement.clientHeight) &&
			bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	};


	useEffect(() => {
		function handle() {
			const element = document.getElementById("inputsection") as HTMLElement;
			

			if(isInViewport(element) || sent) {
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
				<a style={useStyles.earlyAccessButton(windowWidth)} 
					href="#signup">
						{textboxPlaceholder}
				</a>
			</div>
		);
}

