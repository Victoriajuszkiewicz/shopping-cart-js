import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import { Cart } from "./pages/Cart.js";
import { Shop } from "./pages/Shop.js";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
	const [allBooks, setAllBooks] = useState([]);

	useEffect(() => {
		getBooks();
	}, []);

	const getDefaultCart = () => {
		let cart = {};
		for (let i = 0; i < allBooks.length; i++) {
			cart[i] = 0;
		}
		return cart;
	};
	const [cartItems, setCartItems] = useState([]);

	async function getBooks() {
		try {
			let response = await fetch("books.json");
			if (response.ok) {
				let data = await response.json();
				setAllBooks(data.slice(0, 20));
			} else {
				console.log(`Server error: ${response.status} ${response.statusText}`);
			}
		} catch (err) {
			console.log(`Network error: ${err.message}`);
		}
	}
	function addToCart(item) {
		const existingCartItemIndex = cartItems.findIndex(
			(cartItem) => cartItem.id === item.id
		);
		console.log("this is the item passed!!!", item);
		if (existingCartItemIndex >= 0) {
			const newCartItems = [...cartItems];
			newCartItems[existingCartItemIndex].quantity += 1;
			setCartItems(newCartItems);
		} else {
			const newCartItem = {
				id: uuidv4(),
				author: item.author,
				title: item.title,
				price: item.price,
				imageLink: item.imageLink,
				quantity: 1,
			};
			setCartItems([...cartItems, newCartItem]);
		}
	}
	function removeFromCart(id) {
		const itemIndex = cartItems.findIndex((item) => item.id === id);
		if (itemIndex >= 0) {
			const newCartItems = [...cartItems];
			if (newCartItems[itemIndex].quantity > 1) {
				newCartItems[itemIndex].quantity--;
			} else {
				newCartItems.splice(itemIndex, 1);
			}
			setCartItems(newCartItems);
		}
	}

	console.log(cartItems);
	return (
		<div className="App">
			<Router>
				<NavBar />
				<Routes>
					<Route
						path="/"
						element={<Shop allBooks={allBooks} addToCart={addToCart} />}
					/>
					<Route
						path="/cart"
						element={
							<Cart
								cartItems={cartItems}
								removeFromCart={removeFromCart}
								setCartItems={setCartItems}
							/>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
