import React from "react";

export const Cart = (props) => {
	const { cartItems, removeFromCart, setCartItems } = props;

	console.log("this is what you need", cartItems);

	function totalPrice(cartItems = []) {
		let total = 0;
		console.log(total);
		cartItems.map((item) => (total = total + item.quantity * item.price));

		return total;
	}
	const handleAddQuantity = (id) => {
		const newCartItems = [...cartItems];
		const itemIndex = newCartItems.findIndex((item) => item.id === id);
		newCartItems[itemIndex].quantity++;
		setCartItems(newCartItems);
	};

	const handleSubtractQuantity = (id) => {
		const newCartItems = [...cartItems];
		const itemIndex = newCartItems.findIndex((item) => item.id === id);

		if (newCartItems[itemIndex].quantity > 1) {
			newCartItems[itemIndex].quantity--;
			setCartItems(newCartItems);
		} else {
			// Remove the item from the cart
			removeFromCart(id);
		}
	};

	return (
		<div>
			<div>
				{cartItems &&
					cartItems.map((i) => {
						return (
							<div>
								<img src={i.imageLink} alt="this is poster for a book" />
								<h2>{i.title}</h2>
								<p>Author: {i.author}</p>
								<p>Price: €{i.price}</p>
								<p>Quantity:{i.quantity}</p>
								<button onClick={() => handleAddQuantity(i.id)}>+</button>
								<button onClick={() => handleSubtractQuantity(i.id)}>-</button>
								<button onClick={() => removeFromCart(i)}>x</button>
							</div>
						);
					})}
			</div>
			<p>Total:€{totalPrice(cartItems).toFixed(2)} </p>
		</div>
	);
};
