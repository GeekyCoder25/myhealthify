import styled from 'styled-components';
import CustomLink from '../../components/link/CustomLink';
import close from '../../assets/sidebarclose.png';
import { useState } from 'react';

const links = [
	{
		id: 1,
		icon: require('../../assets/dashboard.png'),
		url: '/dashboard',
		link: 'Dashboard',
	},
	{
		id: 2,
		icon: require('../../assets/healthcenter.png'),
		url: '/health-center',
		link: 'Health Center',
	},
	{
		id: 3,
		icon: require('../../assets/history.png'),
		url: '/history',
		link: 'History',
	},
	{
		id: 4,
		icon: require('../../assets/subscription.png'),
		url: '/subscription',
		link: 'subscription',
	},
	{
		id: 5,
		icon: require('../../assets/support.png'),
		url: '/support',
		link: 'support',
	},
];

const Sidebar = () => {
	const [sideBarOpen, setsideBarOpen] = useState(true);
	const [width, setWidth] = useState('350px');
	const handleSidebar = () => {
		sideBarOpen ? setWidth('0') : setWidth('350px');
		sideBarOpen ? setsideBarOpen(false) : setsideBarOpen(true);
	};
	return (
		<Wrapper
			style={{ width: width, overflow: sideBarOpen ? 'visible' : 'hidden' }}
		>
			{links.map(links => {
				const {
					id,
					icon,
					url,
					link,
					dropdownClose,
					dropdownOpen,
					dropdownLink,
				} = links;

				return (
					<CustomLink
						key={id}
						link={link}
						icon={icon}
						href={url}
						dropdownClose={dropdownClose}
						dropdownOpen={dropdownOpen}
						dropdownLink={dropdownLink}
					/>
				);
			})}
			<img
				src={close}
				alt=""
				style={{ right: sideBarOpen ? '-20px' : '0' }}
				onClick={handleSidebar}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding: 3rem 0 3rem 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	border-right: solid 2px #d9ddea;
	position: relative;
	> img {
		position: absolute;
		top: 50%;
		cursor: pointer;
		width: 40px;
	}
`;

export default Sidebar;
