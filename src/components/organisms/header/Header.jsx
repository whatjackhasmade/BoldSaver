import React, { useState } from "react";
import { Link } from "gatsby";
import { FiMenu, FiX } from "react-icons/fi";

import Logo from "../../../assets/images/logo/logo.svg";

import Search from "./Search";

import HeaderComponent from "./HeaderStyles";

const disableScroll = action => {
	const bodyElement = document.querySelector(`html`);
	const mq = window.matchMedia(`(max-width: 992px)`);
	if (mq.matches) {
		if (bodyElement) {
			if (action === "remove") {
				bodyElement.classList.remove(`scroll--fixed`);
			} else {
				bodyElement.classList.toggle(`scroll--fixed`);
			}
		}
	}
};

const Header = () => {
	const menuItems = [
		{
			title: "Tech",
			url: "/category/tech"
		},
		{
			title: "Getaways",
			url: "/category/travel"
		},
		{
			title: "Music Events",
			url: "/category/music"
		},
		{
			title: "Games",
			url: "/category/games"
		},
		{
			title: "Bold Blogs",
			url: "/posts"
		}
	];
	const [menuOpen, toggleMenu] = useState(false);

	return (
		<HeaderComponent>
			<div
				className={
					menuOpen
						? `header__contents header__contents--show`
						: `header__contents`
				}
			>
				<Link
					to="/"
					onClick={() => {
						disableScroll("remove");
						toggleMenu(false);
					}}
					className="header__logo"
				>
					<Logo />
				</Link>
				<Search />
				<nav className={menuOpen ? `header__menu--show` : null}>
					{menuItems.map(item => (
						<Link
							key={`header-item-${item.title}`}
							to={item.url}
							onClick={() => {
								disableScroll();
							}}
						>
							{item.title}
						</Link>
					))}
				</nav>
				<button
					onClick={e => {
						e.preventDefault();
						toggleMenu(!menuOpen);
						disableScroll();
					}}
				>
					<span>{menuOpen ? `Close` : `Open`} Menu</span>
					<span> Navigation</span>
					{menuOpen ? <FiX /> : <FiMenu />}
				</button>
			</div>
		</HeaderComponent>
	);
};

export default Header;
