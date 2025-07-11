"use client";
import { Button } from "@mui/material";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
interface SettingsHeaderProps {
	id: string;
	content: string;
}
const AppSettingsMenu = () => {
	const SettingsHeader: SettingsHeaderProps[] = [
		{ id: "copyright", content: "Copyright content" },
		{ id: "playstoreOrAppstore", content: "Play Store/ Appstore" },
		{ id: "driverAccepttimeout", content: "Fleet accept timeout" },
		{ id: "commission", content: "Commission" },
		{ id: "socials", content: "Social link" },
		{ id: "contactInfo", content: "Contact infox" },
		{ id: "APIkey", content: "API key" },
		{ id: "privacyPolicy", content: "Update privacy policy" },
		{ id: "coinPerMile", content: "Coin per mile" },
	];
	const [searchTerm, setSearchTerm] = useState<string>("");
	return (
		<div className="flex flex-col gap-4 h-full">
			<h1 className="text-xl">Settings</h1>
			<div className="input border-white bg-transparent justify-between py-2 h-fit text-lg px-4 flex max-w-64 items-center gap-2">
				<input
					type="text"
					className="w-full"
					value={searchTerm}
					placeholder="Search settings"
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					className="h-6 w-6 opacity-70">
					<path
						fillRule="evenodd"
						d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
			<div className="flex flex-col gap-2">
				{SettingsHeader.map((item) => {
					const id = item.id;
					const content = item.content;

					return (
						<div
							key={id}
							className="w-full flex justify-between items-center text-lg  text-[#B2B2B2]">
							<p>{content}</p>
							<Button>
								<ChevronRight />
							</Button>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default AppSettingsMenu;
