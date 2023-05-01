import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const NavBar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav d-flex justify-content-center mx-auto">
						<li className="nav-item active ">
							<Link className="nav-link " to="/">
								Shop
							</Link>
						</li>
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
