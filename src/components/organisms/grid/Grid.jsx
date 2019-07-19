import React from "react";

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
	return (
		<GridItemComponent dangerouslySetInnerHTML={{ __html: html }} size={size} />
	);
};

export default Grid;
