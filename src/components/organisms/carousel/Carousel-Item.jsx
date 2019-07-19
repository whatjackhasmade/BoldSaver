import React from "react";
import { Link } from "gatsby";
import { formatMoney } from "../../helpers";

import Heading from "../../atoms/Heading";

import CarouselItemComponent from "./Carousel-Item-Styles";

function truncate(str, len = 40, append) {
	var newLength;
	append = append || ""; //Optional: append a string to str after truncating. Defaults to an empty string if no value is given

	if (append.length > 0) {
		append = " " + append; //Add a space to the beginning of the appended text
	}
	if (str.indexOf(" ") + append.length > len) {
		return str; //if the first word + the appended text is too long, the function returns the original String
	}

	str.length + append.length > len
		? (newLength = len - append.length)
		: (newLength = str.length); // if the length of original string and the appended string is greater than the max length, we need to truncate, otherwise, use the original string

	var tempString = str.substring(0, newLength); //cut the string at the new length
	tempString = tempString.replace(/\s+\S*$/, ""); //find the last space that appears before the substringed text

	if (append.length > 0) {
		tempString = tempString + append;
	}
	return tempString;
}

const CarouselItem = ({ background, price, slug, title }) => {
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
