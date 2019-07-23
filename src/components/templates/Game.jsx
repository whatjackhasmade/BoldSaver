import React, { useState } from "react";
import { Link } from "gatsby";
import { formatMoney } from "../helpers";
import parse from "html-react-parser";
import Carousel, { Modal, ModalGateway } from "react-images";

import Base from "./Base";
import ProductTemplateWrapper from "./parts/ProductTemplateWrapper";

import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

import { GridComponent, GridItem } from "../organisms/grid/Grid";

const GameTemplate = ({ pageContext }) => {
	const {
		about_the_game,
		price_overview,
		screenshots,
		steam_appid,
		title
	} = pageContext;

	console.log(pageContext);

	return (
		<Base context={pageContext}>
			<ProductTemplateWrapper>
				<nav className="product__breadcrumbs">
					<Link to="/">All</Link>/<Link to={`/category/games`}>games</Link>/
				</nav>
				<header className="product__header">
					<div>
						<Heading level="1" visual={title.length > 20 ? "3" : "2"}>
							{title}
						</Heading>
						<Button
							href={`https://store.steampowered.com/app/${steam_appid}`}
							target="_blank"
						>
							Claim Product
						</Button>
					</div>
					{price_overview && (
						<Heading level="2" visual="1">
							{formatMoney(price_overview.final / 100)}
						</Heading>
					)}
				</header>
				<GridComponent className="grid">
					<GridItem
						size={{
							xs: 12,
							sm: 12,
							md: 12,
							lg: 8,
							xl: 8
						}}
					>
						<p>{parse(about_the_game)}</p>
					</GridItem>
					<GridItem
						size={{
							xs: 12,
							sm: 12,
							md: 12,
							lg: 4,
							xl: 4
						}}
					>
						{screenshots && <Gallery images={screenshots} alt={title} />}
					</GridItem>
				</GridComponent>
			</ProductTemplateWrapper>
		</Base>
	);
};

const Gallery = ({ alt, images }) => {
	const [modalState, setModalState] = useState(false);
	const [index, setSelectedIndex] = useState(0);

	const toggleLightbox = index => {
		setModalState(!modalState);
		setSelectedIndex(index);
	};

	const lightboxImages = images.map(image => {
		const src = image.path_full;
		return { src };
	});

	return (
		<>
			<section className="gallery">
				{images.map((image, index) => (
					<button
						onClick={e => {
							e.preventDefault();
							toggleLightbox(index);
						}}
					>
						<img src={image.path_thumbnail} alt={alt} />
					</button>
				))}
			</section>
			<ModalGateway>
				{modalState ? (
					<Modal onClose={() => setModalState(!modalState)}>
						<Carousel currentIndex={index} views={lightboxImages} />
					</Modal>
				) : null}
			</ModalGateway>
		</>
	);
};

export default GameTemplate;
