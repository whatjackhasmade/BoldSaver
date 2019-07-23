import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Carousel from "../../components/organisms/carousel/Carousel";
import Grid from "../../components/organisms/grid/Grid";

const techIntro = [
	{
		html: `<h2>Trending Tech Products We Think You'll Love</h2><p>The primary aim of the project is to conceptualise, design and then develop an online deal aggregator website, implementing modern strategic thinking models, bleeding-edge technologies and innovate upon existing products and their solutions to consumer-focused problems. The final output will be a complete brand guideline, website prototype, website design, and a fully developed website application that displays the latest product and service deals from around the world wide web.</p>`,
		size: {
			xs: 12,
			sm: 12,
			md: 10,
			lg: 8,
			xl: 8
		}
	}
];

export default () => (
	<StaticQuery
		query={graphql`
			query TechDeals {
				allDeal(filter: { category: { eq: "tech" } }) {
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
				<Grid items={techIntro} />
				<Carousel items={data.allDeal.nodes} />
			</>
		)}
	/>
);
