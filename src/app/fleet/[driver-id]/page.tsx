// import ItemDetails from "@/components/ItemDetails";
import { driverData } from "@/data";

const page = ({ params }: { params: { 'driver-id': string } }) => {
	const { 'driver-id': id } = params
    const itemData = driverData.find((obj) => obj.driverId === +id);
    
	return (
		<>
			{/* <ItemDetails id={id} {...itemData}/> */}
			<h1>Hiii</h1>
		</>
	);
}
export default page