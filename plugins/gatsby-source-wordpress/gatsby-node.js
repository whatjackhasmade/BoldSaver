const fetch = require(`node-fetch`);
const crypto = require(`crypto`);
const path = require(`path`);

const WordPressDomain = `https://wjhm.noface.app`;

exports.sourceNodes = async (
	{ actions: { createNode }, createNodeId },
	{ plugins, ...options }
) => {
	const pagesURL = `${WordPressDomain}/wp-json/pages/v2/all`;
	const pagesResponse = await fetch(pagesURL);
	const pagesData = await pagesResponse.json();

	pagesData.forEach(e => {
		createNode({
			...e,
			id: createNodeId(`page-${e.id}`),
			parent: null,
			children: [],
			internal: {
				type: "Page",
				content: JSON.stringify(e),
				contentDigest: crypto
					.createHash("md5")
					.update(JSON.stringify(e))
					.digest("hex")
			}
		});
	});
};

const createThePages = false;

if (createThePages) {
	exports.createPages = ({ graphql, actions }) => {
		const { createPage } = actions;
		return new Promise((resolve, reject) => {
			graphql(`
				{
					allPage {
						edges {
							node {
								content {
									blockName
									attrs {
										id
										data {
											background_colour
											content
											heading
											link
											media {
												thumbnail
												medium
												medium_large
												large
												ratio
												featured_xs
												featured_sm
												featured_md
												featured_lg
												featured_xl
												full
											}
											subheading
											testimonials {
												author
												logo
												media {
													thumbnail
													medium
													medium_large
													ratio
													featured_xs
													featured_sm
													featured_md
													full
												}
												role
												testimonial
											}
										}
									}
								}
								id
								imageXS
								imageSM
								imageMD
								imageLG
								imageXL
								imageFull
								slug
								title
								yoast {
									description
									image
									slug
									title
								}
							}
						}
					}
				}
			`).then(result => {
				result.data.allPage.edges.forEach(({ node }) => {
					const slug =
						node.slug === "home" || node.slug === "homepage" ? `/` : node.slug;
					createPage({
						path: slug,
						component: path.resolve(`./src/components/templates/Page.jsx`),
						context: {
							content: node.content,
							id: node.id,
							imageXS: node.imageXS,
							imageSM: node.imageSM,
							imageMD: node.imageMD,
							imageLG: node.imageLG,
							imageXL: node.imageXL,
							imageFull: node.imageFull,
							slug: node.slug,
							title: node.title,
							yoast: node.yoast
						}
					});
				});
				resolve();
			});
		});
	};
}
