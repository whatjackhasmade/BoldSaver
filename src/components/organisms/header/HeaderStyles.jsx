import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const HeaderComponent = styled.header`
	position: relative;
	z-index: 11;

	background: ${props => props.theme.black};
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

	a {
		font-size: 20px;

		@media ${device.sm} {
			font-size: 16px;
		}
	}

	button {
		span {
			@media ${device.MXsm} {
				font-weight: 700;
			}
		}

		box-shadow: none;
	}

	a,
	button {
		padding: 8px;
		position: relative;

		color: ${props => props.theme.black};
		font-weight: 500;
		text-decoration: none;
		text-transform: capitalize;
		transition: 0.2s all ease;

		@media ${device.sm} {
			color: ${props => props.theme.white};
		}

		& + a[aria-current="page"],
		&:active,
		&:focus,
		&:hover {
			box-shadow: none;
			color: ${props => props.theme.grey100};
			text-decoration: none;
		}

		+ a {
			margin-left: 0;

			@media ${device.sm} {
				margin-left: 16px;
			}
		}
	}

	button {
		align-items: center;
		display: flex;
		justify-content: center;

		background: none;
		border: none;
		color: ${props => props.theme.white};
		cursor: pointer;
		outline: none;
		transform: translateX(8px);

		&:active,
		&:focus,
		&:hover {
			transform: translateX(8px);
		}

		span + span {
			display: none;
			margin-left: 4px;

			@media ${device.xs} {
				display: inline-block;
			}
		}

		svg {
			margin-left: 8px;
			height: 20px;

			fill: currentColor;
		}

		@media ${device.sm} {
			display: none;
		}
	}

	nav + a {
		display: none;

		color: ${props => props.theme.black};
		font-weight: 900;

		@media ${device.sm} {
			display: block;
		}
	}

	.header__contents {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 1506px;
		padding: 15px 30px 15px 15px;
	}

	.header__contents--show {
		.header__logo {
			svg {
				fill: ${props => props.theme.black};
			}
		}
	}

	.header__logo {
		z-index: 2;

		svg {
			display: block;
			height: 15px;

			@media ${device.xs} {
				height: 20px;
			}

			fill: ${props => props.theme.white};
			transition: 0.2s all ease;
		}
	}

	@media ${device.MXsm} {
		nav {
			display: flex;
			flex-direction: column;
			height: 100%;
			justify-content: center;
			left: 100%;
			padding: 32px;
			position: fixed;
			top: 0;
			width: 100%;

			background: white;
			box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
			transition: 0.4s left ease;

			@media ${device.sm} {
				flex-direction: row;
				position: relative;
			}
		}

		.header__menu--show {
			left: 0;
		}
	}

	.header__menu--show + button {
		color: ${props => props.theme.black};
	}

	.header__search {
		display: none;
		flex-grow: 1;
		margin: 0 24px;
		position: relative;

		@media ${device.md} {
			display: block;
		}

		@media ${device.lg} {
			margin: 0 48px;
		}

		@media ${device.xl} {
			margin: 0 96px;
		}

		input {
			height: 44px;
			flex-grow: 1;
			padding: 8px 16px;
			width: 100%;

			background: ${props => props.theme.white};
			border: none;
			border-radius: 4px;
		}

		&:focus-within {
			.header__search__results {
				display: block;
			}
		}
	}

	.header__search__results {
		display: none;
		left: 0;
		margin: 0;
		position: absolute;
		top: 100%;
		width: 100%;

		background-color: ${props => props.theme.white};
		border: none;
		list-style: none;

		a {
			display: block;
			padding: 8px 16px;

			background-color: ${props => props.theme.white};
			color: ${props => props.theme.black};
			transition: 0.2s background-color ease;

			&:active,
			&:focus,
			&:hover {
				background-color: ${props => props.theme.offWhite};
			}

			+ a {
				margin-left: 0;

				border-top: 1px solid ${props => props.theme.grey100};
			}

			&:last-of-type() {
				border-radius: 0 0 4px 4px;
			}
		}
	}
`;

export default HeaderComponent;
