import LogisticsDriverDetails from "@/components/LogisticsDriverDetails";
import { logisticsDriverData } from "@/data";

const page = ({ params }: { params: { 'driver-id': string } }) => {
	const { 'driver-id': id } = params
    const itemData = logisticsDriverData.find((obj) => obj.driverId === +id);
    
	return (
		<div>
			<LogisticsDriverDetails id={id} {...itemData}/>
		</div>
	);
}
export default page