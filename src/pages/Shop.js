import React from "react";
import Popular from "../components/Popular.js";
import "./Shop.css";

export const Shop = (props) => {
	const { allBooks, addToCart } = props;

	console.log(allBooks);

	return (
		<div className="Shop">
			<Popular allBooks={allBooks} addToCart={addToCart} />
			<div className="container">
				<h1 className="populartext">All Books</h1>
				<div classname="container">
					<div class="row justify-content-center ">
						{allBooks &&
							allBooks.map((book) => {
								return (
									<div class="col-2 col-lg-3 d-flex justify-content-center">
										<div
											className="card h-100"
											style={{ width: "13rem" }}
											key={book.id}
										>
											<img
												className="card-img-top"
												alt="Card image cap book image"
												src={book.imageLink}
											></img>
											<div className="card-body">
												<p className="card-text">{book.author}</p>
												<h2 className="card-title">{book.title}</h2>
												<p>€{book.price}</p>
												<button
													className="addtocartbut"
													onClick={(e) => addToCart(book)}
												>
													Add to cart
												</button>
											</div>
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
