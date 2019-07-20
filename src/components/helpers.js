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

export function truncate(str, len = 40, append) {
	var newLength;
	append = append || ""; //Optional: append a string to str after truncating. Defaults to an empty string if no value is given

	if (append.length > 0) {
		append = " " + append; //Add a space to the beginning of the appended text
	}
	if (str.indexOf(" ") + append.length > len) {
		return str; //if the first word + the appended text is too long, the function returns the original String
	}

	str.length + append.length > len
		? (newLength = len - append.length)
		: (newLength = str.length); // if the length of original string and the appended string is greater than the max length, we need to truncate, otherwise, use the original string

	var tempString = str.substring(0, newLength); //cut the string at the new length
	tempString = tempString.replace(/\s+\S*$/, ""); //find the last space that appears before the substringed text

	if (append.length > 0) {
		tempString = tempString + append;
	}
	return tempString;
}

export function YouTubeGetID(url) {
	url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
	return url[2] !== undefined ? url[2].split(/[^0-9a-z_]/i)[0] : url[0];
}
