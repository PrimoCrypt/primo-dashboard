"use client";

import { ColumnDef } from "@tanstack/react-table";
import { formattedId } from "@/customFunctions";
import { VehicleDatabaseProps } from "@/dataTypes";

export const columns: ColumnDef<VehicleDatabaseProps>[] = [
	{
		accessorKey: "driverId",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				{" "}
				Order ID
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
		accessorKey: "vehicleNumber",
		header: () => (
			<h1 className="font-semibold text-base text-left text-white">
				Vehicle Number
			</h1>
		),
		cell: ({ row }) => {
			const vehicleNumber = row.getValue("vehicleNumber") as string;
			return (
				<div className="sm:py-4 min-w-[20px] text-xs sm:min-w-[80px] text-wrap">
					{vehicleNumber}
				</div>
			);
		},
	},
];
