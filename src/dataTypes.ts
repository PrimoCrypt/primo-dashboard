export interface AdminDataProps {
	adminName: string;
	totalDrivers: number;
	totalRiders: number;
	totalManagers: number;
	totalUsers: number;
	totalRevenue: number;
	totalMinedCoins: number;
}

export type ReviewDataProps = {
	userName: string;
	userDescription: string;
	stars: number;
};

export interface RideDataProps {
	rideId: number;
	driverName: string;
	userName: string;
	pickAddress: string;
	dropAddress: string;
	date: string;
	fare: number;
	status: "Cancelled" | "Completed" | "Ongoing";
	vehicleType: string;
}

export interface CompanyDataProps {
	managerId: number;
	companyName: string;
	companyId: string;
	noOfRiders: number;
}

export interface LogisticsDriverDataProps {
	driverId: number;
	companyName: string;
	vehicleType: string;
	fare: number;
}

export interface RiderDataProps {
	driverId: number;
	companyName: string;
	vehicleType: string;
	packagesDelivered: number;
}

export interface OrderDataProps {
	orderId: number;
	deliveredBy: string;
	deliveredTo: string;
	pickUp: string;
	destination: string;
	completionTime: string;
}

export interface SignUpRequestsCabHailingDataProps {
	id: number;
	name: string;
	vehicleType: string;
	vehicleNumber: string;
	status: "Approved" | "Pending" | "Declined";
	date: string;
}

export interface CabHailingUserInfoProps {
	name: string;
	age: number;
	driverRole: string;
	gender: string;
	address: string;
	accountName: string;
	accountNumber: number;
	vehicleColor: string;
	vehicleYear: number;
	vehicleModel: string;
	vehicleBrand: string;
	plateNumber: string;
}

export interface SignUpRequestsLogisticsDataProps {
	id: number;
	name: string;
	vehicleType: string;
	vehicleNumber: string;
	status: "Approved" | "Pending" | "Declined";
	date: string;
}

export interface UserDataProps {
	date: string;
	time: string;
	pickupAddress: string;
	destination: string;
	cost: number;
	coinsMined: number;
	distanceCovered: number;
}
export interface UsersDataProps {
	userId: number;
	email: string;
	contactNo: number;
	verification: "Verified"|"Unverified";
	reviews: 1.0 | 2.0 | 3.0 | 4.0 | 5.0;
	totalRides: number;
	cancelledRides: number;
	completedRides: number;
	amountSpent: number;
	data ?: UserDataProps[]
}

export interface ItemDetailsProps {
	companyName?: string;
	id: string;
	status ?: "Verified" | "Unverified";
	total?: number;
	taken?: number;
	declined?: number;
	revenue?: number;
	coinsMined?: number;
	rating?: "Good" | "Excellent" | "Bad" | "Poor" | "Average"
	reviews?: ReviewDataProps[]
}

export interface DriverDataProps {
	driverId: number;
	email: string;
	contactNo: string;
	verificationStatus: "Verified"|"Unverified"
	reviews: number;
}

export interface RevenueUserDataProps {
	rideType: string;
	driversName: string;
	rideAmount: number;
	commission: number;
	driversCommission: number;
	paymentMethod: string;
}

export interface RevenueDataProps {
	rideId: number;
	userName: string;
	totalAmount: number;
	commission: number;
	driversCommission: number;
	data?: RevenueUserDataProps[];
}

export interface VehicleDatabaseProps {
	driverId: number;
	vehicleType: string;
	vehicleNumber: string;
}

export interface ReviewReportDataProps {
	rideId: number;
	driversName: string;
	rating: number;
	dateAndTime: string;
	comment: string;
}

export interface RideInvoiceDataProps {
	date: string;
	pickUp: string;
	dropOff: string;
	fare: number;
	coinsMined: number;
	distanceCovered: number;
}

export interface RidesInvoiceDataProps {
	rideId: number;
	driverName: string;
	userName: string;
	startTime: string;
	endTime: string;
	data?: RideInvoiceDataProps[];
}

export interface HangoutsHotelsProps {
	id?: number;
	hotelName: string;
	totalRooms: number;
	availableRooms: number;
	occupiedRooms: number;
	reservedRooms: number;
	monthRevenue: number;
	totalRevenue: number;
	data?: HotelProps[];
}

export interface HotelProps {
	noOfBoookingsToday: number;
	noOfBookingsThisWeek:number;
	noOfBookingsThisMonth: number;
	noOfCancellationsToday: number;
	noOfCancellationsThisWeek:number;
	noOfCancellationsThisMonth: number;
	revenueSoFar:number
	noOfBookings: number;
	noOfCancellation: number;
	revenueThisMonth: number;
	percentRemitted: number;
}
export interface HangoutsLoungesProps {
	id?: number;
	loungeName: string;
	totalTables: number;
	availableTables: number;
	occupiedTables: number;
	reservedTables: number;
	monthRevenue: number;
	totalRevenue: number;
	data?: LoungeProps[];
}

export interface LoungeProps {
	noOfBoookingsToday: number;
	noOfBookingsThisWeek: number;
	noOfBookingsThisMonth: number;
	noOfCancellationsToday: number;
	noOfCancellationsThisWeek: number;
	noOfCancellationsThisMonth: number;
	revenueSoFar: number;
	noOfBookings: number;
	noOfCancellation: number;
	revenueThisMonth: number;
	percentRemitted: number;
}
	export interface HangoutsRestaurantsProps {
		id?: number;
		restaurantName: string;
		totalTables: number;
		availableTables: number;
		occupiedTables: number;
		reservedTables: number;
		monthRevenue: number;
		totalRevenue: number;
		data?: RestaurantProps[];
	}

	export interface RestaurantProps {
		noOfBoookingsToday: number;
		noOfBookingsThisWeek: number;
		noOfBookingsThisMonth: number;
		noOfCancellationsToday: number;
		noOfCancellationsThisWeek: number;
		noOfCancellationsThisMonth: number;
		revenueSoFar: number;
		noOfBookings: number;
		noOfCancellation: number;
		revenueThisMonth: number;
		percentRemitted: number;
	}