import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

import IconFacebook from "../../../assets/images/icons/brands/facebook.svg";
import IconInstagram from "../../../assets/images/icons/brands/instagram.svg";
import IconTwitter from "../../../assets/images/icons/brands/twitter.svg";

import Heading from "../../atoms/Heading";

import FooterComponent from "./FooterStyles";

export default () => (
	<StaticQuery
		query={graphql`
			query AllPost {
				allPost {
					nodes {
						id
						date
						slug
						title
						yoast {
							image
							description
						}
					}
				}
			}
		`}
		render={data => <Footer data={data} />}
	/>
);

const Footer = ({ data }) => {
	return (
		<FooterComponent>
			<div className="footer__contents">
				<section className="footer__info">
					<nav className="footer__navigation">
						<Heading level="3" visual="5">
							BoldSaver
						</Heading>
						<Link to="/category/tech">Tech</Link>
						<Link to="/category/travel">Getaways</Link>
						<Link to="/category/events">Music Events</Link>
						<Link to="/category/games">Games</Link>
						<Link to="/posts">Bold Blogs</Link>
					</nav>
					<nav className="footer__navigation">
						<Heading level="3" visual="5">
							Blog Posts
						</Heading>
						{data.allPost.nodes.map((post, i) => (
							<Link key={post.id} to={`/${post.slug}`}>
								{post.title}
							</Link>
						))}
					</nav>
					<nav className="footer__navigation">
						<Heading level="3" visual="5">
							Discover
						</Heading>
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
