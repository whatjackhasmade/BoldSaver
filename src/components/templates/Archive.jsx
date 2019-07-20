import React, { useContext, useState } from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { device } from "../particles/MediaQueries";
import { FiRefreshCw, FiSliders } from "react-icons/fi";
import { formatMoney } from "../helpers";

import Base from "./Base";

import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

const ArchiveTemplateWrapper = styled.section`
	margin: 64px 0;

	input[type="range"] {
		cursor: e-resize;
	}

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

function isFloat(val) {
	val = parseFloat(val);
	if (isNaN(val)) return false;
	return true;
}

const ArchiveTemplate = ({ data, pageContext }) => {
	// const { category, price, title, url } = pageContext;
	const allDeals = data.allDeal.nodes;

	// TODO: Refactor state in favour of context
	const [deals, setDeals] = useState(allDeals);
	const [isFiltered, setFiltered] = useState(false);

	const mostExpensive = allDeals.reduce((p, c) =>
		isFloat(p.price) && p.price > c.price ? p.price : c.price
	);
	const leastExpensive = allDeals.reduce((p, c) =>
		isFloat(p.price) && p.price < c.price ? p.price : c.price
	);
	const [maxPrice, setMaxPrice] = useState(mostExpensive);
	const [minPrice, setMinPrice] = useState(leastExpensive);

	const filterItems = () => {
		setDeals(isFiltered ? allDeals : allDeals.filter((item, i) => i % 2));
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
				<Filters
					mostExpensive={mostExpensive}
					leastExpensive={leastExpensive}
					data={data}
					minPrice={minPrice}
					setMinPrice={setMinPrice}
					maxPrice={maxPrice}
					setMaxPrice={setMaxPrice}
					filterItems={filterItems}
				/>
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

const Filters = ({
	mostExpensive,
	leastExpensive,
	setMinPrice,
	setMaxPrice,
	minPrice,
	maxPrice,
	filterItems
}) => {
	return (
		<nav className="archive__filters">
			<FiSliders />
			<nav className="archive__filters__min">
				<input
					id="minPrice"
					max={mostExpensive}
					min={leastExpensive}
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
					max={mostExpensive}
					min={leastExpensive}
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
				<FiRefreshCw />
			</Button>
		</nav>
	);
};

const Deal = ({ category, position, price, slug, title }) => {
	const size = Math.floor(Math.random() * 89) + 10;

	return (
		<>
			<Link to={`/${slug}`} className="product__image">
				<img
					src={`https://source.unsplash.com/300x5${size}/?paris`}
					alt={title}
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
				price
				slug
				title
			}
		}
	}
`;

export default ArchiveTemplate;
