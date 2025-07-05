"use client";
import { formattedId } from "@/customFunctions";
import { ItemDetailsProps } from "@/dataTypes";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReviewsDataTable } from "./data-tables/reviews-data-table";
import { reviewColumns } from "./columns/reviews-column";
import { reviewData } from "@/data";

const ItemDetails = ({
	companyName,
	id,
	status,
	total = 100,
	taken = 82,
	declined = 18,
	revenue = 100,
	coinsMined = 2.0345521,
	rating,
}: ItemDetailsProps) => {
	const router = useRouter();

	status = +id % 2 == 0 ? "Verified" : "Unverified";
	id = formattedId(+id);
	rating =
		+id % 5 === 0
			? "Excellent"
			: +id % 4 === 0
			? "Good"
			: +id % 3 === 0
			? "Average"
			: +id % 2 === 0
			? "Bad"
			: "Poor";
	return (
		<div>
			<div className="grid grid-cols-8 gap-8">
				<div className="flex flex-col gap-6 col-span-3">
					<MoveLeft onClick={() => router.back()} />
					<h1 className="text-6xl font-semibold">{companyName}</h1>
					<p className="text-3xl font-medium">{id}</p>
					<div className="bg-background-secondary border rounded-2xl px-5 py-8 font-bold text-2xl flex flex-col gap-8">
						<p className="">
							Status:{" "}
							<span
								className={`font-medium italic ${
									status === "Verified"
										? "text-verified"
										: status === "Unverified"
										? "text-unverified"
										: ""
								}`}>
								{status}
							</span>
						</p>
						<p>
							Total No. of Rides: <span className="font-medium">{total}</span>
						</p>
						<p>
							Rides Taken: <span className="font-medium">{taken}</span>
						</p>
						<p>
							Rides Declined: <span className="font-medium">{declined}</span>
						</p>
						<p>
							Total Revenue: <span className="font-medium">N{revenue}</span>
						</p>
						<p>
							Total No. of Coins Mined:{" "}
							<span className="font-medium">{coinsMined}</span>
						</p>
						<p>
							Average Rating: <span className="font-medium">{rating}</span>
						</p>
					</div>
				</div>
				<div className="col-span-5 flex flex-col gap-11">
					<div>
						<h1 className="font-medium text-3xl text-center mb-2">
							Fleet Reviews & Ratings
						</h1>
						<div className="w-full h-[0.5px] opacity-30 bg-white"></div>
					</div>
					<ReviewsDataTable columns={reviewColumns} data={reviewData} name={companyName!} />
				</div>
			</div>
		</div>
	);
};
export default ItemDetails;
