import React from "react";

const Heading = ({ children, className = "heading", level, style }) => {
	const HeadingComponent = `h${level}`;
	const classList = `${className} h${style}`;
	return <HeadingComponent className={classList}>{children}</HeadingComponent>;
};

export default Heading;
