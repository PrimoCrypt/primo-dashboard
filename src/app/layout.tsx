import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "900", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Primo Admin Dashboard",
	description: "Comprehensive admin dashboard for managing fleet, deliveries, customers, and venues with Primo's transportation platform.",
	icons: {
		icon: '/favicon.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${poppins.className} -tracking-[4%] text-white w-full min-h-screen bg-background-main`}>
				{/* Sidebar - Fixed position */}
				<Sidebar />
				
				{/* Main content - With proper spacing for sidebar */}
				<div className="lg:ml-[22%] ml-16 flex flex-col h-full gap-4 sm:gap-6 lg:gap-[30px] p-3 sm:p-4 lg:p-8">
					<Header />
					<div className="backdrop-blur-sm bg-white/5 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl h-full mb-4 sm:mb-6 p-4 sm:p-6 lg:px-10 lg:py-[30px]">
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
