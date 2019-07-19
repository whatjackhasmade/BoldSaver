import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const CarouselComponent = styled.section`
	margin: 80px 0 128px;
	position: relative;

	cursor: grab;

	@media ${device.sm} {
		margin: 80px 0 128px;
	}

	.slick-dots {
		bottom: -80px;
	}
`;

export default CarouselComponent;
