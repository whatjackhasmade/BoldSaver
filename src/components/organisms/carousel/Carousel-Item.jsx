import React from "react";
import { Link } from "gatsby";

import Heading from "../../atoms/Heading";

import CarouselItemComponent from "./Carousel-Item-Styles";

const CarouselItem = ({
	background = "https://source.unsplash.com/300x500/?paris"
}) => {
	return (
		<CarouselItemComponent background={background} className="carousel__item">
			<Link to="/" className="carousel__item__content">
				<Heading level="3" style="5">
					Heading
				</Heading>
				<Heading className="carousel__item__subheading" level="4" style="6">
					£84/night average
				</Heading>
			</Link>
		</CarouselItemComponent>
	);
};

export default CarouselItem;
