import React from "react";
import { Link } from "gatsby";
import { formatMoney, truncate } from "../../helpers";

import Heading from "../../atoms/Heading";

import CarouselItemComponent from "./Carousel-Item-Styles";

const CarouselItem = ({ background, image, price, slug, title }) => {
	return (
		<CarouselItemComponent background={background} className="carousel__item">
			<Link to={`/${slug}`} className="carousel__item__content">
				<Heading level="3" visual="5">
					{truncate(title)}
				</Heading>
				<Heading className="carousel__item__subheading" level="4" visual="6">
					{formatMoney(price)}
				</Heading>
			</Link>
		</CarouselItemComponent>
	);
};

export default CarouselItem;
