import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useEffect, useState } from "react";
import Logo from "..//img/logo.png";
import "./NavBar.css";

const NavBar = (props) => {
	const { getProduct } = props;

	const EMPTY_FORM = {
		book: "",
	};
	const [formBook, setFormBook] = useState({ book: "" });

	const handleSubmit = (e) => {
		e.preventDefault();
		let formDetails = formBook;
		getProduct(formDetails.book);
		//console.log(formDetails);
		setFormBook(EMPTY_FORM);
		// navigate("/result");
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

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-lg-evenly ">
				<div
					className="d-flex flex-wrap justify-content-md-evenly "
					id="navbarNav"
				>
					<ul className="navbar-nav">
						{/* d-flex justify-content-center mx-auto */}
						<li className="nav item">
							<Link className="nav-link " to="/">
								<img
									src={Logo}
									style={{ width: 70, padding: 0, margin: 0 }}
									alt="this is a logo of bookish book store project,Online book store
									Buy books online
									Bookshop online
									Best online book deals
									Affordable books online"
								/>
							</Link>
						</li>

						<form className="form-inline" onSubmit={handleSubmit}>
							<div className="container">
								<div className="row" id="wholeform">
									<div class="col-sm">
										<input
											className="form-control mr-sm-2"
											id="inputsearch"
											placeholder="Search for books..."
											aria-label="Search"
											type="text"
											name="book"
											value={formBook.book}
											onChange={(e) => handleChange(e)}
										/>
									</div>
									<div className="col-sm">
										<button
											className="btn btn-light my-2 my-sm-0"
											id="searchbutton"
											type="submit"
										>
											Search
										</button>
									</div>
								</div>
							</div>
						</form>

						<li className="nav item">
							<Link className="nav-link" to="/cart">
								<ShoppingCart
									size={40}
									style={{ paddingTop: 10, marginTop: 2 }}
								/>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
