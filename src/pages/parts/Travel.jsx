import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Carousel from "../../components/organisms/carousel/Carousel";
import Hero from "../../components/organisms/hero/Hero";
import Grid from "../../components/organisms/grid/Grid";

const getAwayIntro = [
	{
		// content: "Heading",
		html: `<h2>Grab a Getaway</h2><p>The primary aim of the project is to conceptualise, design and then develop an online deal aggregator website, implementing modern strategic thinking models, bleeding-edge technologies and innovate upon existing products and their solutions to consumer-focused problems. The final output will be a complete brand guideline, website prototype, website design, and a fully developed website application that displays the latest product and service deals from around the world wide web.</p>`,
		size: 8
	}
];

export default () => (
	<StaticQuery
		query={graphql`
			query TravelDeals {
				allDeal(filter: { category: { eq: "travel" } }) {
					nodes {
						id
						category
						image
						price
						slug
						title
					}
				}
			}
		`}
		render={data => (
			<>
				<Grid items={getAwayIntro} />
				<Carousel items={data.allDeal.nodes} />
			</>
		)}
	/>
);