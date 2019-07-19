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
