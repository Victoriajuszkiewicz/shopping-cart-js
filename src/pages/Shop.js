import React from "react";

export const Shop = (props) => {
	const { allBooks, addToCart } = props;

	console.log(allBooks);

	return (
		<div className="Shop">
			<div className="shopTitle">
				<h1>Bookstore</h1>
				<div>
					{allBooks &&
						allBooks.map((book) => {
							return (
								<div className="card" style={{ width: "10rem" }} key={book.id}>
									<img
										className="card-img-top"
										alt="Card image cap book image"
										src={book.imageLink}
									></img>
									<div className="card-body">
										<p className="card-text">{book.author}</p>
										<h2 className="card-title">{book.title}</h2>
										<p>€{book.price}</p>
										<button onClick={(e) => addToCart(book)}>
											Add to cart
										</button>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};
