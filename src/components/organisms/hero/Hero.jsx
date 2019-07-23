import React from "react";

import HeroComponent from "./HeroStyles";
import HeroMediaComponent from "./HeroMediaStyles";

const Hero = ({ background, children, text }) => {
	return (
		<HeroComponent text={text}>
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
