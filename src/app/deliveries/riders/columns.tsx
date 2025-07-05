"use client";

import { ColumnDef } from "@tanstack/react-table";
import { RiderDataProps } from "@/dataTypes";
import { formatNumbersInThousands, formattedId } from "@/customFunctions";
import Link from "next/link";

export const columns: ColumnDef<RiderDataProps>[] = [
	{
		accessorKey: "driverId",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				{" "}
				Customer ID
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
		accessorKey: "packagesDelivered",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Total packages delivered
			</h1>
		),
		cell: ({ row }) => {
			const packagesDelivered = formatNumbersInThousands(
				row.getValue("packagesDelivered")
			);

			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{packagesDelivered}
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
		accessorKey: "actions",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white"></h1>
		),
		cell: ({ row }) => {
			const riderId = row.getValue("riderId");

			return (
				<Link href="/customers/[rider-id]" as={`/customers/${riderId}`}>
					<div className="text-background-purple underline sm:py-4 min-w-[20px] sm:min-w-[80px]  text-wrap">
						view more
					</div>
				</Link>
			);
		},
	},
];
