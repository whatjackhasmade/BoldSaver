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

const Carousel = ({ items = [] }) => {
	return (
		<CarouselComponent>
			<div className="carousel__contents">
				<Slider {...settings}>
					{items.slice(9).map((item, i) => (
						<CarouselItem
							background={
								item.image
									? item.image
									: `https://source.unsplash.com/300x50${i}/?${
											item.title.split(" ")[0]
									  }`
							}
							key={`carousel-item-${i}`}
							{...item}
						/>
					))}
				</Slider>
			</div>
		</CarouselComponent>
	);
};

export default Carousel;
