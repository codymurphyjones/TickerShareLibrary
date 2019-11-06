import * as React from "react";
import styled from 'styled-components';

export interface ImageProps {
	alt?: string;
	className?: string;
	/** @asset */ src?: string;
	width?: string;
	maxwidth?: string;
	fillArea?: boolean;
	maxMobile?: boolean;
}


const StyledImage = styled.img<ImageProps>`
	display: block;
	width: ${(props: ImageProps) => props.width || "auto"};
	
	${props =>
		props.maxwidth ? `max-width:`.concat(props.maxwidth) : ``};
		
	@media screen and (max-width: ${props =>  {
		if(props.fillArea)
			return `99999px`;
		
		if(props.maxMobile)
			return `600px`;
		
		return `0px`;
			
	}}) {
			object-fit: contain; 
			width:100%
			max-width: 100%;
			
	}
	
	margin: auto auto;
`;

export const Image: React.StatelessComponent<ImageProps> = (props): JSX.Element => {
	return (
		<StyledImage fillArea={props.fillArea} alt={props.alt} className={props.className} width={props.width} src={props.src} maxwidth={props.maxwidth}  />
	);
};