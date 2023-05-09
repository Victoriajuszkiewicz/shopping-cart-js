import React from "react";

const Result = (props) => {
	const { getProduct, allBooks, searchResult } = props;

	return (
		<div>
			Result
			<ul>
				<li>{searchResult}</li>
			</ul>
		</div>
	);
};

export default Result;
