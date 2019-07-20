import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import moment from "moment";

import PhotographMan from "./hero-man.jpg";

import Heading from "../components/atoms/Heading";

import Hero from "../components/organisms/hero/Hero";

import Base from "../components/templates/Base";

const PostsGrid = styled.section`
	display: flex;
	flex-wrap: wrap;

	color: ${props => props.theme.white};

	a {
		text-decoration: none;
		text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
		transition: 0.4s all ease;

		&:active,
		&:focus,
		&:hover {
			text-decoration: none;
			text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

			&::before {
				opacity: 0;
			}

			.duotone {
				img {
					filter: none;
					mix-blend-mode: initial;
				}

				&::before {
					opacity: 0;
				}
			}
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: 0;
	}

	img {
		height: 100%;
		margin-right: 32px;
		width: 100%;

		object-fit: cover;
	}

	p {
		max-width: 640px;

		font-size: 20px;
	}

	.post {
		display: flex;
		flex-direction: row;
		left: 50%;
		min-height: 400px;
		margin-left: -50vw;
		position: relative;
		width: 100vw;

		> * {
			position: relative;
			z-index: 2;
		}

		img,
		.duotone {
			position: absolute;
			z-index: -1;
		}

		&:before {
			bottom: 0;
			content: "";
			display: block;
			height: 100%;
			left: 0;
			position: absolute;
			width: 100%;
			z-index: 1;

			background-image: linear-gradient(
				-90deg,
				rgba(0, 0, 0, 0) 0%,
				rgba(0, 0, 0, 0.4) 100%
			);
			transition: 0.4s all ease;
		}
	}

	.post__content {
		margin: 0 auto;
		max-width: 1506px;
		padding: 64px 30px;
		width: 100%;
	}

	.duotone {
		--base: ${props => props.theme.primary};
		--bg-blend: multiply;
		--blur: 0px;
		--fg-blend: lighten;
		--foreground: #000000;
		--opacity: 1;

		background-color: var(--base);
		display: flex;
		flex: 1 1 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
		width: 100%;

		img {
			filter: grayscale(100%) contrast(1) blur(var(--blur));
			flex: 1 0 100%;
			height: 100%;
			max-width: 100%;
			mix-blend-mode: var(--bg-blend);
			object-fit: cover;
			opacity: var(--opacity);
			position: relative;
			width: 100%;

			transition: 0.4s all ease;
		}

		&::before {
			background-color: var(--foreground);
			bottom: 0;
			content: "";
			height: 100%;
			left: 0;
			mix-blend-mode: var(--fg-blend);
			position: absolute;
			right: 0;
			top: 0;
			width: 100%;
			z-index: 1;

			transition: 0.4s all ease;
		}
	}
`;

export default () => (
	<StaticQuery
		query={graphql`
			query AllPosts {
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
		render={data => (
			<Base>
				<Hero background={PhotographMan}>
					<Heading level="1" visual="2">
						BoldSaver Blog Posts
					</Heading>
					<p>
						The primary aim of the project is to conceptualise, design and then
						develop an online deal aggregator website, implementing modern
						strategic thinking models.
					</p>
				</Hero>
				<PostsGrid>
					{data.allPost.nodes.map((post, i) => (
						<Article key={post.id} i={i} {...post} />
					))}
				</PostsGrid>
			</Base>
		)}
	/>
);

const Article = ({
	date,
	image = `http://unsplash.it/2560/1080?random&gravity=center`,
	slug,
	title,
	yoast
}) => (
	<Link className="post" to={`/post/${slug}`}>
		<div className="duotone">
			<img src={yoast.image ? yoast.image : image} alt={title} />
		</div>
		<div className="post__content">
			<Heading level="2" visual="3">
				{title}
			</Heading>
			<Heading level="3" visual="5">
				{moment(date).format("Do MMMM YYYY")}
			</Heading>
			{yoast.description && <p>{yoast.description}</p>}
		</div>
	</Link>
);
