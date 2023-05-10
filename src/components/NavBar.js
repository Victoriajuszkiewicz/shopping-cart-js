import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useEffect, useState } from "react";
import Logo from "..//img/logo.png";
import "./NavBar.css";

const NavBar = (props) => {
	const { getProduct, cartItems } = props;

	const EMPTY_FORM = {};
	const [formBook, setFormBook] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let formDetails = formBook;
		getProduct(formDetails.book);
		setFormBook(EMPTY_FORM);
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		let newForm = { ...formBook };
		console.log(newForm);
		newForm[name] = value;
		setFormBook((state) => ({
			...state,
			[name]: value,
		}));
	};
	function countTotalItemsQuantity(cartItems) {
		let total = cartItems.map((item) => item.quantity);
		console.log("This is SUMMMMM", total.length);
		if (total.length != 0) {
			return total.length;
		} else {
			return 0;
		}
	}

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light " id="mainnavbar">
				<Link className="navbar-brand" to="/">
					<img
						src={Logo}
						style={{ width: 70, paddingLeft: 10, margin: 0 }}
						alt="this is a logo of bookish book store project,Online book store
					Buy books online
					Bookshop online
					Best online book deals
					Affordable books online"
					/>
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<form
						className="form-inline my-2 my-lg-0 input-group mx-auto"
						style={{ maxWidth: "50%" }}
					>
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search for a book..."
							aria-label="Search"
						></input>
						<button
							className="btn btn-light my-2 my-sm-0"
							id="submitbuttononform"
							type="submit"
						>
							Search
						</button>
					</form>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/cart">
								<button className="btn btn-primary" id="buttoncart">
									<ShoppingCart size={20} />
									<span className="badge badge-light">
										{countTotalItemsQuantity(cartItems)}
									</span>
								</button>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
