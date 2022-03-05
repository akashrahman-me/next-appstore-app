import { useState, useEffect } from 'react';

export default function (url, method = 'GET', headers) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [result, setResult] = useState(null);

	useEffect(() => {
		async function req() {
			try {
				setLoading(true);
				setError(false);
				const request = await fetch(url, { method, headers });
				const json = await request.json();
				setLoading(false);
				setResult(json);
			} catch (err) {
				setLoading(false);
				setError(err);
			}
		}
		req();
	}, []);

	return { loading, error, result };
}
