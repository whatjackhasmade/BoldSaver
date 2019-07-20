import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const CarouselComponent = styled.section`
	margin: 40px 0 64px;
	position: relative;

	cursor: grab;

	@media ${device.sm} {
		margin: 80px 0 128px;
	}

	.slick-center {
		margin-left: auto;
		margin-right: auto;
	}

	.slick-dots {
		bottom: -48px;

		@media ${device.sm} {
			bottom: -80px;
		}
	}

	.slick-next {
		right: -64px;
	}

	.slick-prev {
		left: -64px;
	}

	.slick-next,
	.slick-prev {
		height: auto;
		top: calc(50% - 32px);
		width: auto;

		box-shadow: none;
		transform: translate(0, 50%);

		&:before {
			display: none;
		}

		&:active,
		&:focus,
		&:hover {
			box-shadow: none;
			transform: translate(0, 50%);

			svg {
				color: ${props => props.theme.black};
				stroke: ${props => props.theme.black};
			}
		}

		svg {
			height: 32px;
			width: 32px;

			color: ${props => props.theme.grey600};
			stroke: ${props => props.theme.grey600};
			transition: 0.2s all ease;
		}
	}
`;

export default CarouselComponent;
