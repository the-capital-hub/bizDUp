import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./page/AuthPage/AuthPage";
import FundraisingFlow from "./page/Startup/Fundraising/Fundraising";
import ApplicationFlow from "./page/Startup/ApplicationFlow/ApplicationFlow";
import Layout from "./components/Layout/Layout";

// Startup
import Dashboard from "./page/Startup/Dashboard/Dashboard";
import Meetings from "./page/Startup/Meetings/Meetings";
import Chats from "./page/Startup/Chats/Chats";
import Support from "./page/Startup/Support/Support";

// Startup Management
import StartupManagerDashboard from "./page/StartupManagement/Dashboard/Dashboard.jsx";
import Lead from "./page/StartupManagement/Leads/Leads";
import Explore from "./page/StartupManagement/Explore/Explore";
import TaskManagement from "./page/StartupManagement/TaskManagement/TaskManagement";
import Contracts from "./page/StartupManagement/Contracts/Contract";
import StartupManagement from "./page/StartupManagement/StartupManagement/StartupManagement";
import FormBuilder from "./page/StartupManagement/FormBuilder/FormBuilder";

// Investor
import InvestorDashboard from "./page/Investor/Dashboard/Dashboard.jsx";
import Advice from "./page/Investor/Advice/Advice";
import Portfolio from "./page/Investor/Portfolio/Portfolio";
import InvestorManagementDashbord from "./page/InvestorManagement/Dashboard.jsx";

// Investor Onboarding
import InvestorOnboarding from "./page/Investor/InvestorOnboarding/InvestorOnboarding";

// Syndicate
import SyndicateDashboard from "./page/Syndicate/Dashboard.jsx";
import Invite from "./page/Syndicate/Invite.jsx";
import Investors from "./page/Syndicate/Investors.jsx";
import Community from "./page/Syndicate/Community.jsx";

const App = () => {
	return (
		<Router>
			<Routes>
				{/* <Route path="/test" element={<Dashboard />} /> */}
				<Route path="/auth" element={<AuthPage mode="signup" />} />
				<Route path="/foundraising" element={<FundraisingFlow />} />
				<Route path="/startup-onboarding" element={<ApplicationFlow />} />
				<Route path="/investor-onboarding" element={<InvestorOnboarding />} />

				<Route element={<Layout />}>
					{/* startup */}
					<Route path="/" element={<Dashboard />} />
					<Route path="/startup/dashboard" element={<Dashboard />} />
					<Route path="/startup/meetings" element={<Meetings />} />
					<Route path="/startup/chats" element={<Chats />} />
					<Route path="/startup/support" element={<Support />} />

					{/* Startup Management */}
					<Route
						path="/startup-manager/dashboard"
						element={<StartupManagerDashboard />}
					/>
					<Route path="/startup-manager/lead" element={<Lead />} />
					<Route path="/startup-manager/explore" element={<Explore />} />
					<Route
						path="/startup-manager/task-management"
						element={<TaskManagement />}
					/>
					<Route path="/startup-manager/meetings" element={<Meetings />} />
					<Route path="/startup-manager/contracts" element={<Contracts />} />
					<Route
						path="/startup-manager/startup-management"
						element={<StartupManagement />}
					/>
					<Route
						path="/startup-manager/form-builder"
						element={<FormBuilder />}
					/>
					<Route path="/startup-manager/support" element={<Support />} />

					{/* Investor */}
					<Route path="investor/dashboard" element={<InvestorDashboard />} />
					<Route path="investor/explore" element={<Explore />} />
					<Route path="investor/portfolio" element={<Portfolio />} />
					<Route path="investor/advice" element={<Advice />} />
					<Route path="investor/meetings" element={<Meetings />} />

					{/* Investor Management */}
					<Route
						path="investor-manager/dashboard"
						element={<InvestorManagementDashbord />}
					/>
					<Route path="investor-manager/leads" element={<Lead />} />
					<Route path="investor-manager/investors" element={<Investors />} />
					<Route
						path="/investor-manager/task-management"
						element={<TaskManagement />}
					/>
					<Route path="investor-manager/meetings" element={<Meetings />} />
					<Route path="/investor-manager/contracts" element={<Contracts />} />
					<Route
						path="/investor-manager/form-builder"
						element={<FormBuilder />}
					/>
					<Route path="/investor-manager/support" element={<Support />} />

					{/* Syndicate */}
					<Route path="syndicate/dashboard" element={<SyndicateDashboard />} />
					<Route path="syndicate/investors" element={<Investors />} />
					<Route
						path="/syndicate/task-management"
						element={<TaskManagement />}
					/>
					<Route path="syndicate/meetings" element={<Meetings />} />
					<Route path="syndicate/community" element={<Community />} />
					<Route path="syndicate/invite-link" element={<Invite />} />
					<Route path="syndicate/support" element={<Support />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
