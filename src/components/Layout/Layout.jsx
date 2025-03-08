import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout() {
	const [isCollapsed, setIsCollapsed] = useState(false);

	return (
		<div className="flex min-h-screen bg-gray-50">
			<Sidebar isCollapsed={isCollapsed} />
			<div className="flex-1">
				<Navbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
				<div className="bg-[#f5f7fa] p-5 custom-height overflow-y-scroll hide-scrollbar">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default Layout;
