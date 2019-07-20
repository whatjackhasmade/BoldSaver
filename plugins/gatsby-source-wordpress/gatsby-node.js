const fetch = require(`node-fetch`);
const crypto = require(`crypto`);
const path = require(`path`);

// const APIDomain = `https://boldsaver-api.herokuapp.com/`
const APIDomain = `http://localhost:5000/`;

exports.sourceNodes = async (
	{ actions: { createNode }, createNodeId },
	{ plugins, ...options }
) => {
	const techURL = `${APIDomain}?category=tech`;
	const techResponse = await fetch(techURL);
	const techData = await techResponse.json();

	techData.forEach(e => {
		createNode({
			...e,
			id: createNodeId(`deal-${e.id}`),
			parent: null,
			children: [],
			internal: {
				type: "Deal",
				content: JSON.stringify(e),
				contentDigest: crypto
					.createHash("md5")
					.update(JSON.stringify(e))
					.digest("hex")
			}
		});
	});

	const travelURL = `${APIDomain}?category=travel`;
	const travelResponse = await fetch(travelURL);
	const travelData = await travelResponse.json();

	travelData.forEach(e => {
		createNode({
			...e,
			id: createNodeId(`deal-${e.id}`),
			parent: null,
			children: [],
			internal: {
				type: "Deal",
				content: JSON.stringify(e),
				contentDigest: crypto
					.createHash("md5")
					.update(JSON.stringify(e))
					.digest("hex")
			}
		});
	});
};

const createThePages = true;

if (createThePages) {
	exports.createPages = ({ graphql, actions }) => {
		const { createPage } = actions;
		return new Promise((resolve, reject) => {
			graphql(`
				{
					allDeal {
						edges {
							node {
								id
								category
								image
								price
								slug
								title
								url
							}
						}
					}
				}
			`).then(result => {
				let dealCategories = result.data.allDeal.edges.map(
					({ node }) => node.category
				);
				dealCategories = [...new Set(dealCategories)];

				dealCategories.forEach(deal => {
					createPage({
						path: `/category/${deal}`,
						component: path.resolve(`./src/components/templates/Archive.jsx`),
						context: {
							query: deal,
							title: deal,
							type: `category`
						}
					});
				});

				result.data.allDeal.edges.forEach(({ node }) => {
					createPage({
						path: node.slug,
						component: path.resolve(`./src/components/templates/Product.jsx`),
						context: {
							...node
						}
					});
				});
				resolve();
			});
		});
	};
}
