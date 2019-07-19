import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const FooterComponent = styled.footer`
	margin-top: 80px;
	position: relative;
	z-index: 10;

	background: ${props => props.theme.grey900};
	color: ${props => props.theme.white};

	a {
		color: ${props => props.theme.white};
		font-weight: 400;
		text-decoration: none;
		transition: 0.2s all ease;

		&:active,
		&:focus,
		&:hover {
			color: ${props => props.theme.grey400};
		}

		svg {
			margin-right: 8px;
		}
	}

	nav {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	svg {
		fill: ${props => props.theme.white};
		width: 24px;

		transition: 0.2s all ease;

		&:active,
		&:focus,
		&:hover {
			fill: ${props => props.theme.grey400};
		}
	}

	.footer__contents {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 1506px;
		padding: 30px 15px;
		width: 100%;

		@media ${device.xs} {
			padding: 30px;
		}

		@media ${device.md} {
			padding: 90px 30px;
		}

		& > * {
			width: 100%;
		}
	}

	.footer__info {
		align-items: flex-start;
		display: flex;

		p {
			margin: 0;
			max-width: 80ch;
		}
	}

	.footer__navigation {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		margin: 0 auto;

		a {
			+ a {
				margin-top: 8px;
			}
		}
	}

	.footer__policies {
		justify-content: flex-start;
		margin-top: 32px;

		> * {
			+ * {
				margin-left: 16px;
			}
		}
	}

	.footer__social {
		justify-content: flex-start;
		width: 100%;

		font-size: 0px;

		@media ${device.md} {
			justify-content: center;
			margin-top: 0;
			width: auto;
		}

		a {
			display: block;

			+ a {
				margin-left: 8px;
			}
		}

		svg {
			width: 24px;
		}
	}
`;

export default FooterComponent;
