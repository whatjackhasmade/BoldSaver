import React from "react";

import Hero from "../organisms/hero/Hero";
import Row from "../organisms/row/Row";

const components = {
	hero: Hero,
	row: Row
};

const CreateMarkup = ({ content }) => {
	if (content && content[0]) {
		content = content.filter(block => block.blockName !== null);
		const pageComponents = content.map((component, index) => {
			const Component = components[component.blockName.substr(4)];
			return (
				<Component
					index={index}
					key={`component-${index}`}
					data={component.attrs.data}
				/>
			);
		});
		if (pageComponents) {
			return pageComponents;
		}
	} else {
		return null;
	}
};
