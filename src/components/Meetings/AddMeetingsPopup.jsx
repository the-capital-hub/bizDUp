import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

export default function MeetingDialog({
	open,
	onOpenChange,
	onAddMeeting,
	selectedDate,
}) {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState(selectedDate);
	const [startTime, setStartTime] = useState("09:00");
	const [endTime, setEndTime] = useState("10:00");
	const [company, setCompany] = useState("Zevo");
	const [status, setStatus] = useState("Online");
	const [type, setType] = useState("Team");

	const handleSubmit = (e) => {
		e.preventDefault();

		const [startHour, startMinute] = startTime.split(":").map(Number);
		const [endHour, endMinute] = endTime.split(":").map(Number);

		const startDate = new Date(date);
		startDate.setHours(startHour, startMinute);

		const endDate = new Date(date);
		endDate.setHours(endHour, endMinute);

		const newMeeting = {
			title,
			start: startDate,
			end: endDate,
			attendees: ["/avatars/01.png", "/avatars/02.png"],
			company,
			status,
			type,
		};

		onAddMeeting(newMeeting);
		onOpenChange(false);
		resetForm();
	};

	const resetForm = () => {
		setTitle("");
		setDate(selectedDate);
		setStartTime("09:00");
		setEndTime("10:00");
		setCompany("Zevo");
		setStatus("Online");
		setType("Team");
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add New Meeting</DialogTitle>
					<DialogDescription>
						Create a new meeting. Click save when you're done.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit}>
					<div className="grid gap-4 py-4">
						<div className="grid gap-2">
							<Label htmlFor="title">Title</Label>
							<Input
								id="title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								placeholder="Meeting title"
								required
							/>
						</div>

						<div className="grid gap-2">
							<Label htmlFor="date">Date</Label>
							<Popover>
								<PopoverTrigger asChild>
									<Button
										variant="outline"
										className={`w-full justify-start text-left font-normal ${
											!date ? "text-muted-foreground" : "text-foreground"
										}
										`}
									>
										<CalendarIcon className="mr-2 h-4 w-4" />
										{date ? format(date, "PPP") : <span>Pick a date</span>}
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0">
									<Calendar
										mode="single"
										selected={date}
										onSelect={setDate}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<div className="grid gap-2">
								<Label htmlFor="startTime">Start Time</Label>
								<Input
									id="startTime"
									type="time"
									value={startTime}
									onChange={(e) => setStartTime(e.target.value)}
									required
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="endTime">End Time</Label>
								<Input
									id="endTime"
									type="time"
									value={endTime}
									onChange={(e) => setEndTime(e.target.value)}
									required
								/>
							</div>
						</div>

						<div className="grid gap-2">
							<Label htmlFor="company">Company</Label>
							<Select value={company} onValueChange={setCompany}>
								<SelectTrigger>
									<SelectValue placeholder="Select company" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="Zevo">Zevo</SelectItem>
									<SelectItem value="MooEV">MooEV</SelectItem>
									<SelectItem value="Sapore">Sapore</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<div className="grid gap-2">
								<Label htmlFor="status">Status</Label>
								<Select value={status} onValueChange={setStatus}>
									<SelectTrigger>
										<SelectValue placeholder="Select status" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="Online">Online</SelectItem>
										<SelectItem value="Offline">Offline</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="type">Type</Label>
								<Select value={type} onValueChange={setType}>
									<SelectTrigger>
										<SelectValue placeholder="Select type" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="Team">Team</SelectItem>
										<SelectItem value="Personal">Personal</SelectItem>
										<SelectItem value="Client">Client</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					</div>
					<DialogFooter>
						<Button type="submit">Save Meeting</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
