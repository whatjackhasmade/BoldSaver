import React, { useState } from "react";
import { Link } from "gatsby";

import HeaderComponent from "./HeaderStyles";

import Logo from "../../../assets/images/logo/logo.svg";
import IconBars from "../../../assets/images/icons/solid/bars.svg";
import IconTimes from "../../../assets/images/icons/solid/times.svg";

import Search from "./Search";

const Header = () => {
	const [menuOpen, toggleMenu] = useState(false);

	return (
		<HeaderComponent>
			<div className="header__contents">
				<Link to="/" className="header__logo">
					<Logo />
				</Link>
				<Search />
				<nav className={menuOpen ? `header__menu--show` : null}>
					<Link to="/category/music">Music</Link>
					<Link to="/category/travel">Getaways</Link>
					<Link to="/category/events">Events</Link>
					<Link to="/ideas">Gift Ideas</Link>
					<Link to="/category/codes">Discount Codes</Link>
				</nav>
				<button onClick={() => toggleMenu(!menuOpen)}>
					<span>{menuOpen ? `Close` : `Open`} Menu</span>
					<span> Navigation</span>
					{menuOpen ? <IconTimes /> : <IconBars />}
				</button>
			</div>
		</HeaderComponent>
	);
};

export default Header;
