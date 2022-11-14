import { useState } from 'react';

import { NavLink } from 'react-router-dom';
import classes from './CustomLink.module.css';

const CustomLink = ({
	href,
	link,
	icon,
	dropdownClose,
	dropdownOpen,
	dropdownLink,
}) => {
	const [active, setActive] = useState(false);
	const [showDropDown, setShowDropDown] = useState(false);

	return (
		<>
			<div className={classes.linkContainer} id={active ? classes.active : ''}>
				<div>
					<img src={icon} alt="" className={classes.icon} width={40} />
					<NavLink
						to={href}
						className={({ isActive }) =>
							setActive(isActive ? classes.active : '')
						}
					>
						{link}
					</NavLink>
				</div>
				<div style={{ cursor: 'pointer' }}>
					<svg
						width="20"
						height="20"
						fill="currentColor"
						className="bi bi-chevron-down"
						viewBox="0 0 16 16"
						onClick={() => {
							setShowDropDown(!showDropDown);
						}}
					>
						<path d={showDropDown ? dropdownOpen : dropdownClose} />
					</svg>
				</div>
			</div>
			{/* {showDropDown && (
				<div className={classes.dropdownLinkContainer}>
					{dropdownLink.map((link, index) => (
						<aside className={classes.dropdownLink} key={index}>
							<img src={link.icon} alt="" className="icon" />
							<Link to={link.url}>{link.link}</Link>
						</aside>
					))}
				</div>
			)} */}
		</>
	);
};

export default CustomLink;
