import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { device } from "../particles/MediaQueries";

import Base from "./Base";

import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

const ProductTemplateWrapper = styled.section`
	margin: 64px 0;

	h1 {
		max-width: 50ch;
	}

	.product__breadcrumbs {
		margin: 0 0 24px;

		color: ${props => props.theme.grey600};
		text-transform: capitalize;

		a {
			margin-left: 4px;
			margin-right: 4px;

			&:first-of-type {
				margin-left: 0;
			}
		}
	}

	.product__header {
		display: flex;
		justify-content: space-between;
		width: 100%;

		h1,
		h2 {
			margin-top: 0;
		}
	}
`;

const ProductTemplate = ({ pageContext }) => {
	const { category, price, title, url } = pageContext;

	return (
		<Base context={pageContext}>
			<ProductTemplateWrapper>
				<nav className="product__breadcrumbs">
					<Link to="/">All</Link>/
					<Link to={`/category/${category}`}>{category}</Link>/
				</nav>
				<header className="product__header">
					<Heading level="1" visual={title.length > 20 ? "3" : "2"}>
						{title}
					</Heading>
					<Heading level="2" visual="1">
						{price}
					</Heading>
				</header>
				<Button href={url}>Claim Product</Button>
			</ProductTemplateWrapper>
		</Base>
	);
};

export default ProductTemplate;
