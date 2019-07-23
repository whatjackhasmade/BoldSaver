import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { device } from "../particles/MediaQueries";
import { formatMoney } from "../helpers";

import Base from "./Base";

import Heading from "../atoms/Heading";

const ArchiveTemplateWrapper = styled.section`
	margin: 64px 0;

	input[type="range"] {
		cursor: e-resize;
	}

	.archive__filters {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin: 32px auto;
		padding: 32px 0;

		border-bottom: 1px solid ${props => props.theme.grey200};
		border-top: 1px solid ${props => props.theme.grey200};

		@media ${device.sm} {
			flex-direction: row;
			justify-content: flex-end;
		}

		> * + * {
			margin-top: 32px;

			@media ${device.sm} {
				margin-left: 32px;
				margin-top: 0;
			}
		}

		label {
			margin-bottom: 0;
			margin-top: 16px;
		}

		nav {
			align-items: center;
			display: flex;
			flex-direction: column;
		}
	}

	.archive__header {
		margin: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;

		@media ${device.sm} {
			flex-direction: row;
			justify-content: space-between;
		}

		h1,
		h2 {
			margin-top: 0;
		}
	}

	.archive__items {
		display: grid;
		grid-gap: 48px;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	}

	.product {
		&:active,
		&:hover,
		&:focus {
			img {
				transform: scale(1.1);
			}
		}

		a {
			&:active,
			&:hover,
			&:focus {
				text-decoration: none;
			}
		}
	}

	.product__image {
		display: block;
		overflow: hidden;

		img {
			display: block;
			height: 200px;
			width: 100%;

			object-fit: cover;
			transform: scale(1);
			transition: 1s transform ease;
		}
	}

	.product__meta {
		display: flex;

		color: ${props => props.theme.grey500};

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin: 0;

			font-weight: 400;
		}

		> * + * {
			margin-left: 8px;
		}
	}
`;

const spring = {
	type: "spring",
	damping: 40,
	stiffness: 400
};

const ArchiveTemplate = ({ data, pageContext }) => {
	const deals = data.allDeal.nodes.sort((a, b) => a.price - b.price);

	return (
		<Base context={pageContext}>
			<ArchiveTemplateWrapper>
				<header className="archive__header">
					<Heading level="1" visual="2">
						{pageContext.title}
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

const Deal = ({ category, image, position, price, slug, title }) => {
	return (
		<>
			<Link to={`/${slug}`} className="product__image">
				<img
					alt={title}
					src={image ? image : `https://dummyimage.com/300x400.jpg?text=Deal`}
				/>
			</Link>
			<Link to={`/${slug}`}>
				<Heading level="3" visual="5">
					{title}
				</Heading>
			</Link>
			<div className="product__meta">
				<Heading level="4" visual="6">
					{formatMoney(price)}
				</Heading>
				<Link to={`/category/${category}`}>
					<Heading level="5" visual="6">
						{category}
					</Heading>
				</Link>
			</div>
		</>
	);
};

export const query = graphql`
	query Deals($query: String!) {
		allDeal(filter: { category: { eq: $query } }) {
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
`;

export default ArchiveTemplate;
