import { Route, Routes } from 'react-router-dom';
import './App.css';
import Clinic from './pages/Clinic';
import History from './pages/History';
import ViewDetails from './pages/ViewDetails';
import SplashView from './pages/splash';
import SignIn from './pages/authentication/sign__in';
import SignUp from './pages/authentication/sign__up';
import ViewReport from './pages/ViewReport';
import Subscription from './pages/Subscription';
import HealthCenter from './pages/HealthCenter';
import Support from './pages/Support';
import MyHealthify from './components/MyHealthify';

function App() {
	return (
		<>
			<Routes>
				<Route path="/dashboard" element={<Clinic />} />
				<Route path="/dashboard/:detailsId" element={<ViewDetails />} />
				<Route path="/history" element={<History />}></Route>
				<Route path="/history/:edit" element={<ViewReport />} />
				<Route path="/health-center" element={<HealthCenter />} />
				<Route path="/subscription" element={<Subscription />} />
				<Route path="/support" element={<Support />} />
				<Route path="/" exact element={<SplashView />} />
				<Route path="/" exact element={<MyHealthify />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route
					path="*"
					element={
						<p
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								fontSize: '4rem',
							}}
						>
							no page found here
						</p>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
