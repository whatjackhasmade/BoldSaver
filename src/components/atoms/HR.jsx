import React from "react";
import styled from "styled-components";
import { device } from "../particles/MediaQueries";

const HRComponent = styled.hr`
	height: 0;
	margin: 24px auto;
	width: 100%;

	background: none;
	border: none;
	border-top: 1px solid ${props => props.theme.grey200};
	opacity: ${props => (props.invisible ? `0` : `1`)};

	@media ${device.sm} {
		margin: 32px auto;
	}

	@media ${device.md} {
		margin: 48px auto;
	}

	@media ${device.xl} {
		margin: 64px auto;
	}

	@media ${device.xxl} {
		margin: 80px auto;
	}
`;

const HR = props => {
	return <HRComponent {...props} />;
};

export default HR;
