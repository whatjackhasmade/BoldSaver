import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import MailtoUI from "mailtoui/dist/mailtoui-min.js";

import HeaderComponent from "./HeaderStyles";

import Logo from "../../../assets/images/logo/logo.svg";
import IconBars from "../../../assets/images/icons/solid/bars.svg";
import IconTimes from "../../../assets/images/icons/solid/times.svg";

function Header() {
	const [menuOpen, toggleMenu] = useState(false);

	useEffect(() => {
		if (typeof window !== `undefined`) {
			MailtoUI.run(); // <--- Run MailtoUI manually
		}
	});

	return (
		<HeaderComponent>
			<div className="header__contents">
				<Link to="/" className="header__logo">
					<Logo />
				</Link>
				<input
					className="header__search"
					placeholder="What are you looking for?"
					type="search"
				/>
				<nav className={menuOpen ? `header__menu--show` : null}>
					<Link to="/music">Music</Link>
					<Link to="/getaways">Getaways</Link>
					<Link to="/events">Events</Link>
					<Link to="/ideas">Gift Ideas</Link>
					<Link to="/codes">Discount Codes</Link>
				</nav>
				<button onClick={() => toggleMenu(!menuOpen)}>
					<span>{menuOpen ? `Close` : `Open`} Menu</span>
					<span> Navigation</span>
					{menuOpen ? <IconTimes /> : <IconBars />}
				</button>
			</div>
		</HeaderComponent>
	);
}

export default Header;
