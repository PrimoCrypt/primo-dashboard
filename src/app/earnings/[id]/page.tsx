"use client";
//ts-worksheet
import { useState } from "react";
import {  revenueData, usersData } from "@/data";
import { RevenueUserDataProps } from "@/dataTypes";
import { DataTable } from "@/components/data-tables/data-table";
import { columns } from "./columns";
import { Loader2, MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Customers = ({ params }: { params: { id: number } }) => {
	const { id: id } = params;
	const [searchTerm, setSearchTerm] = useState<string>("");
	const myRevenueData = revenueData.find((idx) => idx.rideId == id);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [moreButton, setMoreButton] = useState<boolean>(true);
	const router = useRouter();
	const filteredData =
		revenueData?.data?.filter(
			(item: RevenueUserDataProps) =>
				item.rideType.toLowerCase().includes(searchTerm.toLowerCase()) ||
				item.driversName
					.toString()
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
				item.paymentMethod
					.toString()
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
				item.rideAmount
					.toString()
					.toLowerCase()
					.includes(searchTerm.toLowerCase())
		) || [];

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-10">
				<div className="flex items-center w-full !justify-between">
					<h1 className="text-2xl w-full flex gap-2 items-center font-semibold">
						<MoveLeft
							className="cursor-pointer"
							onClick={() => router.back()}
						/>
						{id}
					</h1>
					<div className="flex items-center text-nowrap justify-self-end h-full w-full gap-3">
						<p
							onClick={() => {
								setMoreButton(!moreButton);
							}}
							className="text-background-purple underline  text-lg px-6">
							Dashboard Statement
						</p>
						<label className="input border-white w-[60%] bg-transparent py-2 h-fit text-lg px-4 flex items-center gap-2">
							<input
								type="text"
								className="w-full min-w-36"
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
						</label>
					</div>
				</div>
				<div>
					<div className="w-full overflow-y-auto h-full">
						{myRevenueData?.data && myRevenueData.data.length > 0 ? (
							<DataTable columns={columns} data={filteredData} />
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
export default Customers;
