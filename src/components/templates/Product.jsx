import React from "react";
import { Link } from "gatsby";
import { formatMoney } from "../helpers";

import Base from "./Base";
import ProductTemplateWrapper from "./parts/ProductTemplateWrapper";

import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

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
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam alias
					inventore error nihil eligendi omnis est similique distinctio fuga
					architecto nam quibusdam nisi facere assumenda, vel odio. A, expedita
					natus?
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
			</ProductTemplateWrapper>
		</Base>
	);
};

export default ProductTemplate;
