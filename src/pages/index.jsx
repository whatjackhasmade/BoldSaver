import React from "react";
import { graphql } from "gatsby";

import PhotographMan from "./hero-man.jpg";

import Heading from "../components/atoms/Heading";
import HR from "../components/atoms/HR";

import Carousel from "../components/organisms/carousel/Carousel";
import Hero from "../components/organisms/hero/Hero";
import Grid from "../components/organisms/grid/Grid";

import Base from "../components/templates/Base";

import Tech from "./parts/Tech";
import Travel from "./parts/Travel";

const getAwayIntro = [
	{
		// content: "Heading",
		html: `<h2>Grab a Getaway</h2><p>The primary aim of the project is to conceptualise, design and then develop an online deal aggregator website, implementing modern strategic thinking models, bleeding-edge technologies and innovate upon existing products and their solutions to consumer-focused problems. The final output will be a complete brand guideline, website prototype, website design, and a fully developed website application that displays the latest product and service deals from around the world wide web.</p>`,
		size: 8
	}
];

const Index = () => {
	return (
		<Base>
			<Hero background={PhotographMan}>
				<Heading level="1" visual="2">
					Bold Bargains, Saving You Money
				</Heading>
				<p>
					The primary aim of the project is to conceptualise, design and then
					develop an online deal aggregator website, implementing modern
					strategic thinking models.
				</p>
			</Hero>
			<HR invisible />
			<Grid items={getAwayIntro} />
			<Carousel />
			<HR />
			<Travel />
			<HR />
			<Tech />
		</Base>
	);
};

export default Index;
