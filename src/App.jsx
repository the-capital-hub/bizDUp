import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./page/AuthPage/AuthPage";
import FundraisingFlow from "./page/Fundraising/Fundraising";
import ApplicationFlow from "./page/ApplicationFlow/ApplicationFlow";

// Startup
import Layout from "./components/Layout/Startup/Layout";
import Dashboard from "./page/Startup/Dashboard/Dashboard";
import Meetings from "./page/Startup/Meetings/Meetings";
import Chats from "./page/Startup/Chats/Chats";
import Support from "./page/Startup/Support/Support";

// Startup Management
import Lead from "./page/StartupManagement/Leads/Leads";
import Explore from "./page/StartupManagement/Explore/Explore";
import TaskManagement from "./page/StartupManagement/TaskManagement/TaskManagement";
import Contracts from "./page/StartupManagement/Contracts/Contract";
import StartupManagement from "./page/StartupManagement/StartupManagement/StartupManagement";
import FormBuilder from "./page/StartupManagement/FormBuilder/FormBuilder";

// Investor
import LayoutInvestor from "./components/Layout/Investor/Layout";
import Advice from "./page/Investor/Advice/Advice";

// Investor Onboarding
import InvestorOnboarding from "./page/InvestorOnboarding/InvestorOnboarding";

const App = () => {
	return (
		<Router>
			<Routes>
				{/* <Route path="/test" element={<Dashboard />} /> */}
				<Route path="/auth" element={<AuthPage mode="signup" />} />
				<Route path="/foundraising" element={<FundraisingFlow />} />
				<Route path="/startup-onboarding" element={<ApplicationFlow />} />

				<Route element={<Layout />}>
					<Route path="/" element={<Dashboard />} />
					<Route path="/startup/dashboard" element={<Dashboard />} />
					<Route path="/startup/meetings" element={<Meetings />} />
					<Route path="/startup/chats" element={<Chats />} />
					<Route path="/startup/support" element={<Support />} />

					{/* Startup Management */}
					<Route path="/startup/lead" element={<Lead />} />
					<Route path="/startup/explore" element={<Explore />} />
					<Route path="/startup/task-management" element={<TaskManagement />} />
					<Route path="/startup/contracts" element={<Contracts />} />
					<Route
						path="/startup/startup-management"
						element={<StartupManagement />}
					/>
					<Route path="/startup/form-builder" element={<FormBuilder />} />
				</Route>

				{/* Investor */}
				<Route path="/investor-onboarding" element={<InvestorOnboarding />} />
				<Route element={<LayoutInvestor />}>
					<Route path="investor/dashboard" element={<Advice />} />
					<Route path="investor/explore" element={<Explore />} />
					<Route path="investor/portfolio" element={<Advice />} />
					<Route path="investor/meetings" element={<Meetings />} />
					<Route path="investor/advice" element={<Advice />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
