import React from "react";
import { Link } from "gatsby";

import Heading from "../../atoms/Heading";

import CarouselItemComponent from "./Carousel-Item-Styles";

const CarouselItem = ({
	background = "https://source.unsplash.com/300x500/?paris",
	heading = "heading",
	subheading = "£84/night average"
}) => {
	return (
		<CarouselItemComponent background={background} className="carousel__item">
			<Link to="/" className="carousel__item__content">
				<Heading level="3" visual="5">
					{heading}
				</Heading>
				<Heading className="carousel__item__subheading" level="4" visual="6">
					{subheading}
				</Heading>
			</Link>
		</CarouselItemComponent>
	);
};

export default CarouselItem;
