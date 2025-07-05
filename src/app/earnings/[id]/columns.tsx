"use client";

import { ColumnDef } from "@tanstack/react-table";
import { RevenueUserDataProps } from "@/dataTypes";

export const columns: ColumnDef<RevenueUserDataProps>[] = [
	{
		accessorKey: "dateAndTime",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Ride Type
			</h1>
		),
		cell: ({ row }) => {
			const rideType = row.getValue("rideType") as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{rideType}
				</div>
			);
		},
	},
	{
		accessorKey: "driversName",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Driver&apos;s Name
			</h1>
		),
		cell: ({ row }) => {
			const driversName = row.getValue("driversName") as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{driversName}
				</div>
			);
		},
	},
	{
		accessorKey: "rideAmount",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Ride Amount
			</h1>
		),
		cell: ({ row }) => {
			const rideAmount = row.getValue("rideAmount") as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{rideAmount}
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
			const commission = row.getValue("commission") as number;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					N{commission}
				</div>
			);
		},
	},

	{
		accessorKey: "driversCommission",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Coins Mined
			</h1>
		),
		cell: ({ row }) => {
			const driversCommission = row.getValue("driversCommission") as number;
			return (
				<div className="sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
					{driversCommission}
				</div>
			);
		},
	},
	{
		accessorKey: "paymentMethod",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Distance Covered
			</h1>
		),
		cell: ({ row }) => {
			const paymentMethod = row.getValue("paymentMethod") as string;
			return (
				<div className="sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
					{paymentMethod}
				</div>
			);
		},
	},
];
