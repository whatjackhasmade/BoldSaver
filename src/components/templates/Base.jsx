import React from "react";
import Helmet from "react-helmet";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "normalize.css/normalize.css";

import config from "../../../data/SiteConfig";

import { device } from "../particles/MediaQueries";
import { ThemeDefault } from "../particles/ThemeDefault";
import Fonts from "../particles/Fonts";
// import SEO from "../particles/SEO";

import Footer from "../organisms/footer/Footer";
import Header from "../organisms/header/Header";

if (typeof window !== "undefined") {
	// Make scroll behavior of internal links smooth
	// eslint-disable-next-line global-require
	require("smooth-scroll")('a[href*="#"]');
}

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Poppins';
		src: local('Poppins Regular'), local('Poppins-Regular'),
			url(${Fonts.PoppinsRegularWOFF2}) format('woff2'), /* Super Modern Browsers */
			url(${Fonts.PoppinsRegularWOFF}) format('woff'); /* Pretty Modern Browsers */
		font-style: normal;
		font-weight: normal;
	}

		@font-face {
		font-family: 'Poppins';
		src: local('Poppins Bold'), local('Poppins-Bold'),
			url(${Fonts.PoppinsBoldWOFF2}) format('woff2'), /* Super Modern Browsers */
			url(${Fonts.PoppinsBoldWOFF}) format('woff'); /* Pretty Modern Browsers */
		font-style: normal;
		font-weight: 700;
	}

	html {
		box-sizing: border-box;
		overflow-y: scroll;

		font-family: Arial, Helvetica, sans-serif;
		font-size: 62.5%;
		/* BETTER FONT SMOOTHING - https://gist.github.com/hsleonis/55712b0eafc9b25f1944 */
		font-variant-ligatures: none;
		-webkit-font-variant-ligatures: none;
		text-rendering: optimizeLegibility;
		-moz-osx-font-smoothing: grayscale;
		font-smoothing: antialiased;
		-webkit-font-smoothing: antialiased;
		text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;

		@media ${device.MXsm} {
			&.scroll--fixed {
				overflow: hidden;
			}
		}
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	::-webkit-scrollbar
	{
		width: 10px;
		background-color: #f2f4f8;
	}

	::-webkit-scrollbar-thumb
	{
		background-color: #141213;
		border: 2px solid #262626;
	}

	a {
		color: inherit;
		text-decoration: none;

		&:active,
		&:focus,
		&:hover {
			text-decoration: underline;
		}
	}

	body {
		overflow-x: hidden;
		scroll-behavior: smooth;

		background: ${props => props.theme.white};
		color: ${props => props.theme.black};
		font-size: 1.6rem;
		line-height: 1.5;
	}

	main {
		flex: 1;
		margin: 0 auto;
		max-width: 1506px;
		padding: 0 15px;
		width: 100%;

		@media ${device.xs} {
			padding: 0 30px;
		}

		/* Fix anchor scroll positioning */
		[id]::before {
			display: block;
			content: '';
			margin-top: -4rem;
			height: 4rem;
		}
	}

	.wrapper {
		@supports (display: flex) {
			display: flex;
			flex-direction: column;
			min-height: 100vh;
		}
	}

	/* Common base styles for the site */
	img, svg, video {
		max-width: 100%;
	}

	button,
	input[type="submit"] {
		display: inline-flex;
		padding: 16px 24px;

		background-color: ${props => props.theme.purple};
		border: none;
		box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
		color: ${props => props.theme.white};
		cursor: pointer;
		font-weight: 700;
		line-height: 1;
		outline: none;
		text-decoration: none;
		transition: all 0.15s ease;
		white-space: nowrap;

		&:hover {
			transform: translateY(-1px);
		}

		&:focus,
		&:hover {
			box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
		}
	}


	h1, h2, h3, h4, h5, h6 {
		line-height: 1.25;
		margin: 16px 0;

		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		text-transform: capitalize;
	}

	h1,
	.h1 {
		margin-bottom: 24px;
		margin-top: 24px;

		font-size: 32px;
		font-weight: 700;
		line-height: 1.1;

		@media ${device.xs} {
			font-size: 48px;
		}

		@media ${device.lg} {
			font-size: 72px;
		}
	}

	h2,
	.h2 {
		font-size: 30px;

		@media ${device.lg} {
			font-size: 48px;
		}
	}

	h3,
	.h3 {
		font-size: 24px;

		@media ${device.lg} {
			font-size: 30px;
		}
	}

	h4,
	.h4 {
		font-size: 20px;

		@media ${device.lg} {
			font-size: 24px;
		}
	}

	h5,
	.h5 {
		font-size: 18px;

		@media ${device.lg} {
			font-size: 20px;
		}
	}

	h6,
	.h6 {
		font-size: 16px;

		@media ${device.lg} {
			font-size: 18px;
		}
	}

	/* Slick Slider */
	.slick-dots li button {
		box-shadow: none !important;
	}

	.slick-arrow {
		display: none !important;
	}

	.mailtoui-button-copy {
		align-items: center;

		> * {
			top: auto;
		}
	}
`;

const Base = ({ children, context, cta }) => {
	return (
		<ThemeProvider theme={ThemeDefault}>
			<React.Fragment>
				<GlobalStyle />
				<Helmet title={config.siteTitle} />
				{/* <SEO data={context} /> */}
				<div className="wrapper">
					<Header />
					<main>{children}</main>
					<Footer />
				</div>
			</React.Fragment>
		</ThemeProvider>
	);
};

export default Base;
export { GlobalStyle };
