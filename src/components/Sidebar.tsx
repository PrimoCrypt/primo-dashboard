"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { BookText } from "lucide-react";
import { IoCarSportSharp, IoPeopleSharp, IoNotifications, IoDocumentText, IoPersonAddSharp } from "react-icons/io5";
import { FaTaxi, FaBox, FaHotel, FaMedal } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";
import { BiSolidReport } from "react-icons/bi";
import { RiSettings5Fill } from "react-icons/ri";
import { MdAttachMoney, MdLocationOn, MdLocalBar, MdRestaurant, MdArticle, MdReceipt, MdLocalShipping } from "react-icons/md";
import { PiBicycleBold, PiEyeFill } from "react-icons/pi";
import Logo from "./Logo";
import TextLogo from "./TextLogo";

const Sidebar = () => {
	const router = useRouter();
	const pathName = usePathname();
	const [isVenuesOpen, setIsVenuesOpen] = useState(false);
	const [isDeliveriesOpen, setIsDeliveriesOpen] = useState(false);
	const [isApplicationsOpen, setIsApplicationsOpen] = useState(false);
	const venuesRef = useRef<any>(null);
	const deliveriesRef = useRef<any>(null);
	const applicationsRef = useRef<any>(null);

	return (
		<div className="fixed h-full max-lg:pb-0 pb-14 max-lg:hover:w-64 overflow-hidden transition-all duration-300 w-16 z-50 lg:w-[22%]">
			<div className="relative h-full group my-[2.25rem] max-lg:my-0 flex flex-col gap-14 overflow-hidden bg-black/60 backdrop-blur-md border border-white/10 max-lg:rounded-l-none rounded-[20px] max-lg:pr-0 max-lg:p-2 p-6">
				<div className="relative ml-7 mt-11 max-lg:hidden max-lg:group-hover:block">
					<TextLogo variant="default" />
				</div>
				<div className="lg:hidden flex justify-center mt-4">
					<Logo size="xl" />
				</div>
				<ul className="gap-2 flex flex-col rounded-sm w-full text-base h-full overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-w-8 text-white max-lg:pr-2">
					<Link href="/">
						<li
							className={`py-1 flex gap-7 pl-[10px] items-center rounded-lg ${
								pathName === "/" ? "bg-background-emerald" : ""
							}`}>
							<IoCarSportSharp className="min-w-[20px]" />
							<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Home</span>
						</li>
					</Link>
					<Link href="/fleet">
						<li
							className={`py-1 flex gap-7 pl-[10px] items-center rounded-lg ${
								pathName.startsWith("/fleet") ? "bg-background-emerald" : ""
							}`}>
							<IoCarSportSharp className="min-w-[20px]" />
							<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Fleet</span>
						</li>
					</Link>
					<li>
						<details ref={deliveriesRef} open={isDeliveriesOpen} onToggle={() => setIsDeliveriesOpen(!isDeliveriesOpen)}>
							<summary
								className={`py-1 cursor-pointer justify-between pr-5 flex gap-7 pl-[10px] items-center rounded-lg ${
									pathName.startsWith("/deliveries") ? "bg-background-emerald shadow-lg" : ""
								}`}>
								<span className="flex gap-7 items-center">
									<FaBox className="min-w-[20px]" />
									<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Deliveries</span>
								</span>
								<span
									className={`transform transition-transform max-lg:opacity-0 max-lg:group-hover:opacity-100 ${
										isDeliveriesOpen ? "rotate-180" : "rotate-0"
									}`}>
									▼
								</span>
							</summary>
							<ul className="flex flex-col w-full">
								<Link href="/deliveries/orders">
									<li
										className={`py-1 px-7 text-nowrap rounded-b-lg ${
											pathName.startsWith("/deliveries/orders") ? "bg-background-emerald" : ""
										}`}>
										<MdLocalShipping className="min-w-[20px]" />
										<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Orders</span>
									</li>
								</Link>
								<Link href="/deliveries/riders">
									<li
										className={`py-1 px-7 text-nowrap rounded-b-lg ${
											pathName.startsWith("/deliveries/riders") ? "bg-background-emerald" : ""
										}`}>
										<IoPeopleSharp className="min-w-[20px]" />
										<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Riders</span>
									</li>
								</Link>
								<Link href="/deliveries/company">
									<li
										className={`py-1 px-7 text-nowrap rounded-b-lg ${
											pathName.startsWith("/deliveries/company") ? "bg-background-emerald" : ""
										}`}>
										<FaBox className="min-w-[20px]" />
										<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Company</span>
									</li>
								</Link>
								<Link href="/deliveries/drivers">
									<li
										className={`py-1 px-7 text-nowrap rounded-b-lg ${
											pathName.startsWith("/deliveries/drivers") ? "bg-background-emerald" : ""
										}`}>
										<IoCarSportSharp className="min-w-[20px]" />
										<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Drivers</span>
									</li>
								</Link>
							</ul>
						</details>
					</li>
					<Link href="/customers">
						<li
							className={`py-1 flex gap-7 pl-[10px] items-center rounded-lg ${
								pathName.startsWith("/customers") ? "bg-background-emerald" : ""
							}`}>
							<IoPeopleSharp className="min-w-[20px]" />
							<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Customers</span>
						</li>
					</Link>
					<Link href="/fleet-database">
						<li
							className={`py-1 flex gap-7 pl-[10px] items-center rounded-lg ${
								pathName.startsWith("/fleet-database") ? "bg-background-emerald" : ""
							}`}>
							<AiFillDatabase className="min-w-[20px]" />
							<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Fleet Database</span>
						</li>
					</Link>
					<Link href="/earnings">
						<li
							className={`py-1 flex gap-7 pl-[10px] items-center rounded-lg ${
								pathName.startsWith("/earnings") ? "bg-background-emerald" : ""
							}`}>
							<MdAttachMoney className="min-w-[20px]" />
							<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Earnings</span>
						</li>
					</Link>
					<Link href="/trip-invoice">
						<li
							className={`py-1 flex gap-7 pl-[10px] items-center rounded-lg ${
								pathName.startsWith("/trip-invoice") ? "bg-background-emerald" : ""
							}`}>
							<MdReceipt className="min-w-[20px]" />
							<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Trip Invoices</span>
						</li>
					</Link>
					<Link href="/offers">
						<li
							className={`py-1 flex gap-7 pl-[10px] items-center rounded-lg ${
								pathName.startsWith("/offers") ? "bg-background-emerald" : ""
							}`}>
							<HiSpeakerphone className="min-w-[20px]" />
							<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Offers</span>
						</li>
					</Link>
					<Link href="/announcements">
						<li
							className={`py-1 flex gap-7 pl-[10px] items-center rounded-lg ${
								pathName.startsWith("/announcements") ? "bg-background-emerald" : ""
							}`}>
							<IoNotifications className="min-w-[20px]" />
							<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Announcements</span>
						</li>
					</Link>
					<Link href="/feedback">
						<li
							className={`py-1 flex gap-7 pl-[10px] items-center rounded-lg ${
								pathName.startsWith("/feedback") ? "bg-background-emerald" : ""
							}`}>
							<BiSolidReport className="min-w-[20px]" />
							<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Feedback</span>
						</li>
					</Link>
					<Link href="/preferences">
						<li
							className={`py-1 flex gap-7 pl-[10px] items-center rounded-lg ${
								pathName.startsWith("/preferences") ? "bg-background-emerald" : ""
							}`}>
							<RiSettings5Fill className="min-w-[20px]" />
							<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Preferences</span>
						</li>
					</Link>
					<li>
						<details ref={venuesRef} open={isVenuesOpen} onToggle={() => setIsVenuesOpen(!isVenuesOpen)}>
							<summary
								className={`py-1 cursor-pointer justify-between pr-5 flex gap-7 pl-[10px] items-center rounded-lg ${
									pathName.startsWith("/venues") ? "bg-background-emerald shadow-lg" : ""
								}`}>
								<span className="flex gap-7 items-center">
									<MdLocationOn className="min-w-[20px]" />
									<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Venues</span>
								</span>
								<span
									className={`transform transition-transform max-lg:opacity-0 max-lg:group-hover:opacity-100 ${
										isVenuesOpen ? "rotate-180" : "rotate-0"
									}`}>
									▼
								</span>
							</summary>
							<ul className="flex flex-col w-full">
								<Link href="/venues/stays">
									<li
										className={`py-1 px-7 text-nowrap rounded-b-lg ${
											pathName.startsWith("/venues/stays") ? "bg-background-emerald" : ""
										}`}>
										<FaHotel className="min-w-[20px]" />
										<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Stays</span>
									</li>
								</Link>
								<Link href="/venues/lounges">
									<li
										className={`py-1 px-7 text-nowrap rounded-b-lg ${
											pathName.startsWith("/venues/lounges") ? "bg-background-emerald" : ""
										}`}>
										<MdLocalBar className="min-w-[20px]" />
										<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Lounges</span>
									</li>
								</Link>
								<Link href="/venues/dining">
									<li
										className={`py-1 px-7 text-nowrap rounded-b-lg ${
											pathName.startsWith("/venues/dining") ? "bg-background-emerald" : ""
										}`}>
										<MdRestaurant className="min-w-[20px]" />
										<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Dining</span>
									</li>
								</Link>
							</ul>
						</details>
					</li>
					{/* <Link href="/rewards">
						<li
							className={`py-1 flex gap-7 pl-[10px] items-center rounded-lg ${
								pathName.startsWith("/rewards") ? "bg-background-emerald" : ""
							}`}>
							<FaMedal className="min-w-[20px]" />
							<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Rewards</span>
						</li>
					</Link> */}
					{/* <Link href="/test-bookings">
						<li
							className={`py-1 flex gap-7 pl-[10px] items-center rounded-lg ${
								pathName.startsWith("/test-bookings") ? "bg-background-emerald" : ""
							}`}>
							<BookText className="min-w-[20px]" />
							<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Test Bookings</span>
						</li>
					</Link>
					<Link href="/documents">
						<li
							className={`py-1 flex gap-7 pl-[10px] items-center rounded-lg ${
								pathName.startsWith("/documents") ? "bg-background-emerald" : ""
							}`}>
							<IoDocumentText className="min-w-[20px]" />
							<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Documents</span>
						</li>
					</Link>
					<Link href="/all-trips">
						<li
							className={`py-1 flex gap-7 pl-[10px] items-center rounded-lg ${
								pathName.startsWith("/all-trips") ? "bg-background-emerald" : ""
							}`}>
							<PiBicycleBold className="min-w-[20px]" />
							<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">All Trips</span>
						</li>
					</Link> */}
					{/* <Link href="/overview">
						<li
							className={`py-1 flex gap-7 pl-[10px] items-center rounded-lg ${
								pathName.startsWith("/overview") ? "bg-background-emerald" : ""
							}`}>
							<PiEyeFill className="min-w-[20px]" />
							<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Overview</span>
						</li>
					</Link>
					<Link href="/trip-statement">
						<li
							className={`py-1 flex gap-7 pl-[10px] items-center rounded-lg ${
								pathName.startsWith("/trip-statement") ? "bg-background-emerald" : ""
							}`}>
							<MdArticle className="min-w-[20px]" />
							<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Trip Statement</span>
						</li>
					</Link> */}
					{/* <li>
						<details
							ref={applicationsRef}
							open={isApplicationsOpen}
							onToggle={() => setIsApplicationsOpen(!isApplicationsOpen)}>
							<summary
								className={`py-1 cursor-pointer justify-between pr-5 flex gap-7 pl-[10px] items-center rounded-lg ${
									pathName.startsWith("/applications") ? "bg-background-emerald shadow-lg" : ""
								}`}>
								<span className="flex gap-7 items-center">
									<IoPersonAddSharp className="min-w-[20px]" />
									<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">
										Applications
									</span>
								</span>
								<span
									className={`transform transition-transform max-lg:opacity-0 max-lg:group-hover:opacity-100 ${
										isApplicationsOpen ? "rotate-180" : "rotate-0"
									}`}>
									▼
								</span>
							</summary>
							<ul className="flex flex-col w-full">
								<Link href="/applications/fleet">
									<li
										className={`py-1 px-7 text-nowrap rounded-b-lg ${
											pathName.startsWith("/applications/fleet") ? "bg-background-emerald" : ""
										}`}>
										<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Fleet</span>
									</li>
								</Link>
								<Link href="/applications/rides">
									<li
										className={`py-1 px-7 text-nowrap rounded-b-lg ${
											pathName.startsWith("/applications/rides") ? "bg-background-emerald" : ""
										}`}>
										<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">Rides</span>
									</li>
								</Link>
								<Link href="/applications/deliveries">
									<li
										className={`py-1 px-7 text-nowrap rounded-b-lg ${
											pathName.startsWith("/applications/deliveries") ? "bg-background-emerald" : ""
										}`}>
										<span className="max-lg:opacity-0 max-lg:group-hover:opacity-100 transition-opacity">
											Deliveries
										</span>
									</li>
								</Link>
							</ul>
						</details>
					</li> */}
				</ul>
			</div>
		</div>
	);
};
export default Sidebar;
