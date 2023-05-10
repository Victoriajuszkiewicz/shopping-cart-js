// <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-lg-evenly ">
// <div
// 	className="d-flex flex-wrap justify-content-md-evenly "
// 	id="navbarNav"
// >
// 	<ul className="navbar-nav">

// 		<li className="nav item">
// 			<Link className="nav-link " to="/">
// 				<img
// 					src={Logo}
// 					style={{ width: 70, padding: 0, margin: 0 }}
// 					alt="this is a logo of bookish book store project,Online book store
// 					Buy books online
// 					Bookshop online
// 					Best online book deals
// 					Affordable books online"
// 				/>
// 			</Link>
// 		</li>

// 		<form className="form-inline" onSubmit={handleSubmit}>
// 			<div className="container">
// 				<div className="row" id="wholeform">
// 					<div class="col-sm">
// 						<input
// 							className="form-control mr-sm-2"
// 							id="inputsearch"
// 							placeholder="Search for books..."
// 							aria-label="Search"
// 							type="text"
// 							name="book"
// 							value={formBook}
// 							onChange={(e) => handleChange(e)}
// 						/>
// 					</div>
// 					<div className="col-sm">
// 						<button
// 							className="btn btn-light my-2 my-sm-0"
// 							id="searchbutton"
// 							type="submit"
// 						>
// 							Search
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</form>

// 		<li className="nav item">
// 			<Link className="nav-link" to="/cart">
// 				<button className="btn btn-primary" id="buttoncart">
// 					<ShoppingCart size={20} />
// 					<span className="badge badge-light">
// 						{countTotalItemsQuantity(cartItems)}
// 					</span>
// 				</button>

// 			</Link>
// 		</li>
// 	</ul>
// </div>
// </nav>

/*
<form className="form-inline my-2 my-lg-0 input-group">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						></input>
						<button
							className="btn btn-outline-success my-2 my-sm-0"
							type="submit"
						>
							Search
						</button>
					</form>
*/

//FIRST NAV BAR I HAD
<nav className="navbar navbar-expand-lg navbar-light bg-light ">
	<div className="d-flex " id="navbarNav">
		<ul className="navbar-nav">
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

			<form
				className="form-inline my-2 my-lg-0 input-group"
				onSubmit={handleSubmit}
			>
				<input
					className="form-control mr-sm-2"
					id="inputsearch"
					placeholder="Search for books..."
					aria-label="Search"
					type="text"
					name="book"
					value={formBook}
					onChange={(e) => handleChange(e)}
				/>

				<button
					className="btn btn-outline-success my-2 my-sm-0"
					id="searchbutton"
					type="submit"
				>
					Search
				</button>
			</form>

			<li className="nav item">
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
</nav>;
