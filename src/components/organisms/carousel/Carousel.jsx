import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselComponent from "./Carousel-Styles";
import CarouselItem from "./Carousel-Item";

const settings = {
	arrows: false,
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 1
};

const Carousel = () => {
	return (
		<CarouselComponent>
			<div className="carousel__contents">
				<Slider {...settings}>
					{[...Array(10)].map((x, i) => (
						<CarouselItem
							background={`https://source.unsplash.com/300x50${i}/?paris`}
							key={`carousel-item-${i}`}
						/>
					))}
				</Slider>
			</div>
		</CarouselComponent>
	);
};

export default Carousel;
