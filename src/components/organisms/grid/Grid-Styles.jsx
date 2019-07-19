import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const GridComponent = styled.section`
	display: grid;
	grid-template-columns: repeat(12, 1fr);

	@media ${device.sm} {
		display: grid;
	}
`;

const GridItemComponent = styled.div`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	grid-column: span ${props => props.size};
`;

export { GridItemComponent };
export default GridComponent;
