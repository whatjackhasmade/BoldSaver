import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { device } from "../particles/MediaQueries";
import parse from "html-react-parser";

import Base from "./Base";

import Heading from "../atoms/Heading";

const PostTemplateWrapper = styled.article`
	.post__header {
		@media ${device.lg} {
			font-size: 56px;
		}
	}
`;

const PostBanner = styled.section`
	height: 400px;
	left: 50%;
	margin-left: -50vw;
	position: relative;
	width: 100vw;

	background-image: url('${props => props.background}');
	background-position: center;
	background-size: cover;
`;

const Post = ({ pageContext }) => {
	const { content, title, yoast } = pageContext;

	return (
		<Base context={pageContext}>
			<PostBanner background={yoast.image} />
			<PostTemplateWrapper>
				<nav className="post__breadcrumbs">
					<Link to="/">Homepage</Link>/<Link to="/posts">Posts</Link>/
				</nav>
				<Heading level="1" visual="1" className="post__header">
					{title}
				</Heading>
				{parse(content)}
			</PostTemplateWrapper>
		</Base>
	);
};

export default Post;
