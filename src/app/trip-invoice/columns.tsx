"use client";

import { ColumnDef } from "@tanstack/react-table";
import { RidesInvoiceDataProps } from "@/dataTypes";
import { formattedId } from "@/customFunctions";
import Link from "next/link";

export const columns: ColumnDef<RidesInvoiceDataProps>[] = [
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
				Driver&apos;s Name
			</h1>
		),
		cell: ({ row }) => {
			const driverName = row.getValue("driverName") as string;
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
				Customer&apos;s Name
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
		accessorKey: "startTime",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Start time
			</h1>
		),
		cell: ({ row }) => {
			const startTime = row.getValue("startTime") as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{startTime}
				</div>
			);
		},
	},
	{
		accessorKey: "endTime",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">End time</h1>
		),
		cell: ({ row }) => {
			const endTime = row.getValue("endTime") as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{endTime}
				</div>
			);
		},
	},
	{
		accessorKey: "actions",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white"></h1>
		),
		cell: ({ row }) => {
			const rideId = row.getValue("rideId");
			return (
				<Link href="/ride-invoice/[id]" as={`/ride-invoice/${rideId}`}>
					<div className="text-background-purple underline sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
						view more
					</div>
				</Link>
			);
		},
	},
];
