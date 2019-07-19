import React from "react";

import Base from "./Base";

import ACFParser from "../particles/ACFParser";

const PageTemplate = ({ pageContext }) => {
	const { content } = pageContext;

	return (
		<Base context={this.props.pageContext}>
			<ACFParser content={content} />
		</Base>
	);
};

export default PageTemplate;
