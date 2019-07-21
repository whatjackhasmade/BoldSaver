import React from "react";
import { Link } from "gatsby";

import FooterComponent from "./FooterStyles";

import IconFacebook from "../../../assets/images/icons/brands/facebook.svg";
import IconInstagram from "../../../assets/images/icons/brands/instagram.svg";
import IconTwitter from "../../../assets/images/icons/brands/twitter.svg";

const Footer = () => {
	return (
		<FooterComponent>
			<div className="footer__contents">
				<section className="footer__info">
					<p>
						BoldSaver is an easy way to get huge discounts while discovering fun
						activities in your city. Our daily local deals consist of
						restaurants, spas, hotels, massages, shopping vouchers, things to
						do, and a whole lot more, in hundreds of cities across the world.
						Discover the best gift ideas with BoldSaver: check out great deals
						for Gifts for Him, Gifts for Her, Gifts for Couples, Birthday Gifts
						and Affordable Gifts.
					</p>
					<nav className="footer__navigation">
						<Link to="/">Homepage</Link>
						<Link to="/">Deals</Link>
						<Link to="/posts">Bold Blog Posts</Link>
					</nav>
					<nav className="footer__social">
						<a
							href="https://facebook.com/boldsaver"
							rel="noopener noreferrer"
							target="_blank"
						>
							<IconFacebook /> Facebook
						</a>
						<a
							href="https://instagram.com/boldsaver"
							rel="noopener noreferrer"
							target="_blank"
						>
							<IconInstagram /> Instagram
						</a>
						<a
							href="https://twitter.com/boldsaver"
							rel="noopener noreferrer"
							target="_blank"
						>
							<IconTwitter /> Twitter
						</a>
					</nav>
				</section>
				<nav className="footer__policies">
					<span>
						© 2019 BoldSaver, Website by{" "}
						<a
							href="https://noface.co.uk"
							rel="noopener noreferrer"
							target="_blank"
						>
							NoFace
						</a>
						.
					</span>
					<Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
					<Link to="/privacy-policy">Privacy Policy</Link>
				</nav>
			</div>
		</FooterComponent>
	);
};

export default Footer;
