import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselArrow from "./Carousel-Arrow";
import CarouselComponent from "./Carousel-Styles";
import CarouselItem from "./Carousel-Item";

const settings = {
	arrows: true,
	prevArrow: <CarouselArrow to="prev" />,
	nextArrow: <CarouselArrow to="next" />,
	centerMode: true,
	centerPadding: "60px",
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				centerPadding: "40px",
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				centerPadding: "30px",
				slidesToShow: 1
			}
		}
	]
};

const Carousel = ({ items = [], type }) => {
	return (
		<CarouselComponent className="carousel">
			<div className="carousel__contents">
				<Slider {...settings}>
					{items.slice(0, 9).map((item, i) => (
						<CarouselItem
							{...item}
							background={item.image ? item.image : ""}
							key={`carousel-item-${i}`}
							type={type}
						/>
					))}
				</Slider>
			</div>
		</CarouselComponent>
	);
};

export default Carousel;
