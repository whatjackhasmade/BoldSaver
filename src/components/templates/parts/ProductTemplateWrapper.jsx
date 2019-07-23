import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const ProductTemplateWrapper = styled.article`
	margin: 64px auto;
	max-width: 1100px;

	p:first-of-type {
		margin-top: 0;
	}

	h1 {
		max-width: 900px;
		line-height: 1.35;
	}

	.product__breadcrumbs {
		margin: 0 0 24px;

		color: ${props => props.theme.grey600};
		text-transform: capitalize;

		a {
			margin-left: 4px;
			margin-right: 4px;

			&:first-of-type {
				margin-left: 0;
			}
		}
	}

	.product__header {
		display: flex;
		flex-direction: column-reverse;
		justify-content: space-between;
		width: 100%;

		@media ${device.sm} {
			flex-direction: row;
		}

		h1,
		h2 {
			margin-top: 0;
		}

		h2 {
			@media ${device.sm} {
				padding-left: 48px;
			}
		}
	}

	.gallery {
		display: grid;
		grid-gap: 8px;
		grid-template-columns: repeat(3, 1fr);
		width: 100%;

		button {
			border: none;
			margin: 0;
			height: auto;
			position: absolute;
			width: auto;
			overflow: visible;

			background: transparent;
			box-shadow: none;

			/* inherit font & color from ancestor */
			color: inherit;
			font: inherit;

			/* Normalize 'line-height'. Cannot be changed from 'normal' in Firefox 4+. */
			line-height: normal;

			/* Corrects font smoothing for webkit */
			-webkit-font-smoothing: inherit;
			-moz-osx-font-smoothing: inherit;

			/* Corrects inability to style clickable 'input' types in iOS */
			-webkit-appearance: none;

			/* Remove excess padding and border in Firefox 4+ */
			&::-moz-focus-inner {
				border: 0;
				padding: 0;
			}

			height: 0;
			padding-top: 56.25%;
			position: relative;
			overflow: hidden;
			width: 100%;

			cursor: pointer;

			&:active,
			&:focus,
			&:hover {
				transform: none;
			}
		}

		img {
			height: 100% !important;
			left: 0;
			margin: 0;
			position: absolute;
			top: 0;
			width: 100% !important;

			object-fit: cover;
		}
	}

	.grid {
		margin-top: 48px;
	}
`;

export default ProductTemplateWrapper;
