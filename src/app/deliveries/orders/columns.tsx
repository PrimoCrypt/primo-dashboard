"use client";

import { ColumnDef } from "@tanstack/react-table";
import { formatNumbersInThousands, formattedId } from "@/customFunctions";
import Link from "next/link";
import { OrderDataProps } from "@/dataTypes";

export const columns: ColumnDef<OrderDataProps>[] = [
	{
		accessorKey: "orderId",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				{" "}
				Order ID
			</h1>
		),
		cell: ({ row }) => {
			const orderId = formattedId(row.getValue("orderId"));
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{orderId}
				</div>
			);
		},
	},
	{
		accessorKey: "deliveredBy",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Delivered By
			</h1>
		),
		cell: ({ row }) => {
			const deliveredBy = row.getValue("deliveredBy") as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{deliveredBy}
				</div>
			);
		},
	},
	{
		accessorKey: "deliveredTo",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Delivered To
			</h1>
		),
		cell: ({ row }) => {
			const deliveredTo = row.getValue("deliveredTo") as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{deliveredTo}
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
			const pickUp = row.original.pickUp as string;
			const destination = row.original.destination as string;
			return (
				<div className="sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
					<p>{pickUp}</p>
					<p>to</p>
					<p>{destination}</p>
				</div>
			);
		},
	},
	{
		accessorKey: "completionTime",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Completion Time
			</h1>
		),
		cell: ({ row }) => {
			const completionTime = row.getValue("completionTime") as string;
			return (
				<div className="sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
					{completionTime}
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
			const orderId = row.getValue("orderId");
			return (
				<Link href="/orders/[order-id]" as={`/orders/${orderId}`}>
					<div className="text-background-purple underline sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
						view more
					</div>
				</Link>
			);
		},
	},
];
