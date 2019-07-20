import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CarouselArrow = ({ className, to, onClick }) => (
	<button
		type="button"
		onClick={onClick}
		className={`button ${className}`}
		aria-label={to}
	>
		{to === "next" ? <FiChevronRight /> : <FiChevronLeft />}
	</button>
);

export default CarouselArrow;
