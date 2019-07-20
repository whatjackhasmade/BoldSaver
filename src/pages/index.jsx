import React from "react";

import PhotographMan from "./hero-man.jpg";

import Heading from "../components/atoms/Heading";
import HR from "../components/atoms/HR";

import Hero from "../components/organisms/hero/Hero";

import Base from "../components/templates/Base";

import Music from "./parts/Music";
import Tech from "./parts/Tech";
import Travel from "./parts/Travel";

const Index = () => {
	return (
		<Base>
			<Hero background={PhotographMan}>
				<Heading level="1" visual="2">
					Bold Bargains, Saving You Money
				</Heading>
				<p>
					The primary aim of the project is to conceptualise, design and then
					develop an online deal aggregator website, implementing modern
					strategic thinking models.
				</p>
			</Hero>
			<HR invisible />
			<Travel />
			<HR />
			<Music />
			<HR />
			<Tech />
		</Base>
	);
};

export default Index;
