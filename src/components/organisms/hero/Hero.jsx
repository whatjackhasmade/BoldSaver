import React from "react";
import parse from "html-react-parser";

import HeroComponent from "./HeroStyles";
import HeroMediaComponent from "./HeroMediaStyles";

const Hero = ({ background, children }) => {
	return (
		<HeroComponent>
			<div className="hero__wrapper">
				<div className="hero__contents">{children}</div>
			</div>
			{background && <HeroMedia media={background} />}
		</HeroComponent>
	);
};

const HeroMedia = ({ media }) => {
	return (
		<HeroMediaComponent>
			<img src={media} alt="" />
		</HeroMediaComponent>
	);
};

export default Hero;
