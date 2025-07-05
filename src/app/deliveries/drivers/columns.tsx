"use client";

import { ColumnDef } from "@tanstack/react-table";
import { LogisticsDriverDataProps } from "@/dataTypes";
import { formatNumbersInThousands, formattedId } from "@/customFunctions";
import Link from "next/link";

export const columns: ColumnDef<LogisticsDriverDataProps>[] = [
	{
		accessorKey: "driverId",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				{" "}
				Fleet ID
			</h1>
		),
		cell: ({ row }) => {
			const driverId = formattedId(row.getValue("driverId"));

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{driverId}
				</div>
			);
		},
	},
	{
		accessorKey: "companyName",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Company Name
			</h1>
		),
		cell: ({ row }) => {
			const companyName = formattedId(row.getValue("companyName"));

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{companyName}
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
		accessorKey: "actions",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">Actions</h1>
		),
		cell: ({ row }) => {
			const driverId = row.getValue("driverId");

			return (
				<Link
					href="/deliveries/fleet/[driver-id]"
					as={`/deliveries/fleet/${driverId}`}>
					<div className="text-background-purple underline sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
						view more
					</div>
				</Link>
			);
		},
	},
];
