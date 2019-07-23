import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Heading from "../../components/atoms/Heading";

import Carousel from "../../components/organisms/carousel/Carousel";

export default () => (
	<StaticQuery
		query={graphql`
			query GameDeals {
				allGame {
					nodes {
						about_the_game
						header_image
						price_overview {
							currency
							discount_percent
							initial
							final
						}
						screenshots {
							path_full
							path_thumbnail
						}
						short_description
						name
						slug
						title
					}
				}
			}
		`}
		render={data => {
			var allGames = data.allGame.nodes;
			allGames = allGames.map(game => {
				game.image = game.header_image;
				return game;
			});

			return (
				<>
					<Heading level="3">Popular Games of the Week</Heading>
					<Carousel items={allGames} type="game" />
				</>
			);
		}}
	/>
);
