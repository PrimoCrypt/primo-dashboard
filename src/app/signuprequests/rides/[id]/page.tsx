"use client"
import { ApproveDialog } from "@/components/ApproveDialog";
import { BlockDialog } from "@/components/BlockDialog";
import Document from "@/components/signuprequests/Document";
import { CabHailingUserInfoProps } from "@/dataTypes";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { DeclineDialog } from "@/components/DeclineDialog";

const CabHailingUserInfoPage = ({
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
}: CabHailingUserInfoProps) => {
	const router = useRouter();
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
export default CabHailingUserInfoPage;
