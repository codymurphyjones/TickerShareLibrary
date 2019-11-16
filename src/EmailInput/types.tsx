
// src/hello-world.styled.ts
import styled from 'styled-components';

 export interface EmailInputProps {
	/** @name CSS Class @ignore */ textboxPlaceholder?: string;
	/** @name Font Size @default 18px */ size?: string;
	/** @name margin */ color?: string;
	/** @name sent */ sent?: boolean;
	
}

export const StyledEmailInput = styled.form<EmailInputProps>`
padding: 15px 0px`;

