import { FiPieChart } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";
import { PiChatsCircleLight } from "react-icons/pi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { LuUserPen } from "react-icons/lu";
import { IoRocketOutline } from "react-icons/io5";
import { BiTask } from "react-icons/bi";
import { RiShare2Line } from "react-icons/ri";
import { TbContract } from "react-icons/tb";
import { FaWpforms } from "react-icons/fa";

const menus = {
	startup: [
		{ title: "Dashboard", icon: FiPieChart, href: "/startup/dashboard" },
		{ title: "Meetings", icon: IoCalendarOutline, href: "/startup/meetings" },
		{ title: "Chats", icon: PiChatsCircleLight, href: "/startup/chats" },
		{ title: "Support", icon: MdOutlineSupportAgent, href: "/startup/support" },
	],
	startup_manager: [
		{
			title: "Dashboard",
			icon: FiPieChart,
			href: "/startup-manager/dashboard",
		},
		{ title: "Lead", icon: LuUserPen, href: "/startup-manager/lead" },
		{
			title: "Explore",
			icon: IoRocketOutline,
			href: "/startup-manager/explore",
		},
		{
			title: "Task Management",
			icon: BiTask,
			href: "/startup-manager/task-management",
		},
		{
			title: "Meetings",
			icon: RiShare2Line,
			href: "/startup-manager/meetings",
		},
		{
			title: "Contracts",
			icon: TbContract,
			href: "/startup-manager/contracts",
		},
		{
			title: "Startup Management",
			icon: RiShare2Line,
			href: "/startup-manager/startup-management",
		},
		{
			title: "Form Builder",
			icon: FaWpforms,
			href: "/startup-manager/form-builder",
		},
		{
			title: "Support",
			icon: MdOutlineSupportAgent,
			href: "/startup-manager/support",
		},
	],
	investor: [
		{ title: "Dashboard", icon: FiPieChart, href: "/investor/dashboard" },
		{ title: "Explore", icon: IoRocketOutline, href: "/investor/explore" },
		{
			title: "Portfolio",
			icon: PiChatsCircleLight,
			href: "/investor/portfolio",
		},
		{ title: "Meetings", icon: IoCalendarOutline, href: "/investor/meetings" },
		{ title: "Advice", icon: MdOutlineSupportAgent, href: "/investor/advice" },
	],
	investor_manager: [
		{
			title: "Dashboard",
			icon: FiPieChart,
			href: "/investor-manager/dashboard",
		},
		{ title: "Leads", icon: LuUserPen, href: "/investor-manager/leads" },
		{
			title: "Investors",
			icon: LuUserPen,
			href: "/investor-manager/investors",
		},
		{
			title: "Task Management",
			icon: RiShare2Line,
			href: "/investor-manager/task-management",
		},
		{
			title: "Meetings",
			icon: RiShare2Line,
			href: "/investor-manager/meetings",
		},
		{
			title: "Contracts",
			icon: TbContract,
			href: "/investor-manager/contracts",
		},
		{
			title: "Form Builder",
			icon: IoRocketOutline,
			href: "/investor-manager/form-builder",
		},
		{
			title: "Support",
			icon: MdOutlineSupportAgent,
			href: "/investor-manager/support",
		},
	],
	syndicate: [
		{ title: "Dashboard", icon: FiPieChart, href: "/syndicate/dashboard" },
		{ title: "Investors", icon: FiPieChart, href: "/syndicate/investors" },
		{
			title: "Task Management",
			icon: BiTask,
			href: "/syndicate/task-management",
		},
		{ title: "Meetings", icon: IoCalendarOutline, href: "/syndicate/meetings" },
		{ title: "Community", icon: PiChatsCircleLight, href: "/syndicate/community" },
		{ title: "Invite Link", icon: TbContract, href: "/syndicate/invite-link" },
		{
			title: "Support",
			icon: MdOutlineSupportAgent,
			href: "/syndicate/support",
		},
	],
};

const SidebarMenus = (role) => menus[role];

export default SidebarMenus;
