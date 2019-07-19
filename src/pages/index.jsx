import React from "react";

// import PhotographMan from "../assets/images/photographs/man.jpg";

import Heading from "../components/atoms/Heading";
import HR from "../components/atoms/HR";

import Carousel from "../components/organisms/carousel/Carousel";
import Hero from "../components/organisms/hero/Hero";
import Grid from "../components/organisms/grid/Grid";

import Base from "../components/templates/Base";

const Index = () => {
	return (
		<Base>
			<Hero background={"PhotographMan"}>
				<Heading level="1" style="2">
					Bold Bargains, Saving You Money
				</Heading>
				<p>
					The primary aim of the project is to conceptualise, design and then
					develop an online deal aggregator website, implementing modern
					strategic thinking models.
				</p>
			</Hero>
			<Grid />
			<Carousel />
			<HR />
			<Carousel />
		</Base>
	);
};

export default Index;
