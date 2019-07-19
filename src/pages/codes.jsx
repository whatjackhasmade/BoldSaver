import React from "react";

import Heading from "../components/atoms/Heading";
import HR from "../components/atoms/HR";

import Hero from "../components/organisms/hero/Hero";

import Base from "../components/templates/Base";

const Codes = () => {
	return (
		<Base>
			<Hero background={"PhotographMan"}>
				<Heading level="1" style="2">
					Coupon Codes
				</Heading>
				<p>
					The primary aim of the project is to conceptualise, design and then
					develop an online deal aggregator website, implementing modern
					strategic thinking models.
				</p>
			</Hero>
			<HR />
		</Base>
	);
};

export default Codes;
