import React from "react";
import { graphql } from "gatsby";

import PhotographMan from "./hero-man.jpg";

import Heading from "../components/atoms/Heading";
import HR from "../components/atoms/HR";

import Carousel from "../components/organisms/carousel/Carousel";
import Hero from "../components/organisms/hero/Hero";
import Grid from "../components/organisms/grid/Grid";

import Base from "../components/templates/Base";

const getAwayIntro = [
	{
		// content: "Heading",
		html: `<h2>Grab a Getaway</h2><p>The primary aim of the project is to conceptualise, design and then develop an online deal aggregator website, implementing modern strategic thinking models, bleeding-edge technologies and innovate upon existing products and their solutions to consumer-focused problems. The final output will be a complete brand guideline, website prototype, website design, and a fully developed website application that displays the latest product and service deals from around the world wide web.</p>`,
		size: 8
	}
];

const techIntro = [
	{
		// content: "Heading",
		html: `<h2>Trending Tech Products We Think You'll Love</h2><p>The primary aim of the project is to conceptualise, design and then develop an online deal aggregator website, implementing modern strategic thinking models, bleeding-edge technologies and innovate upon existing products and their solutions to consumer-focused problems. The final output will be a complete brand guideline, website prototype, website design, and a fully developed website application that displays the latest product and service deals from around the world wide web.</p>`,
		size: 8
	}
];

export const query = graphql`
	query TechDeals {
		allDeal(filter: { category: { eq: "tech" } }) {
			nodes {
				id
				category
				price
				slug
				title
			}
		}
	}
`;

const Index = ({ data }) => {
	console.log({ data });

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
			<Grid items={getAwayIntro} />
			<Carousel />
			<HR />
			<Grid items={techIntro} />
			<Carousel items={data.allDeal.nodes} />
		</Base>
	);
};

export default Index;
