import React, { useState } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import FlexSearch from "flexsearch";

export default () => (
	<StaticQuery
		query={graphql`
			query allDeals {
				allDeal {
					nodes {
						id
						category
						image
						price
						slug
						title
					}
				}
			}
		`}
		render={data => {
			const deals = data.allDeal.nodes;
			var index = new FlexSearch({
				preset: "score",
				doc: {
					id: "id",
					field: ["title", "category"]
				}
			});

			index.add(deals);

			const [query, setQuery] = useState("");
			const [results, setResults] = useState([]);

			const handleSubmit = e => {
				e.preventDefault();
				const queryResults = index.search(query);
				setResults(queryResults);
			};

			const inputChange = e => {
				setQuery(e.target.value);
				if (e.target.value.length > 2) {
					const queryResults = index.search(query);
					setResults(queryResults);
				} else {
					setResults([]);
				}
			};

			return (
				<form onSubmit={handleSubmit} className="header__search">
					<input
						autoComplete="new-password"
						name="searchQuery"
						id="searchQuery"
						onChange={inputChange}
						placeholder="What are you looking for?"
						type="search"
					/>
					<nav className="header__search__results">
						{results.map(result => (
							<Link key={result.id} to={`/${result.slug}`}>
								{result.title}
							</Link>
						))}
					</nav>
				</form>
			);
		}}
	/>
);
