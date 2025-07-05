"use client";
import { formatNumbersInThousands } from "@/customFunctions";
import { adminData } from "../data";
import { usePathname } from "next/navigation";

const Header = () => {
	const adminName = adminData.adminName;
	const totalFleet = formatNumbersInThousands(adminData.totalDrivers);
	const totalRiders = formatNumbersInThousands(adminData.totalRiders);
	const totalManagers = formatNumbersInThousands(adminData.totalManagers);
	const totalCustomers = formatNumbersInThousands(adminData.totalUsers);
	const totalRevenue = formatNumbersInThousands(adminData.totalRevenue);
	const totalMinedCoins = formatNumbersInThousands(adminData.totalMinedCoins);

	const pathName = usePathname();
	return (
		<div className="w-full">
			<h1 className="leading-tight pl-4 sm:pl-6 lg:pl-10 font-semibold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6">
				{adminName}`s Dashboard
			</h1>
			{pathName !== "/notifications" && (
				<div className="overflow-x-auto px-4 sm:px-6 lg:px-16 py-4 sm:py-6 lg:py-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 backdrop-blur-sm bg-emerald-500/10 border border-emerald-500/20 rounded-2xl sm:rounded-3xl shadow-xl text-xs sm:text-sm">
					<div className="text-center sm:text-left">
						<p className="text-xs sm:text-sm mb-1">Total Fleet</p>
						<p className="text-xl sm:text-2xl lg:text-3xl font-semibold">
							{totalFleet}
						</p>
					</div>
					<div className="text-center sm:text-left">
						<p className="text-xs sm:text-sm mb-1">Total Riders</p>
						<p className="text-xl sm:text-2xl lg:text-3xl font-semibold">
							{totalRiders}
						</p>
					</div>
					<div className="text-center sm:text-left">
						<p className="text-xs sm:text-sm mb-1">Total Managers</p>
						<p className="text-xl sm:text-2xl lg:text-3xl font-semibold">
							{totalManagers}
						</p>
					</div>
					<div className="text-center sm:text-left">
						<p className="text-xs sm:text-sm mb-1">Total Customers</p>
						<p className="text-xl sm:text-2xl lg:text-3xl font-semibold">
							{totalCustomers}
						</p>
					</div>
					<div className="text-center sm:text-left">
						<p className="text-xs sm:text-sm mb-1">Total Revenue</p>
						<p className="text-xl sm:text-2xl lg:text-3xl font-semibold">
							{totalRevenue}
						</p>
					</div>
					<div className="text-center sm:text-left col-span-2 sm:col-span-1 xl:col-span-1">
						<p className="text-xs sm:text-sm mb-1">Total Coins Mined</p>
						<p className="text-xl sm:text-2xl lg:text-3xl font-semibold">
							{totalMinedCoins}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};
export default Header;
