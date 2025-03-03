import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import EmojiPicker from "emoji-picker-react";
import {
	Smile,
	Paperclip,
	Mic,
	Send,
	Heart,
	MessageCircle,
	Eye,
	MoreVertical,
} from "lucide-react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import GrowthCompany from "../../../Images/Groowth_Company.png";
import Avatar from "../../../Images/Avatar.png";
import Avatar5 from "../../../Images/Avatar_5.png";
import Avatar2 from "../../../Images/Avatar_2.png";

const MOCK_MESSAGES = [
	{
		id: 1,
		user: {
			name: "Ann Korkowski",
			avatar: `${Avatar5}`,
			handle: "@annkorkowski",
		},
		content:
			"Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing 🎉🎊👋",
		image: "/placeholder.svg?height=200&width=300",
		timestamp: "2h ago",
		engagement: {
			likes: "23.5k",
			comments: "3.3k",
			views: "104k",
		},
	},
	{
		id: 2,
		user: {
			name: "Marvin McKinney",
			avatar: `${Avatar2}`,
			handle: "@marvinm",
		},
		content:
			"You can change your preferences at any time by returning to this site or visit our privacy policy.",
		timestamp: "3h ago",
		engagement: {
			likes: "12.1k",
			comments: "2.1k",
			views: "89k",
		},
	},
];

