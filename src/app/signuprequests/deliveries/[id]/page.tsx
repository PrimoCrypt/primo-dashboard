"use client";
import * as React from "react"
import { ApproveDialog } from "@/components/ApproveDialog";
import Document from "@/components/signuprequests/Document";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { DeclineDialog } from "@/components/DeclineDialog";

// Mock data - replace with actual API call
const mockDeliveryData = {
	name: "John Doe",
	age: 27,
	driverRole: "Delivery Driver",
	gender: "Male",
	address: "123 Main St, City, State",
	accountName: "John Doe",
	accountNumber: 1234567890,
	vehicleColor: "White",
	vehicleYear: 2020,
	vehicleModel: "Civic",
	vehicleBrand: "Honda",
	plateNumber: "ABC123",
};

interface PageProps {
	params: {
		id: string;
	};
}

const LogisticsUserInfoPage = ({ params }: PageProps) => {
	const router = useRouter();
	
	// In a real app, you would fetch data based on params.id
	// const { data } = useQuery(['delivery', params.id], () => fetchDeliveryData(params.id));
	
	// For now, using mock data
	const {
		name,
		age,
		driverRole,
		gender,
		address,
		accountName,
		accountNumber,
		vehicleColor,
		vehicleYear,
		vehicleModel,
		vehicleBrand,
		plateNumber,
	} = mockDeliveryData;

	return (
		<div>
			<div className="border-b pb-6 border-opacity-10 border-b-white border-solid">
				<MoveLeft onClick={() => router.back()} />
			</div>
			<div className="grid grid-cols-[0.35fr_0.65fr] py-2">
				<div className="flex flex-col gap-4 border-r border-r-white border-solid border-opacity-10">
					<h1>Personal Information</h1>
					<div>
						<p>{name}</p>
						<p>
							{age ? age : 27}yrs | {driverRole ? driverRole : "Taxi Driver"}
						</p>
					</div>
					<p>Gender: {gender}</p>
					<p>Address: {address}</p>
					<p>Bank account holder name: {accountName}</p>
					<p>Bank account number: {accountNumber}</p>
					<p>Vehicle Color: {vehicleColor}</p>
					<p>Vehicle Year: {vehicleYear}</p>
					<p>Vehicle Manufacturing Model: {vehicleModel}</p>
					<p>Vehicle Brand: {vehicleBrand}</p>
					<p>License Plate Number: {plateNumber}</p>
				</div>
				<div className="flex flex-col gap-4 w-full pl-4">
					<h1>Personal Information</h1>
					<div className="grid grid-cols-3 gap-2">
						{[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => {
							return <Document key={index} />;
						})}
					</div>
					<div className="text-xl font-bold leading-[35px] flex gap-2 self-end">
						<DeclineDialog name={name} />
						<ApproveDialog name={name} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogisticsUserInfoPage;
