import React, { useState } from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { device } from "../particles/MediaQueries";

import Base from "./Base";

import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

const ArchiveTemplateWrapper = styled.section`
	margin: 64px 0;

	.archive__filters {
		align-items: flex-start;
		display: flex;
		justify-content: flex-end;
		margin: 32px auto;
		padding: 32px 0;

		border-bottom: 1px solid ${props => props.theme.grey200};
		border-top: 1px solid ${props => props.theme.grey200};

		> * + * {
			margin-left: 32px;
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
		justify-content: space-between;

		h1,
		h2 {
			margin-top: 0;
		}
	}

	.archive__items {
		display: grid;
		grid-gap: 48px;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}

	.product__meta {
		display: flex;

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin: 0;
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
	// const { category, price, title, url } = pageContext;

	const [deals, setDeals] = useState(data.allDeal.nodes);
	const [isFiltered, setFiltered] = useState(false);
	const [maxPrice, setMaxPrice] = useState(100);
	const [minPrice, setMinPrice] = useState(0);

	const filterItems = () => {
		setDeals(
			isFiltered
				? data.allDeal.nodes
				: data.allDeal.nodes.filter((item, i) => i % 2)
		);
		setFiltered(!isFiltered);
	};

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
				<nav className="archive__filters">
					<nav className="archive__filters__min">
						<input
							id="minPrice"
							name="minPrice"
							type="range"
							onChange={e => {
								setMinPrice(e.target.value);
							}}
							value={minPrice}
						/>
						<label for="minPrice">Min Price: £{minPrice}</label>
					</nav>
					<nav className="archive__filters__max">
						<input
							id="maxPrice"
							name="maxPrice"
							type="range"
							onChange={e => {
								setMaxPrice(e.target.value);
							}}
							value={maxPrice}
						/>
						<label for="maxPrice">Max Price: £{maxPrice}</label>
					</nav>
					<Button onClick={filterItems} className="archive__filter">
						Filter
					</Button>
				</nav>
				<section className="archive__items">
					<AnimatePresence>
						{deals.map(deal => (
							<motion.div
								className="deal"
								key={deal.id}
								positionTransition={spring}
								initial={{ opacity: 0, transform: "scale(0.3)" }}
								animate={{ opacity: 1, transform: "scale(1)" }}
								exit={{ opacity: 0, transform: "scale(0)" }}
							>
								<Deal {...deal} />
							</motion.div>
						))}
					</AnimatePresence>
				</section>
			</ArchiveTemplateWrapper>
		</Base>
	);
};

const Deal = ({ category, price, slug, title }) => {
	return (
		<>
			<Link to={`/${slug}`}>
				<Heading level="3" visual="5">
					{title}
				</Heading>
			</Link>
			<div className="product__meta">
				<Heading level="4" visual="6">
					{price}
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
				price
				slug
				title
			}
		}
	}
`;

export default ArchiveTemplate;
