const fetch = require(`node-fetch`);
const crypto = require(`crypto`);
const path = require(`path`);

const APIDomain = `https://boldsaver-api.herokuapp.com/?category=`;
// const APIDomain = `http://localhost:5000/?category=`;

const urls = [`${APIDomain}music`, `${APIDomain}tech`, `${APIDomain}travel`];

exports.sourceNodes = async (
	{ actions: { createNode }, createNodeId },
	{ plugins, ...options }
) => {
	let allDeals = await Promise.all(urls.map(url => fetch(url)))
		.then(async resp => await Promise.all(resp.map(r => r.json())))
		.then(result => {
			return result;
		});
	allDeals = Array.prototype.concat.apply([], allDeals);

	const posts = await fetch(`https://wjhm.noface.app/wp-json/posts/v2/all`);
	const allPosts = await posts.json();

	allDeals.forEach(e => {
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

	allPosts.forEach(e => {
		createNode({
			...e,
			id: createNodeId(`post-${e.id}`),
			parent: null,
			children: [],
			internal: {
				type: "Post",
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
					allPost {
						edges {
							node {
								id
								content
								date
								slug
								title
								yoast {
									description
									image
								}
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

				result.data.allPost.edges.forEach(({ node }) => {
					createPage({
						path: `/post/${node.slug}`,
						component: path.resolve(`./src/components/templates/Post.jsx`),
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
