"use client";

import { ColumnDef } from "@tanstack/react-table";
import { RevenueDataProps } from "@/dataTypes";
import { formatNumbersInThousands, formattedId } from "@/customFunctions";
import Link from "next/link";

export const columns: ColumnDef<RevenueDataProps>[] = [
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
		accessorKey: "userName",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">Customer</h1>
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
		accessorKey: "totalAmount",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Total Amount
			</h1>
		),
		cell: ({ row }) => {
			const totalAmount = formatNumbersInThousands(row.getValue("totalAmount"));

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{totalAmount}
				</div>
			);
		},
	},
	{
		accessorKey: "commission",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Commission
			</h1>
		),
		cell: ({ row }) => {
			const commission = formatNumbersInThousands(row.getValue("commission"));

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{commission}%
				</div>
			);
		},
	},
	{
		accessorKey: "driversCommission",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Fleet Commission
			</h1>
		),
		cell: ({ row }) => {
			const driversCommission = formatNumbersInThousands(
				row.getValue("driversCommission")
			);

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{driversCommission}%
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
				<Link href="/revenue-reports/[id]" as={`/revenue-reports/${rideId}`}>
					<div className="text-background-purple underline sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
						view more
					</div>
				</Link>
			);
		},
	},
];
