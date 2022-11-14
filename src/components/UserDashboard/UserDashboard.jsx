import { useEffect } from 'react';
import { useState } from 'react';
import riseIcon from '../../assets/rise.png';
import fallIcon from '../../assets/fall.png';
import styles from './UserDashboard.module.css';
import AIBot from '../AIBot';
const UserDashboard = ({ userData }) => {
	const [rise, setRise] = useState(true);
	const data = userData[0];
	useEffect(() => {
		data.saved > data.spent ? setRise(true) : setRise(false);
	}, [data]);
	return (
		<section className={styles.userData}>
			<header>
				<div>
					<h1>{data.id}</h1>
					<p>{data.number}</p>
				</div>
				<button>My Plan</button>
			</header>
			<div>
				<div>
					<h2>Account Balance</h2>
					<h3 className={styles.balance}>N{data.balance}</h3>
					<div>
						{rise ? (
							<span className={styles.rise}>
								<img src={riseIcon} alt="icon" />
								{data.saved}%
							</span>
						) : (
							<span className={styles.fall}>
								<img src={fallIcon} alt="icon" />
								{data.spent}
							</span>
						)}
					</div>
				</div>
				<div>
					<h2>Account Balance</h2>
					<h3 className={styles.balance}>N{data.balance}</h3>
					<div>
						{rise ? (
							<span className={styles.rise}>
								<img src={riseIcon} alt="icon" />
								{data.saved}%
							</span>
						) : (
							<span className={styles.fall}>
								<img src={fallIcon} alt="icon" />
								{data.spent}
							</span>
						)}
					</div>
				</div>
				<div>
					<h2>Total Saved</h2>
					<h3 className={styles.balance}>N{data.saved}</h3>
					<div>
						<span className={styles.rise}>
							<img src={riseIcon} alt="icon" />
							{data.saved}%
						</span>
					</div>
				</div>
				<div>
					<h2>Total Spent</h2>
					<h3 className={styles.balance}>N{data.spent}</h3>
					<div>
						<span className={styles.fall}>
							<img src={fallIcon} alt="icon" />
							{data.spent}%
						</span>
					</div>
				</div>
			</div>
			<section>
				<div className={styles.history}>
					<h2>Transaction History</h2>
					<div className={styles.historyDiv}>
						<p>No History</p>
					</div>
				</div>
				<div>
					<h2>Myhealthify AI Doctor</h2>
					<AIBot />
				</div>
			</section>
		</section>
	);
};
export default UserDashboard;
