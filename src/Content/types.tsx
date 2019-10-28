
import styled from 'styled-components';
 
export interface ContentProps {
	alt?: string;
	className?: string;
	/** @asset */ src?: string;
	size?: string;
	children?: React.ReactNode;
}

export const StyledContent = styled.div<ContentProps>`
	display: block;
	margin: auto auto;
`;