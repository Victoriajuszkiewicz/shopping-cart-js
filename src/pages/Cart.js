import React from "react";
import "./Cart.css";

export const Cart = (props) => {
	const { cartItems, removeFromCart, setCartItems } = props;

	console.log("this is what you need", cartItems);

	function totalPrice(cartItems = []) {
		// initialize a variable to keep track of the total price(when there is zero items the total is zero initially)
		let total = 0;
		// log the current value of the total variable to the console
		console.log(total);
		// use the map() method to iterate over each item in the cartItems array
		// and update the total variable by multiplying the item's quantity and price properties
		cartItems.map((item) => (total = total + item.quantity * item.price));
		// return the final value of the total variable
		return total;
	}
	const handleAddQuantity = (id) => {
		// make a copy of the cart items array so we can edit it without mutating the original state
		const newCartItems = [...cartItems];
		// find the index of the item in the newCartItems array that matches the id we passed in
		const itemIndex = newCartItems.findIndex((item) => item.id === id);
		// increment the quantity property of the item at that index by 1
		newCartItems[itemIndex].quantity++;
		// update the state with the newCartItems array, which now includes the updated quantity value
		setCartItems(newCartItems);
	};
	const handleSubtractQuantity = (id) => {
		//makes copy of a cartItems
		const newCartItems = [...cartItems];
		//checks if there is item with this id
		const itemIndex = newCartItems.findIndex((item) => item.id === id);
		// if the quantity of cartItems is bigger than 1 then we can substract
		if (newCartItems[itemIndex].quantity > 1) {
			newCartItems[itemIndex].quantity--;
			//update the state with new quantuty
			setCartItems(newCartItems);
		} else {
			// Remove the item from the cart(when is 1 remove completly)
			removeFromCart(id);
		}
	};

	function shippingPrice(cartItems) {
		if (totalPrice(cartItems).toFixed(2) >= 50) {
			return 0.0;
		} else {
			return 10;
		}
	}

	return (
		<div>
			<div classname="container" id="maincontainerpopular">
				<div class="row">
					<div class="col">
						{cartItems < 1 ? (
							<h2>Your cart is empty. Continue shopping.</h2>
						) : (
							<h2>Your items</h2>
						)}
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
										<button onClick={() => handleSubtractQuantity(i.id)}>
											-
										</button>
										<button onClick={() => removeFromCart(i.id)}>x</button>
									</div>
								);
							})}
					</div>
					<div className="col" id="totalcart">
						<h2>Summary</h2>
						<h3>Products:€{totalPrice(cartItems).toFixed(2)} </h3>
						<h3>Shipping:€{shippingPrice(cartItems)}</h3>
						<h3>
							Total:€
							{(totalPrice(cartItems) + shippingPrice(cartItems)).toFixed(2)}
						</h3>
						<button>Checkout</button>
					</div>
				</div>
			</div>
		</div>
	);
};
