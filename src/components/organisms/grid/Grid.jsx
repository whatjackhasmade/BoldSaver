import React from "react";
import parse from "html-react-parser";

import GridComponent from "./Grid-Styles";
import { GridItemComponent } from "./Grid-Styles";

const Grid = ({ align, children, items = [] }) => {
	if (!items.length > 0 && !children) return null;

	if (children) {
		return <GridComponent align={align}>{children}</GridComponent>;
	}

	return (
		<GridComponent align={align}>
			{items.map((item, i) => (
				<GridItem html={item.html} key={`grid-item-${i}`} size={item.size}>
					{item.content}
				</GridItem>
			))}
		</GridComponent>
	);
};

const GridItem = ({ children, html, size }) => {
	return (
		<GridItemComponent size={size}>
			{children ? children : parse(html)}
		</GridItemComponent>
	);
};

export default Grid;
export { GridComponent };
export { GridItem };
