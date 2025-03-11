import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";


export default function AddNewStartup({ open, onOpenChange, onSubmit }) {
	const [activeTab, setActiveTab] = useState("customer");
	const [formData, setFormData] = useState({
		// Customer Details
		company: "",
		vatNumber: "",
		phone: "",
		website: "",
		groups: "",
		currency: "",
		defaultLanguage: "",
		address: "",
		city: "",
		postalCode: "",
		// Billing & Shipping
		billingStreet: "",
		billingAddress: "",
		billingCity: "",
		billingPostalCode: "",
		shippingStreet: "",
		shippingAddress: "",
		shippingCity: "",
		shippingPostalCode: "",
	});

	const handleChange = (field, value) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({
			company: formData.company,
			founderName: "New Founder",
			phone: formData.phone,
			email: "new@example.com",
			tags: ["New"],
			startDate: new Date().toLocaleDateString(),
			status: "Active",
		});
		setFormData({}); // Reset form
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-[600px] h-[90dvh] overflow-y-scroll hide-scrollbar">
				<DialogHeader>
					<DialogTitle className="flex justify-between items-center">
						<span>Add New Startup</span>
					</DialogTitle>
				</DialogHeader>

				<Tabs value={activeTab} onValueChange={setActiveTab}>
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="customer">Customer Details</TabsTrigger>
						<TabsTrigger value="billing">Billing & Shipping</TabsTrigger>
					</TabsList>

					<TabsContent value="customer" className="space-y-4">
						<div className="space-y-4">
							<div>
								<Label>Company</Label>
								<Input
									placeholder="Enter Company"
									value={formData.company}
									onChange={(e) => handleChange("company", e.target.value)}
								/>
							</div>

							<div>
								<Label>VAT Number</Label>
								<Input
									placeholder="Enter VAT Number"
									value={formData.vatNumber}
									onChange={(e) => handleChange("vatNumber", e.target.value)}
								/>
							</div>

							<div>
								<Label>Phone</Label>
								<Input
									placeholder="Enter Phone number"
									value={formData.phone}
									onChange={(e) => handleChange("phone", e.target.value)}
								/>
							</div>

							<div>
								<Label>Website</Label>
								<Input
									placeholder="Enter Website"
									value={formData.website}
									onChange={(e) => handleChange("website", e.target.value)}
								/>
							</div>

							<div>
								<Label>Groups</Label>
								<Select
									value={formData.groups}
									onValueChange={(value) => handleChange("groups", value)}
								>
									<SelectTrigger>
										<SelectValue placeholder="Not Selected" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="group1">Group 1</SelectItem>
										<SelectItem value="group2">Group 2</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div>
									<Label>Currency</Label>
									<Select
										value={formData.currency}
										onValueChange={(value) => handleChange("currency", value)}
									>
										<SelectTrigger>
											<SelectValue placeholder="Not Selected" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="usd">USD</SelectItem>
											<SelectItem value="eur">EUR</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div>
									<Label>Default Language</Label>
									<Select
										value={formData.defaultLanguage}
										onValueChange={(value) =>
											handleChange("defaultLanguage", value)
										}
									>
										<SelectTrigger>
											<SelectValue placeholder="Not Selected" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="en">English</SelectItem>
											<SelectItem value="es">Spanish</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>

							<div className="grid grid-cols-3 gap-4">
								<div>
									<Label>Address</Label>
									<Input
										placeholder="Enter Address"
										value={formData.address}
										onChange={(e) => handleChange("address", e.target.value)}
									/>
								</div>

								<div>
									<Label>City</Label>
									<Input
										placeholder="Enter City"
										value={formData.city}
										onChange={(e) => handleChange("city", e.target.value)}
									/>
								</div>

								<div>
									<Label>Postal Code</Label>
									<Input
										placeholder="Enter Postal Code"
										value={formData.postalCode}
										onChange={(e) => handleChange("postalCode", e.target.value)}
									/>
								</div>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="billing" className="space-y-4">
						<div className="space-y-6">
							<div>
								<h3 className="font-medium mb-4">Billing Address</h3>
								<div className="space-y-4">
									<div>
										<Label>Street</Label>
										<Input
											placeholder="Enter Street"
											value={formData.billingStreet}
											onChange={(e) =>
												handleChange("billingStreet", e.target.value)
											}
										/>
									</div>

									<div className="grid grid-cols-3 gap-4">
										<div>
											<Label>Address</Label>
											<Input
												placeholder="Enter Address"
												value={formData.billingAddress}
												onChange={(e) =>
													handleChange("billingAddress", e.target.value)
												}
											/>
										</div>

										<div>
											<Label>City</Label>
											<Input
												placeholder="Enter City"
												value={formData.billingCity}
												onChange={(e) =>
													handleChange("billingCity", e.target.value)
												}
											/>
										</div>

										<div>
											<Label>Postal Code</Label>
											<Input
												placeholder="Enter Postal Code"
												value={formData.billingPostalCode}
												onChange={(e) =>
													handleChange("billingPostalCode", e.target.value)
												}
											/>
										</div>
									</div>
								</div>
							</div>

							<div>
								<h3 className="font-medium mb-4">Shipping</h3>
								<div className="space-y-4">
									<div>
										<Label>Street</Label>
										<Input
											placeholder="Enter Street"
											value={formData.shippingStreet}
											onChange={(e) =>
												handleChange("shippingStreet", e.target.value)
											}
										/>
									</div>

									<div className="grid grid-cols-3 gap-4">
										<div>
											<Label>Address</Label>
											<Input
												placeholder="Enter Address"
												value={formData.shippingAddress}
												onChange={(e) =>
													handleChange("shippingAddress", e.target.value)
												}
											/>
										</div>

										<div>
											<Label>City</Label>
											<Input
												placeholder="Enter City"
												value={formData.shippingCity}
												onChange={(e) =>
													handleChange("shippingCity", e.target.value)
												}
											/>
										</div>

										<div>
											<Label>Postal Code</Label>
											<Input
												placeholder="Enter Postal Code"
												value={formData.shippingPostalCode}
												onChange={(e) =>
													handleChange("shippingPostalCode", e.target.value)
												}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</TabsContent>
				</Tabs>

				<Button onClick={handleSubmit} className="w-full bg-[#1e1b4b]">
					Add New Customer
				</Button>
			</DialogContent>
		</Dialog>
	);
}
