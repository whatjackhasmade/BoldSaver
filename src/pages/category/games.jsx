import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import { formatMoney } from "../../components/helpers";

import Base from "../../components/templates/Base";

import Heading from "../../components/atoms/Heading";

import { ArchiveTemplateWrapper } from "../../components/templates/Archive";

const spring = {
	type: "spring",
	damping: 40,
	stiffness: 400
};

const GamesCategoryPage = ({ data, pageContext }) => {
	const deals = data.allGame.nodes.sort((a, b) => a.price - b.price);

	return (
		<Base context={pageContext}>
			<ArchiveTemplateWrapper>
				<header className="archive__header">
					<Heading level="1" visual="2">
						Game Deals
					</Heading>
					<Heading level="2" visual="3">
						{deals.length} Deals Found
					</Heading>
				</header>
				<section className="archive__items">
					<AnimatePresence>
						{deals.map((deal, i) => (
							<motion.div
								className="product"
								key={deal.id}
								positionTransition={spring}
								initial={{ opacity: 0, transform: "scale(0.3)" }}
								animate={{ opacity: 1, transform: "scale(1)" }}
								exit={{ opacity: 0, transform: "scale(0)" }}
							>
								<Deal position={i} {...deal} />
							</motion.div>
						))}
					</AnimatePresence>
				</section>
			</ArchiveTemplateWrapper>
		</Base>
	);
};

const Deal = ({
	about_the_game,
	header_image,
	price_overview,
	screenshots,
	short_description,
	name,
	slug,
	title
}) => {
	return (
		<>
			<Link to={`/${slug}`} className="product__image">
				<img
					alt={title}
					src={
						header_image
							? header_image
							: `https://dummyimage.com/300x400.jpg?text=Deal`
					}
				/>
			</Link>
			<Link to={`/${slug}`}>
				<Heading level="3" visual="5">
					{title}
				</Heading>
			</Link>
			{price_overview && price_overview.final ? (
				<div className="product__meta">
					<Heading level="4" visual="6">
						{formatMoney(price_overview.final / 100)}
					</Heading>
				</div>
			) : null}
		</>
	);
};

export const query = graphql`
	query getGames {
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
`;

export default GamesCategoryPage;
