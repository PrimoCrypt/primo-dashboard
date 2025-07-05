"use client";
import Rating from "@mui/material/Rating";
import { ColumnDef } from "@tanstack/react-table";
import { ReviewDataProps } from "@/dataTypes";
import { StarIcon } from "lucide-react";

export const reviewColumns: ColumnDef<ReviewDataProps>[] = [
	{
		accessorKey: "userName",
		cell: ({ row }) => {
			const userName = row.original.userName as string;
			return (
				<h1 className=" w-full text-2xl font-bold text-nowrap pr-2">
					{userName}
				</h1>
			);
		},
	},
	{
		accessorKey: "userReview",
		cell: ({ row }) => {
			const userDescription = row.original.userDescription as string;
			const stars = row.original.stars;
			return (
				<div className="w-full text-wrap border-l pl-2 flex flex-col gap-4">
					<p>{userDescription}</p>
					<div>
						<Rating
							name="read-only"
							value={stars}
							readOnly
							emptyIcon={
								<StarIcon
									style={{ opacity: 1, fill: "#D9D9D9" }}
									fontSize="inherit"
								/>
							}
						/>
					</div>
				</div>
			);
		},
	},
];
