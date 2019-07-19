import React from "react";

import Heading from "../components/atoms/Heading";

import Hero from "../components/organisms/hero/Hero";

import Base from "../components/templates/Base";

const Index = () => {
	return (
		<Base>
			<Hero>
				<Heading level={1} style={2}>
					Bold Bargains, Saving You Money
				</Heading>
				<p>
					The primary aim of the project is to conceptualise, design and then
					develop an online deal aggregator website, implementing modern
					strategic thinking models.
				</p>
			</Hero>
		</Base>
	);
};

export default Index;
