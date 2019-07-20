import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { device } from "../particles/MediaQueries";
import { formatMoney } from "../helpers";

import Base from "./Base";

import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

const ProductTemplateWrapper = styled.section`
	margin: 64px 0;

	article {
		max-width: 900px;
	}

	h1 {
		max-width: 900px;
		line-height: 1.35;
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
		flex-direction: column-reverse;
		justify-content: space-between;
		width: 100%;

		@media ${device.sm} {
			flex-direction: row;
		}

		h1,
		h2 {
			margin-top: 0;
		}

		h2 {
			@media ${device.sm} {
				padding-left: 48px;
			}
		}
	}
`;

const ProductTemplate = ({ pageContext }) => {
	const { category, image, price, title, url } = pageContext;

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
						{formatMoney(price)}
					</Heading>
				</header>
				{image && <img src={image} alt={title} />}
				<article>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
						alias inventore error nihil eligendi omnis est similique distinctio
						fuga architecto nam quibusdam nisi facere assumenda, vel odio. A,
						expedita natus?
					</p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
						maxime praesentium possimus adipisci aliquid, nemo laborum illum
						laudantium magnam quam explicabo veniam facere? Earum, velit. Omnis
						tempore accusantium dolorum autem.
					</p>
					<div>
						<Button href={url} target="_blank">
							Claim Product
						</Button>
					</div>
				</article>
			</ProductTemplateWrapper>
		</Base>
	);
};

export default ProductTemplate;
