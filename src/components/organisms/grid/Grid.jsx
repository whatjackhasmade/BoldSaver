import React from "react";
import parse from "html-react-parser";

import GridComponent from "./Grid-Styles";
import { GridItemComponent } from "./Grid-Styles";

const HTMLString = `<p>HTML String</p>`;

const Grid = () => {
	return (
		<GridComponent>
			{[...Array(10)].map((x, i) => (
				<GridItem html={HTMLString} key={`grid-item-${i}`} size={i} />
			))}
		</GridComponent>
	);
};

const GridItem = ({ html, size }) => {
	return <GridItemComponent size={size}>{parse(html)}</GridItemComponent>;
};

export default Grid;
