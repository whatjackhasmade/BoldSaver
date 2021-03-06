import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const CarouselItemComponent = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 8px;
	min-height: 246px;
	padding: 16px 16px 24px;
	position: relative;

	background-color: #c4c4c4;
	background-image: url(${props => (props.background ? props.background : "")});
	background-position: center;
	background-size: cover;
	border-radius: 5px;
	color: #fff;
	text-align: center;

	@media ${device.sm} {
		margin: 0 8px;
	}

	&:before {
		bottom: 0;
		content: "";
		display: block;
		height: 60%;
		left: 0;
		position: absolute;
		width: 100%;

		background-image: linear-gradient(
			-180deg,
			rgba(0, 0, 0, 0) 3%,
			rgb(0, 0, 0) 100%
		);
		border-radius: 0 0 5px 5px;
	}

	> * {
		position: relative;
		z-index: 1;
	}

	a {
		text-decoration: none;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0 auto 8px;
		text-transform: initial;
	}

	.carousel__item__content {
		margin-top: auto;

		&:active,
		&:focus,
		&:hover {
			text-decoration: none;
		}
	}

	.carousel__item__subheading {
		margin-bottom: 0;

		font-weight: 400;
	}
`;

export default CarouselItemComponent;