export default function Chats() {
	const [messages, setMessages] = useState(MOCK_MESSAGES);
	const [newMessage, setNewMessage] = useState("");
	const [isRecording, setIsRecording] = useState(false);
	const [recordingTime, setRecordingTime] = useState(0);
	const [selectedTab, setSelectedTab] = useState("live");
	const mediaRecorderRef = useRef(null);
	const chunksRef = useRef([]);
	const scrollAreaRef = useRef(null);

	useEffect(() => {
		if (scrollAreaRef.current) {
			scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
		}
	}, []); //Corrected dependency

	const handleSendMessage = () => {
		if (newMessage.trim()) {
			const message = {
				id: Date.now(),
				user: {
					name: "You",
					avatar: `${Avatar}`,
					handle: "@you",
				},
				content: newMessage,
				timestamp: "Just now",
				engagement: {
					likes: "0",
					comments: "0",
					views: "0",
				},
			};
			setMessages([...messages, message]);
			setNewMessage("");
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSendMessage();
		}
	};

	const startRecording = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			mediaRecorderRef.current = new MediaRecorder(stream);
			chunksRef.current = [];

			mediaRecorderRef.current.ondataavailable = (e) => {
				chunksRef.current.push(e.data);
			};

			mediaRecorderRef.current.onstop = () => {
				const audioBlob = new Blob(chunksRef.current, { type: "audio/webm" });
				const audioUrl = URL.createObjectURL(audioBlob);

				const message = {
					id: Date.now(),
					user: {
						name: "You",
						avatar: "/placeholder.svg?height=40&width=40",
						handle: "@you",
					},
					audio: audioUrl,
					timestamp: "Just now",
					engagement: {
						likes: "0",
						comments: "0",
						views: "0",
					},
				};
				setMessages([...messages, message]);
			};

			mediaRecorderRef.current.start();
			setIsRecording(true);

			// Start timer
			const startTime = Date.now();
			const timerInterval = setInterval(() => {
				setRecordingTime(Math.floor((Date.now() - startTime) / 1000));
			}, 1000);

			// Store interval ID for cleanup
			mediaRecorderRef.current.timerInterval = timerInterval;
		} catch (err) {
			console.error("Error accessing microphone:", err);
		}
	};

	const stopRecording = () => {
		if (
			mediaRecorderRef.current &&
			mediaRecorderRef.current.state === "recording"
		) {
			mediaRecorderRef.current.stop();
			clearInterval(mediaRecorderRef.current.timerInterval);
			setIsRecording(false);
			setRecordingTime(0);

			// Stop all audio tracks
			mediaRecorderRef.current.stream
				.getTracks()
				.forEach((track) => track.stop());
		}
	};

	const handleFileUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (event) => {
				const message = {
					id: Date.now(),
					user: {
						name: "You",
						avatar: "/placeholder.svg?height=40&width=40",
						handle: "@you",
					},
					image: event.target.result,
					timestamp: "Just now",
					engagement: {
						likes: "0",
						comments: "0",
						views: "0",
					},
				};
				setMessages([...messages, message]);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className="flex flex-col custom-height1 bg-white rounded-lg">
			{/* Header */}
			<div className="p-4 border-b">
				<h1 className="text-xl font-semibold mb-4">Chats</h1>
				<div className="flex items-center gap-2 mb-4">
					<img
						src={GrowthCompany}
						alt="Growth Community"
						className="rounded h-12"
					/>
					<span className="font-medium">Growth Community</span>
				</div>

				<Tabs value={selectedTab} onValueChange={setSelectedTab}>
					<TabsList className="grid w-full grid-cols-3 bg-gray-100 rounded-full p-1">
						<TabsTrigger value="live" className="rounded-full">
							Live Discussion
						</TabsTrigger>
						<TabsTrigger value="path" className="rounded-full">
							Path Q&A
						</TabsTrigger>
						<TabsTrigger value="deals" className="rounded-full">
							Deals Discussion
						</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>

			{/* Messages */}
			<ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
				<div className="space-y-6">
					{messages.map((message) => (
						<div key={message.id} className="flex gap-3">
							<img
								src={message.user.avatar || "/placeholder.svg"}
								alt={message.user.name}
								className="w-10 h-10 rounded-full"
							/>
							<div className="flex-1">
								<div className="flex items-center gap-2">
									<span className="font-medium">{message.user.name}</span>
									<span className="text-gray-500 text-sm">
										{message.user.handle}
									</span>
									<span className="text-gray-400 text-sm">
										{message.timestamp}
									</span>
								</div>

								{message.content && (
									<p className="mt-1 text-gray-800">{message.content}</p>
								)}

								{message.image && (
									<img
										src={message.image || "/placeholder.svg"}
										alt="Message attachment"
										className="mt-2 rounded-lg max-w-[300px]"
									/>
								)}

								{message.audio && (
									<audio
										controls
										src={message.audio}
										className="mt-2 w-full max-w-[300px]"
									>
										Your browser does not support the audio element.
									</audio>
								)}

								<div className="flex items-center gap-4 mt-2">
									<button className="flex items-center gap-1 text-gray-500 hover:text-red-500">
										<Heart className="w-4 h-4" />
										<span className="text-sm">{message.engagement.likes}</span>
									</button>
									<button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
										<MessageCircle className="w-4 h-4" />
										<span className="text-sm">
											{message.engagement.comments}
										</span>
									</button>
									<div className="flex items-center gap-1 text-gray-500">
										<Eye className="w-4 h-4" />
										<span className="text-sm">{message.engagement.views}</span>
									</div>
									<button className="ml-auto text-gray-500 hover:text-gray-700">
										<MoreVertical className="w-4 h-4" />
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</ScrollArea>

			{/* Input Area */}
			<div className="p-4 border-t">
				<div className="flex items-center gap-2">
					<Popover>
						<PopoverTrigger asChild>
							<Button variant="ghost" size="icon" className="text-gray-500">
								<Smile className="w-5 h-5" />
							</Button>
						</PopoverTrigger>
						<PopoverContent side="top" className="w-80">
							<EmojiPicker
								onEmojiClick={(emojiData) =>
									setNewMessage((prev) => prev + emojiData.emoji)
								}
							/>
						</PopoverContent>
					</Popover>

					<Input
						value={newMessage}
						onChange={(e) => setNewMessage(e.target.value)}
						onKeyPress={handleKeyPress}
						placeholder="Type message..."
						className="flex-1"
					/>

					<input
						type="file"
						id="file-upload"
						className="hidden"
						accept="image/*"
						onChange={handleFileUpload}
					/>
					<label htmlFor="file-upload">
						<Button
							variant="ghost"
							size="icon"
							className="text-gray-500"
							as="span"
						>
							<Paperclip className="w-5 h-5" />
						</Button>
					</label>

					{isRecording ? (
						<Button
							variant="destructive"
							size="sm"
							onClick={stopRecording}
							className="flex items-center gap-2"
						>
							Stop ({recordingTime}s)
						</Button>
					) : (
						<Button
							variant="ghost"
							size="icon"
							className="text-gray-500"
							onClick={startRecording}
						>
							<Mic className="w-5 h-5" />
						</Button>
					)}

					<Button onClick={handleSendMessage} className="bg-[#1e1b4b]">
						<Send className="w-5 h-5" />
					</Button>
				</div>
			</div>
		</div>
	);
}
