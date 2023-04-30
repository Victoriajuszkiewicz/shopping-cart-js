import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const NavBar = () => {
	return (
		<div classname="navbar">
			<div classname="links">
				<Link to="/">Shop</Link>
				<Link to="/cart">
					<ShoppingCart size={32} />
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
