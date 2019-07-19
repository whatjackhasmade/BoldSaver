export function autoParagraph(html) {
	return "<p>" + html.split(/\n/).join("</p>\n<p>") + "</p>";
}

export function decodeHTML(html) {
	html = html.replace("amp;", "");
	return html.replace(/&#(\d+);/g, function(match, dec) {
		return String.fromCharCode(dec);
	});
}

export function formatMoney(amount) {
	if (!amount) return null;
	const options = {
		style: "currency",
		currency: "GBP",
		minimumFractionDigits: 2
	};
	// if its a whole, dollar amount, leave off the .00
	if (amount % 100 === 0) options.minimumFractionDigits = 0;
	const formatter = new Intl.NumberFormat("en-UK", options);
	return formatter.format(amount);
}

export function httpTohttps(html) {
	return html.replace("http://", "https://");
}

export function relativePaths(html) {
	return html.replace(`<a href="https://wjhm.noface.app`, `<a href="`);
}

export function removeDimensions(html) {
	html = html.replace(/width="[^"]*"/g, "");
	html = html.replace(/height="[^"]*"/g, "");
	return html;
}

export function removeOrphans(html) {
	return html.replace(/ ([^ ]*)$/, " $1");
}

export function slugTitle(html) {
	html = html.replace("-", " ");
	html = html.toLowerCase().split(" ");
	for (var i = 0; i < html.length; i++) {
		// You do not need to check if i is larger than splitStr length, as your for does that for you
		// Assign it back to the array
		html[i] = html[i].charAt(0).toUpperCase() + html[i].substring(1);
	}
	// Directly return the joined string
	return html.join(" ");
}

export function YouTubeGetID(url) {
	url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
	return url[2] !== undefined ? url[2].split(/[^0-9a-z_]/i)[0] : url[0];
}
