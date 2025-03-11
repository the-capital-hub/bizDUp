import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SidebarMenus from "./Layout/SidebarMenus";

const TestNavigation = () => {
	const [selectedUserType, setSelectedUserType] = useState("startup");
	const [menus, setMenus] = useState([]);
	const navigate = useNavigate();

	const userTypes = [
		{ value: "startup", label: "Startup" },
		{ value: "investor", label: "Investor" },
		{ value: "startup_manager", label: "Startup Manager" },
		{ value: "investor_manager", label: "Investor Manager" },
		{ value: "syndicate", label: "Syndicate" },
		// { value: "admin", label: "Admin" },
	];

	// Special routes not in menus
	const specialRoutes = [
		{ title: "Auth Page", href: "/auth", description: "Authentication Page" },
		{
			title: "Fundraising Flow",
			href: "/foundraising",
			description: "Startup Fundraising Process",
		},
		{
			title: "Startup Onboarding",
			href: "/startup-onboarding",
			description: "Application Flow",
		},
		{
			title: "Investor Onboarding",
			href: "/investor-onboarding",
			description: "Investor Registration",
		},
		{
			title: "User Onboarding Combined",
			href: "/user-onboarding",
			description: "Combined User Onboarding",
		},
	];

	useEffect(() => {
		// Update menus when user type changes
		setMenus(SidebarMenus(selectedUserType));
	}, [selectedUserType]);

	const handleUserTypeChange = (e) => {
		setSelectedUserType(e.target.value);
	};

	const navigateToPage = (href) => {
		navigate(href);
	};

	// Set active user type in local storage for sidebar to use
	const setActiveUserAndNavigate = (userType, href) => {
		localStorage.setItem("activeUserType", userType);
		navigate(href);
	};

	return (
		<div className="flex flex-col gap-6 p-6 w-full h-full bg-white rounded-lg shadow-sm">
			<h1 className="px-4 text-2xl font-bold text-indigo-950">
				BizDateUp Developer Testing Dashboard
			</h1>

			{/* User Type Selector */}
			<div className="bg-gray-50 p-4 rounded-lg">
				<h2 className="text-lg font-semibold text-indigo-900 mb-3">
					Select User Type
				</h2>
				<div className="flex gap-4 items-center">
					<label htmlFor="userType" className="text-gray-700">
						User Type:
					</label>
					<select
						id="userType"
						value={selectedUserType}
						onChange={handleUserTypeChange}
						className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
					>
						{userTypes.map((type) => (
							<option key={type.value} value={type.value}>
								{type.label}
							</option>
						))}
					</select>
				</div>
				<div className="mt-4">
					<button
						onClick={() =>
							localStorage.setItem("activeUserType", selectedUserType)
						}
						className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
					>
						Set Selected User Type as Active
					</button>
					<p className="text-xs text-gray-500 mt-1">
						This will be used by the sidebar to display the correct menu
					</p>
				</div>
			</div>

			{/* Special Routes */}
			<div className="bg-gray-50 p-4 rounded-lg">
				<h2 className="text-lg font-semibold text-indigo-900 mb-3">
					Special Routes
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{specialRoutes.map((route, index) => (
						<div
							key={index}
							onClick={() => navigateToPage(route.href)}
							className="flex items-center gap-3 p-3 bg-white hover:bg-indigo-50 border border-gray-200 rounded-lg cursor-pointer transition-colors"
						>
							<div className="p-2 bg-indigo-100 rounded-md text-indigo-700">
								<span className="text-lg font-bold">{index + 1}</span>
							</div>
							<div>
								<p className="font-medium text-gray-800">{route.title}</p>
								<p className="text-xs text-gray-500">{route.href}</p>
								<p className="text-xs text-gray-400">{route.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Navigation Buttons Based on User Type */}
			<div className="bg-gray-50 p-4 rounded-lg">
				<h2 className="text-lg font-semibold text-indigo-900 mb-3">
					{selectedUserType
						.split("_")
						.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
						.join(" ")}{" "}
					Routes
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{menus.map((item, index) => (
						<div
							key={index}
							onClick={() =>
								setActiveUserAndNavigate(selectedUserType, item.href)
							}
							className="flex items-center gap-3 p-3 bg-white hover:bg-indigo-50 border border-gray-200 rounded-lg cursor-pointer transition-colors"
						>
							<div className="p-2 bg-indigo-100 rounded-md text-indigo-700">
								<item.icon className="h-5 w-5" />
							</div>
							<div>
								<p className="font-medium text-gray-800">{item.title}</p>
								<p className="text-xs text-gray-500">{item.href}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Quick Access to All Routes */}
			<div className="bg-gray-50 p-4 rounded-lg">
				<h2 className="text-lg font-semibold text-indigo-900 mb-3">
					All Routes Quick Access
				</h2>
				<div className="flex flex-wrap gap-2">
					{[
						{ path: "/startup/dashboard", label: "Startup Dashboard" },
						{ path: "/startup/meetings", label: "Startup Meetings" },
						{ path: "/startup/chats", label: "Startup Chats" },
						{ path: "/startup/support", label: "Startup Support" },
						{ path: "/startup-manager/dashboard", label: "SM Dashboard" },
						{ path: "/startup-manager/lead", label: "SM Lead" },
						{ path: "/startup-manager/explore", label: "SM Explore" },
						{ path: "/startup-manager/task-management", label: "SM Tasks" },
						{ path: "/startup-manager/meetings", label: "SM Meetings" },
						{ path: "/startup-manager/contracts", label: "SM Contracts" },
						{
							path: "/startup-manager/startup-management",
							label: "SM Management",
						},
						{ path: "/startup-manager/form-builder", label: "SM Forms" },
						{ path: "/startup-manager/support", label: "SM Support" },
						{ path: "/investor/dashboard", label: "Investor Dashboard" },
						{ path: "/investor/explore", label: "Investor Explore" },
						{ path: "/investor/portfolio", label: "Investor Portfolio" },
						{ path: "/investor/advice", label: "Investor Advice" },
						{ path: "/investor/meetings", label: "Investor Meetings" },
						{ path: "/investor-manager/dashboard", label: "IM Dashboard" },
						{ path: "/investor-manager/leads", label: "IM Leads" },
						{ path: "/investor-manager/investors", label: "IM Investors" },
						{ path: "/investor-manager/task-management", label: "IM Tasks" },
						{ path: "/investor-manager/meetings", label: "IM Meetings" },
						{ path: "/investor-manager/contracts", label: "IM Contracts" },
						{ path: "/investor-manager/form-builder", label: "IM Forms" },
						{ path: "/investor-manager/support", label: "IM Support" },
						{ path: "/syndicate/dashboard", label: "Syndicate Dashboard" },
						{ path: "/syndicate/investors", label: "Syndicate Investors" },
						{ path: "/syndicate/task-management", label: "Syndicate Tasks" },
						{ path: "/syndicate/meetings", label: "Syndicate Meetings" },
						{ path: "/syndicate/community", label: "Syndicate Community" },
						{ path: "/syndicate/invite-link", label: "Syndicate Invite" },
						{ path: "/syndicate/support", label: "Syndicate Support" },
					].map((route, index) => (
						<button
							key={index}
							onClick={() => navigateToPage(route.path)}
							className="px-3 py-1 bg-gray-200 text-gray-800 text-xs rounded hover:bg-gray-300 transition-colors"
						>
							{route.label}
						</button>
					))}
				</div>
			</div>

			{/* Current State Info */}
			<div className="bg-gray-50 p-4 rounded-lg">
				<h2 className="text-lg font-semibold text-indigo-900 mb-3">
					Current State
				</h2>
				<div className="bg-gray-100 p-3 rounded font-mono text-sm">
					<p>User Type: {selectedUserType}</p>
					<p>Available Routes: {menus.length}</p>
					<p>
						Storage User Type:{" "}
						{typeof window !== "undefined"
							? localStorage.getItem("activeUserType") || "none"
							: "none"}
					</p>
				</div>
			</div>
		</div>
	);
};

export default TestNavigation;
