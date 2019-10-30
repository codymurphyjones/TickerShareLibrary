import * as React from 'react';
// src/hello-world.styled.ts
import styled from 'styled-components';
 
 export interface TextStyleBlockProps {
	/** @name CSS Class @ignore */ className?: string;
	/** @name Font Size @default 18px */ size?: string;
	/** @name Text Align @default Left */ align?: TextStyleBlockAlign;
	/** @name Color @default #000000 */ color?: string;
	/** @name Uppercase @default false */ uppercase?: boolean;
	/** @name Bold @default false */ bold?: boolean;
	/** @name Font Family @default Times New Roman */ font?: string;
	/** @name margin */ margin?: string;
	children?: React.ReactNode;
}


export enum TextStyleBlockAlign {
	Left = 'left',
	Middle = 'center',
	Right = 'right'
}



export const StyledTextStyleBlock = styled.div<TextStyleBlockProps>`
	font-family: ${props => props.font || 'inherit'};
	color: ${(props: TextStyleBlockProps) => props.color || 'inherit'};
	line-height: 1.5;

	font-size: ${props => props.size || '18px'}
	margin: ${props => props.margin || '0px'}
	
	${props => {
		switch (props.align) {
			case TextStyleBlockAlign.Left:
			default:
				return 'text-align: left;'
			case TextStyleBlockAlign.Middle:
				return 'text-align: center;'
			case TextStyleBlockAlign.Right:
				return 'text-align: right;'
		}
	}};
	
	${props =>
		props.margin
			? `margin: ${props.margin};`
			: ''};
			
			
	${props =>
		props.bold
			? `font-weight: bold;`
			: ''};

	${props =>
		props.uppercase
			? `letter-spacing: 1px;
				text-transform: uppercase;`
			: ''};
`;

