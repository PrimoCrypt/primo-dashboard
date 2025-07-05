"use client";
import { useEffect, useMemo, useState } from "react";
import { hotelsData } from "@/data";
import { HangoutsHotelsProps } from "@/dataTypes";
import { DataTable } from "@/components/data-tables/data-table";
import { columns } from "./columns";
import { columns as morecolumns } from "./morecolumns";
import { Loader2, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const HangoutsHotel = ({ params }: { params: { id: number } }) => {
	const { id: id } = params;
	const [searchTerm, setSearchTerm] = useState<string>("");
	const myHotelsData = hotelsData.find((idx) => idx.id == id);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const router = useRouter();
	const filteredData =
		myHotelsData?.data?.filter(
			(item) =>
				item.noOfBookings
					.toString()
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
				item.noOfCancellation
					.toString()
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
				item.percentRemitted
					.toString()
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
				item.revenueThisMonth
					.toString()
					.toLowerCase()
					.includes(searchTerm.toLowerCase())
		) || [];
	const [currentMonth, setCurrentMonth] = useState<string>("");
	const [moreButton, setMoreButton] = useState<boolean>(true);

	const allMonths = useMemo(
		() => [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		],
		[]
	);

	useEffect(() => {
		const date = new Date();
		const month = allMonths[date.getMonth()];
		setCurrentMonth(month);
	}, [allMonths]);

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-10">
				<div className="flex  items-center justify-between">
					<div className="flex items-center gap-4">
						<span className="cursor-pointer" onClick={() => router.back()}>
							<ChevronLeft />
						</span>
						<h1 className="text-2xl font-semibold">
							{myHotelsData?.hotelName}
						</h1>
					</div>
					<div className="flex items-center h-full gap-3">
						<Button
							onClick={() => {
								setMoreButton(!moreButton);
							}}
							className="bg-background-purple text-white py-3 rounded-xl text-lg h-fit px-6">
							{moreButton ? "view more" : "view less"}
						</Button>
						<div className="input max-w-72 border-white bg-transparent py-2 h-fit text-lg px-4 flex justofy-between items-center gap-2">
							<input
								type="text"
								className="max-w-56"
								value={searchTerm}
								placeholder="Search"
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="h-8 w-8 opacity-70">
								<path
									fillRule="evenodd"
									d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div>
					<div className="w-full overflow-y-auto h-full">
						{myHotelsData?.data && myHotelsData.data.length > 0 ? (
							<DataTable
								columns={moreButton ? morecolumns : columns}
								data={filteredData}
							/>
						) : isLoading ? (
							<div className="p-20 absolute top-0 w-full bg-transparent flex items-center justify-center">
								<Loader2 className="h-16 w-16 animate-spin text-primary-700" />
							</div>
						) : (
							<div className="w-full flex justify-center p-4">
								<h1>No Customer Data</h1>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default HangoutsHotel;
