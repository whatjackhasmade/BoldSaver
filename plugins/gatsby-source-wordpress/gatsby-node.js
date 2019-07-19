const fetch = require(`node-fetch`);
const crypto = require(`crypto`);
const path = require(`path`);

const APIDomain = `https://boldsaver-api.herokuapp.com/`;

exports.sourceNodes = async (
	{ actions: { createNode }, createNodeId },
	{ plugins, ...options }
) => {
	const techURL = `${APIDomain}?type=tech`;
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
};
