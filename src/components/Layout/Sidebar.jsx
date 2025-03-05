import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import SidebarMenus from "./SidebarMenus";
import BizDateUpLogo from "../../Images/BizDateUp_Logo.png";
import LogoutPopup from "../../components/Popup/LogoutPopup";
import { RiShare2Line } from "react-icons/ri";

const Sidebar = ({ isCollapsed }) => {
	const location = useLocation();
	const [showLogoutAlert, setShowLogoutAlert] = useState(false);

	const menu = SidebarMenus("investor"); // choose from startup, investor, startup_manager, investor_manager, syndicate
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
										{item.title}
									</Link>
								</div>
							))}
						</div>

						{/* Logout Button */}
						<div
							onClick={() => setShowLogoutAlert(true)}
							className="flex items-center gap-2 flex-grow text-red-600 p-3 cursor-pointer absolute bottom-5"
						>
							<RiShare2Line className="h-4 w-4 rotate-90 text-red-600" />
							Logout
						</div>
					</div>
				</div>
			</div>

			<LogoutPopup
				isOpen={showLogoutAlert}
				onClose={() => setShowLogoutAlert(false)}
				onConfirm={() => {
					// Handle logout
					setShowLogoutAlert(false);
				}}
			/>
		</>
	);
};

export default Sidebar;
