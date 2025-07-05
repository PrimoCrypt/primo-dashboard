"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MdLocalShipping } from "react-icons/md";
import { IoPeopleSharp, IoCarSportSharp } from "react-icons/io5";
import { FaBox } from "react-icons/fa";
import Link from "next/link";

const DeliveriesPage = () => {
	const deliverySections = [
		{
			title: "Orders",
			description: "Manage delivery orders and track their status",
			icon: MdLocalShipping,
			href: "/deliveries/orders",
			color: "text-blue-500",
		},
		{
			title: "Riders",
			description: "View and manage delivery riders",
			icon: IoPeopleSharp,
			href: "/deliveries/riders",
			color: "text-green-500",
		},
		{
			title: "Company",
			description: "Manage delivery company information and managers",
			icon: FaBox,
			href: "/deliveries/company",
			color: "text-purple-500",
		},
		{
			title: "Drivers",
			description: "View and manage delivery drivers",
			icon: IoCarSportSharp,
			href: "/deliveries/drivers",
			color: "text-orange-500",
		},
	];

	return (
		<div className="p-6 max-lg:p-4">
			<div className="mb-8">
				<h1 className="text-3xl font-bold text-gray-900 mb-2">Deliveries</h1>
				<p className="text-gray-600">Manage all aspects of your delivery operations</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{deliverySections.map((section) => {
					const IconComponent = section.icon;
					return (
						<Link key={section.title} href={section.href}>
							<Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
								<CardHeader className="pb-3">
									<div className="flex items-center gap-3">
										<IconComponent className={`w-8 h-8 ${section.color}`} />
										<CardTitle className="text-lg font-semibold text-gray-900">
											{section.title}
										</CardTitle>
									</div>
								</CardHeader>
								<CardContent>
									<CardDescription className="text-gray-600">
										{section.description}
									</CardDescription>
								</CardContent>
							</Card>
						</Link>
					);
				})}
			</div>

			<div className="mt-8">
				<Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
					<CardHeader>
						<CardTitle className="text-xl font-semibold text-gray-900">
							Delivery Operations Overview
						</CardTitle>
						<CardDescription>
							Monitor and manage your complete delivery ecosystem
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
							<div>
								<h4 className="font-medium text-gray-900 mb-2">Quick Actions</h4>
								<ul className="space-y-1">
									<li>• View active delivery orders</li>
									<li>• Manage rider assignments</li>
									<li>• Track delivery performance</li>
									<li>• Update company settings</li>
								</ul>
							</div>
							<div>
								<h4 className="font-medium text-gray-900 mb-2">Key Metrics</h4>
								<ul className="space-y-1">
									<li>• Total active orders</li>
									<li>• Available riders</li>
									<li>• Delivery success rate</li>
									<li>• Average delivery time</li>
								</ul>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default DeliveriesPage; 