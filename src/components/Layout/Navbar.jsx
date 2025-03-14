import { useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
	// DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { LuUsers } from "react-icons/lu";
import Avtar from "../../Images/Avatar.png";
import Search from "../Search";
import LogoutPopup from "../Popup/LogoutPopup";

const Navbar = ({ isCollapsed, setIsCollapsed }) => {
	const [showLogoutAlert, setShowLogoutAlert] = useState(false);
	return (
		<>
			<div className="flex-1">
				{/* Header */}
				<header className="border-b bg-white">
					<div className="flex h-16 items-center gap-4 px-6">
						<Button
							variant="ghost"
							size="icon"
							className="md:hidden"
							onClick={() => setIsCollapsed(!isCollapsed)}
						>
							<Bell className="h-4 w-4" />
							<span className="sr-only">Toggle sidebar</span>
						</Button>

						<div className="flex items-center justify-between gap-4 w-full">
							{/* Search */}
							<Search />

							<div className="flex items-center gap-4">
								{/* Notifications */}
								<Button variant="ghost" size="icon">
									<Bell className="h-4 w-4" />
									<span className="sr-only">Notifications</span>
								</Button>

								{/* Chat */}
								<Button variant="ghost" size="icon">
									<LuUsers className="h-4 w-4" />
									<span className="sr-only">Chats</span>
								</Button>

								{/* Profile */}
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<div className="flex items-center justify-between gap-3  cursor-pointer">
											<Button variant="ghost" className="relative h-12 w-12">
												<Avatar className="h-12 w-12 rounded-none">
													<AvatarImage src={Avtar} alt="Avatar" />
													<AvatarFallback>Meet Jain</AvatarFallback>
												</Avatar>
											</Button>
											<div className="flex flex-col gap-3">
												<p className="text-xs leading-none text-muted-foreground">
													Meet Jain
												</p>
												<p className="text-xs leading-none text-muted-foreground">
													andywarhol@mail.com
												</p>
											</div>
										</div>
									</DropdownMenuTrigger>
									<DropdownMenuContent
										className="w-56 bg-white z-50"
										align="end"
										forceMount
									>
										{/* <DropdownMenuLabel className="font-normal">
										<div className="flex flex-col space-y-1">
											<p className="text-sm font-medium leading-none">
												John Doe
											</p>
											<p className="text-xs leading-none text-muted-foreground">
												Admin
											</p>
										</div>
									</DropdownMenuLabel> */}
										{/* <DropdownMenuSeparator /> */}
										<DropdownMenuItem className="cursor-pointer hover:text-purple-600">
											Profile
										</DropdownMenuItem>
										<DropdownMenuItem
											// onClick={() => setShowSubscription(true)}
											className="cursor-pointer hover:text-purple-600"
										>
											Settings
										</DropdownMenuItem>
										{/* <DropdownMenuSeparator /> */}
										<DropdownMenuItem
											onClick={() => setShowLogoutAlert(true)}
											className="cursor-pointer hover:text-purple-600"
										>
											Log out
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</div>
					</div>
				</header>
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

export default Navbar;
