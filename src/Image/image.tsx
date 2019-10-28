import * as React from "react";
import styled from 'styled-components';

export interface ImageProps {
	alt?: string;
	className?: string;
	/** @asset */ src?: string;
	width?: string;
	maxwidth?: string;
	fill?: boolean;
}


const StyledImage = styled.img`
	display: block;
	width: ${(props: ImageProps) => props.width || "100%"};
	max-width: ${(props: ImageProps) => props.maxwidth || "100%"};
	${props =>
		props.maxwidth ? 'max-width:' + props.maxwidth : 'background-color: red;'};
	
	${props =>
		props.fill ? 'object-fit: contain; width:100%': 'background-color: red;'};
	
	margin: auto auto;
`;

export const Image: React.StatelessComponent<ImageProps> = (props): JSX.Element => {
	return (
		<StyledImage alt={props.alt} className={props.className} src={props.src} maxwidth={props.maxwidth}  />
	);
};