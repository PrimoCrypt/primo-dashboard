"use client";

import { ColumnDef } from "@tanstack/react-table";
import { formatNumbersInThousands, formattedId } from "@/customFunctions";
import Link from "next/link";
import { RideDataProps } from "@/dataTypes";

export const columns: ColumnDef<RideDataProps>[] = [
	{
		accessorKey: "rideId",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white"> Ride ID</h1>
		),
		cell: ({ row }) => {
			const rideId = formattedId(row.getValue("rideId"));

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{rideId}
				</div>
			);
		},
	},
	{
		accessorKey: "driverName",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Fleet Name
			</h1>
		),
		cell: ({ row }) => {
			const driverName = formattedId(row.getValue("driverName"));

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{driverName}
				</div>
			);
		},
	},
	{
		accessorKey: "userName",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Customer Name
			</h1>
		),
		cell: ({ row }) => {
			const userName = row.getValue("userName") as string;

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{userName}
				</div>
			);
		},
	},
	{
		accessorKey: "pickAndDropAddress",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Pick/Drop Address
			</h1>
		),
		cell: ({ row }) => {
			const pickAddress = row.original.pickAddress as string;
			const dropAddress = row.original.dropAddress as string;

			return (
				<div className="sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
					<p>{pickAddress}</p>
					<p>to</p>
					<p>{dropAddress}</p>
				</div>
			);
		},
	},
	{
		accessorKey: "date",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">Date</h1>
		),
		cell: ({ row }) => {
			const date = row.getValue("date") as string;

			return (
				<div className="sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
					{date}
				</div>
			);
		},
	},
	{
		accessorKey: "fare",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">Fare</h1>
		),
		cell: ({ row }) => {
			const fare = formatNumbersInThousands(row.getValue("fare"));

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{fare}
				</div>
			);
		},
	},
	{
		accessorKey: "status",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">Status</h1>
		),
		cell: ({ row }) => {
			const status = row.getValue("status") as string;

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{status}
				</div>
			);
		},
	},
	{
		accessorKey: "vehicleType",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Vehicle Type
			</h1>
		),
		cell: ({ row }) => {
			const vehicleType = row.getValue("vehicleType") as string;

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{vehicleType}
				</div>
			);
		},
	},
];
