import React from "react";

const search = async (searchTerm) => {
	const res = await fetch(
		`https://serpapi.com/search.json?q=${searchTerm}&api_key=4ea1ea9bec19d28900372607e1b4fc115a267fdc53ff492e7e0b296085b3abb4`
	);

	// throw new Error("WHOOS SOMETHING BROKE");
	const data = await res.json();
	return data;
};

async function SearchResults({ params: { searchTerm } }) {
	const searchResults = await search(searchTerm);
	console.log(searchResults);
	return (
		<div>
			<p className="text-gray-500 text-sm">
				You searched for: {searchTerm}
			</p>

			<ol className="space-y-5 p-5">
				{searchResults.organic_results.map((result) => (
					<li key={result.position} className="list-decimal">
						<p className="font-bold">{result.title}</p>
						<p>{result.snippet}</p>
					</li>
				))}
			</ol>
		</div>
	);
}

export default SearchResults;
