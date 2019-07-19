import React, { useEffect } from "react";
import MailtoUI from "mailtoui/dist/mailtoui-min.js";

import FooterComponent from "./FooterStyles";

import IconGithub from "../../../assets/images/icons/brands/github.svg";
import IconLinkedIn from "../../../assets/images/icons/brands/linkedin.svg";
import IconTwitter from "../../../assets/images/icons/brands/twitter.svg";
import IconYouTube from "../../../assets/images/icons/brands/youtube.svg";

function Footer() {
	useEffect(() => {
		if (typeof window !== `undefined`) {
			MailtoUI.run(); // <--- Run MailtoUI manually
		}
	});

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
					<nav className="footer__social">
						<a href="https://twitter.com/whatjackhasmade">
							<IconTwitter /> Twitter
						</a>
						<a href="https://github.com/whatjackhasmade">
							<IconGithub /> Github
						</a>
						<a href="https://linkedin.com/in/whatjackhasmade">
							<IconLinkedIn /> LinkedIn
						</a>
						<a href="https://youtube.com/whatjackhasmade">
							<IconYouTube /> YouTube
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
					<a href="/terms-and-conditions">Terms &amp; Conditions</a>
					<a href="/privacy-policy">Privacy Policy</a>
				</nav>
			</div>
		</FooterComponent>
	);
}

export default Footer;
