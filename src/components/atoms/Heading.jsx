import React from "react";

const Heading = ({ children, className = "heading", level, visual }) => {
	const HeadingComponent = `h${level}`;
	const classList = `${className} h${visual}`;
	return <HeadingComponent className={classList}>{children}</HeadingComponent>;
};

export default Heading;
