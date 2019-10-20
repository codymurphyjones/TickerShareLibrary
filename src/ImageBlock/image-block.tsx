import * as React from 'react';
import * as Styles from './image-block.styled';
//import * as defaultImg from './default.png'

const imageSrc = require('./default.png')

export interface ImageBlockProps {
    color?: Styles.SectionBlockColors;
    children?: React.ReactNode;
	src?: string;
	width?: string;
	height?: string;
}

export const ImageBlock: React.StatelessComponent<ImageBlockProps> = props => {
    return <Styles.StyledImageBlock color={props.color}><img width={props.width || '100%'} height='100%' src={String(imageSrc)} /></Styles.StyledImageBlock>
 }