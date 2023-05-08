import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Logo from "..//img/logo.png";
import "./NavBar.css";

const NavBar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light ">
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ">
						{/* d-flex justify-content-center mx-auto */}
						<li className="nav-item active ">
							<Link className="nav-link " to="/">
								<img
									src={Logo}
									style={{ width: 80 }}
									alt="this is a logo of bookish book store project,Online book store
									Buy books online
									Bookshop online
									Best online book deals
									Affordable books online"
								/>
							</Link>
						</li>

						<form className="form-inline my-2 my-lg-0">
							<input
								className="form-control mr-sm-2"
								type="search"
								id="inputsearch"
								placeholder="Search for books..."
								aria-label="Search"
							/>
							<button
								className="btn  btn-light"
								id="searchbutton"
								type="submit"
							>
								Search
							</button>
						</form>

						<li>
							<Link className="nav-link" to="/cart">
								<ShoppingCart size={32} />
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
