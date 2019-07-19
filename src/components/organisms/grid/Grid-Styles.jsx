import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const GridComponent = styled.section`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
`;

const GridItemComponent = styled.div`
	align-items: center;
	display: flex;
	grid-column: span ${props => props.size};
	justify-content: center;

	background-color: hsl(${props => props.size * 10}, 100%, 50%);
	color: ${props => props.theme.white};
`;

export { GridItemComponent };
export default GridComponent;
