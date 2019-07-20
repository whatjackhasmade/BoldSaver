import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const GridComponent = styled.section`
	align-items: ${props => (props.align ? props.align : "normal")};
	display: grid;
	grid-row-gap: 48px;
	grid-template-columns: repeat(12, 1fr);

	@media ${device.sm} {
		display: grid;
	}

	@media ${device.xl} {
		grid-gap: 64px;
	}
`;

const GridItemComponent = styled.div`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	grid-column: span ${props => (props.size.xs ? props.size.xs : 12)};

	@media ${device.xs} {
		grid-column: span ${props => props.size.xs};
	}

	@media ${device.sm} {
		grid-column: span ${props => props.size.sm};
	}

	@media ${device.md} {
		grid-column: span ${props => props.size.md};
	}

	@media ${device.lg} {
		grid-column: span ${props => props.size.lg};
	}

	@media ${device.xl} {
		grid-column: span ${props => props.size.xl};
	}
`;

export { GridItemComponent };
export default GridComponent;
