export function listingData(a = [], c) {
	let e = [];
	for (let p of a) {
		e = e.concat(p);
		if (p[c]) for (let i of p[c]) e = e.concat(i);
	}
	return e;
}

export const fuc = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export async function request(url, callback) {
	const res = await fetch(url);
	const data = await res.json();
	callback(data);
}

export async function insertPosts(url, state, callback) {
	const formData = new FormData();
	formData.append('table', 'articles');
	formData.append('insert', JSON.stringify(state));
	const response = await fetch(url, {
		method: 'POST',
		body: formData,
	});
	const data = await response.text();
	callback(data);
}
export async function updatePost(url, state, callback) {
	const formData = new FormData();
	formData.append('table', 'articles');
	formData.append('update', JSON.stringify(state));
	const response = await fetch(url, {
		method: 'POST',
		body: formData,
	});
	const data = await response.text();
	callback(data);
}

export function toSeoUrl(url) {
	return url
		.toString() // Convert to string
		.normalize('NFD') // Change diacritics
		.replace(/[\u0300-\u036f]/g, '') // Remove illegal characters
		.replace(/\s+/g, '-') // Change whitespace to dashes
		.toLowerCase() // Change to lowercase
		.replace(/&/g, '-and-') // Replace ampersand
		.replace(/[^a-z0-9\-]/g, '') // Remove anything that is not a letter, number or dash
		.replace(/-+/g, '-') // Remove duplicate dashes
		.replace(/^-*/, '') // Remove starting dashes
		.replace(/-*$/, ''); // Remove trailing dashes
}

export function timeDifference(milliseconds) {
	var msPerMinute = 60 * 1000;
	var msPerHour = msPerMinute * 60;
	var msPerDay = msPerHour * 24;
	var msPerMonth = msPerDay * 30;
	var msPerYear = msPerDay * 365;
	var elapsed = Date.now() - milliseconds;

	if (elapsed < msPerMinute) {
		return Math.round(elapsed / 1000) + ' seconds ago';
	} else if (elapsed < msPerHour) {
		return Math.round(elapsed / msPerMinute) + ' minutes ago';
	} else if (elapsed < msPerDay) {
		return Math.round(elapsed / msPerHour) + ' hours ago';
	} else if (elapsed < msPerMonth) {
		return Math.round(elapsed / msPerDay) + ' days ago';
	} else if (elapsed < msPerYear) {
		return Math.round(elapsed / msPerMonth) + ' months ago';
	} else {
		return Math.round(elapsed / msPerYear) + ' years ago';
	}
}
