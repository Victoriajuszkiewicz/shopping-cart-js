import React from "react";
import "./Popular.css";
import { useEffect, useState } from "react";

const Popular = (props) => {
	const { allBooks, addToCart } = props;
	const [popularBooks, setPopularBooks] = useState([]);

	useEffect(() => {
		const filteredBooks = allBooks.filter((book) => book.popularity >= 8);
		setPopularBooks(filteredBooks);
	}, [allBooks]);

	return (
		<div className="container" id="maincontainerpopular">
			<h1 className="populartext">Popular</h1>
			<div className="Popularmain">
				<div className="container">
					<div className="row d-flex justify-content-between">
						{popularBooks &&
							popularBooks.slice(0, 5).map((book) => {
								return (
									<div className="col-2 col-lg-2 d-flex">
										<div className="allcardsinpopular" key={book.id}>
											<img
												alt="Card image cap book image"
												src={book.imageLink}
												style={{ width: 150 }}
											></img>
											<h5 className="populartitle">{book.title}</h5>
											<p className="popularauthor">By {book.author}</p>
											<p className="pricepopular">€{book.price}</p>
											<button
												className="addtocartbut"
												onClick={(e) => addToCart(book)}
											>
												Add to cart
											</button>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Popular;
