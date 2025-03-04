import { Button } from "../ui/button";
import Company1 from "../../Images/Company1.png";

const Investments = () => {
	const dummyData = [
		{
			id: 1,
			name: "Zevo",
			category: "Electrical",
			logo: "",
		},
		{
			id: 2,
			name: "Mooev",
			category: "EV",
			logo: "",
		},
		{
			id: 3,
			name: "PDRL",
			category: "Drone",
			logo: "",
		},
		{
			id: 4,
			name: "Square",
			category: "XL Fashion",
			logo: "",
		},
	];

	return (
		<div className="">
			<h1 className="text-2xl font-bold text-blue-900 mb-3">Advice</h1>

			<div className="p-3 bg-white rounded-lg">
				<h2 className="text-base font-semibold mb-3">Recent Investment</h2>

				<div className="flex flex-col gap-2 ">
					{dummyData.map((item) => (
						<div
							key={item.id}
							className="flex justify-between items-center p-3 bg-gray-200 rounded-md"
						>
							<div className=" flex items-center gap-2">
								<img src={Company1} alt="Comapny Logo" className="w-10" />
								<div className="">
									<h3 className="text-sm font-semibold">{item.name}</h3>
									<p className="text-sm text-gray-400">{item.category}</p>
								</div>
							</div>
							<Button className="bg-yellow-400">Give Advice</Button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Investments;
