import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SidebarMenus from "./SidebarMenus";
import BizDateUpLogo from "../../Images/BizDateUp_Logo.png";
import LogoutPopup from "../../components/Popup/LogoutPopup";
import { RiShare2Line } from "react-icons/ri";

const Sidebar = ({ isCollapsed }) => {
	const location = useLocation();
	const [showLogoutAlert, setShowLogoutAlert] = useState(false);
	const [userType, setUserType] = useState("startup");

	// Check localStorage for active user type when component mounts
	useEffect(() => {
		const savedUserType = localStorage.getItem("activeUserType");
		if (savedUserType) {
			setUserType(savedUserType);
		}
	}, []);

	// Listen for changes in localStorage
	useEffect(() => {
		const handleStorageChange = () => {
			const savedUserType = localStorage.getItem("activeUserType");
			if (savedUserType && savedUserType !== userType) {
				setUserType(savedUserType);
			}
		};

		window.addEventListener("storage", handleStorageChange);
		return () => {
			window.removeEventListener("storage", handleStorageChange);
		};
	}, [userType]);

	const menu = SidebarMenus(userType); // Use dynamic user type

	return (
		<>
			<div className={`bg-white ${isCollapsed ? "w-16" : "w-64"} p-6 relative`}>
				<div className="flex flex-col gap-8">
					<div className="mb-6">
						<img src={BizDateUpLogo} alt="logo" />
					</div>

					<div className="flex flex-col gap-1">
						<div className="flex flex-col justify-center items-center gap-1">
							{menu.map((item, index) => (
								<div
									key={index}
									className={`
              flex items-center gap-2 text-gray-700 p-3
              hover:bg-indigo-900 hover:text-white hover:rounded transition-colors w-full
              cursor-pointer
              ${
								location.pathname === item.href
									? "text-indigo-700 font-semibold"
									: ""
							}
            `}
								>
									{item.icon}
									<Link
										to={item.href}
										className="flex items-center gap-2 flex-grow"
									>
										<item.icon className="h-4 w-4" />
										{!isCollapsed && item.title}
									</Link>
								</div>
							))}
						</div>

						{/* Display current user type */}
						{!isCollapsed && (
							<div className="text-xs text-gray-500 mt-2 mb-2 px-3">
								Active as:{" "}
								{userType
									.split("_")
									.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
									.join(" ")}
							</div>
						)}

						{/* Logout Button */}
						<div
							onClick={() => setShowLogoutAlert(true)}
							className="flex items-center gap-2 flex-grow text-red-600 p-3 cursor-pointer absolute bottom-5"
							data-testid="logout-popup"
						>
							<RiShare2Line className="h-4 w-4 rotate-90 text-red-600" />
							{!isCollapsed && "Logout"}
						</div>
					</div>
				</div>
			</div>

			<LogoutPopup
				isOpen={showLogoutAlert}
				onClose={() => setShowLogoutAlert(false)}
			/>
		</>
	);
};

export default Sidebar;
