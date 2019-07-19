import React from "react";
import parse from "html-react-parser";

import HeroComponent from "./HeroStyles";
import HeroMediaComponent from "./HeroMediaStyles";

const Hero = ({ children, data }) => {
	if (!data) {
		return (
			<HeroComponent>
				<div className="hero__wrapper">
					<div className="hero__contents">{children}</div>
				</div>
			</HeroComponent>
		);
	}

	const { background_colour, content, media, overlay } = data;

	const background = background_colour ? background_colour : `#0652DD`;

	const overlayBoolean = overlay === "1";

	return (
		<HeroComponent background={background} overlay={overlayBoolean}>
			<div className="hero__wrapper">
				{content ? (
					<div className="hero__contents">{parse(content)}</div>
				) : (
					<div className="hero__contents">{children}</div>
				)}
				{media && <HeroMedia media={media.full} overlay={overlayBoolean} />}
			</div>
		</HeroComponent>
	);
};

const HeroMedia = ({ media, overlay }) => {
	return (
		<HeroMediaComponent overlay={overlay}>
			<img src={media} alt="" />
		</HeroMediaComponent>
	);
};

export default Hero;
