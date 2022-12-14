import React from 'react';
import classes from './ProfileCard.module.css';
import flag from '../../assets/nigeria.png';

import { Link } from 'react-router-dom';
import PatientImg from './PatientImg';

import Ratings from '../Ratings';
import meet from '../../assets/meet.svg';

const ProfileCard = ({
	time,
	timeImg,
	healthifyID,
	role,
	hospital,
	details,
	ratings,
}) => {
	return (
		<div className={classes.profileCard}>
			<div className={classes.first}>
				<PatientImg />
				<div className={classes.nameContainer}>
					<p>{healthifyID}</p>
					<p style={{ color: '#8C92AB' }}>{role}</p>
					<p style={{ color: '#8C92AB' }}>{hospital}</p>

					<div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
						<img src={timeImg} alt="" style={{ width: '25px' }} />
						<p className={classes.time}>{time}</p>
					</div>

					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<img src={flag} alt="" style={{ width: '35px' }} />
						{details ? (
							<Link to={healthifyID}>{details}</Link>
						) : (
							<Link to={healthifyID} style={{ color: '#EE7F00' }}>
								View Report
							</Link>
						)}
					</div>
				</div>
			</div>

			{ratings ? (
				<div
					className={classes.second}
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Ratings ratings={ratings} />
					<div
						style={{
							display: 'flex',
							gap: '0.5rem',
						}}
					>
						<img src={meet} alt="" />
						<Link
							style={{
								color: '#EE7F00',
								cursor: 'pointer',
								textDecoration: 'none',
							}}
							to="edit"
						>
							Meet now
						</Link>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default ProfileCard;
