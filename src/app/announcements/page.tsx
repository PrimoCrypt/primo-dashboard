import PushNotificationForm from "@/components/forms/pushNotification";
import SentMessages from "@/components/SentMessages";

const Notifications = () => {
  return (
		<div className="">
			<div className="w-full h-[1px] bg-white bg-opacity-10 mt-2 mb-4"></div>
			<div className="grid grid-cols-2 gap-14">
				<div className="flex flex-col gap-4">
					<h1 className="text-2xl">Push notification</h1>
					<PushNotificationForm />
				</div>
				<div>
					<SentMessages />
				</div>
			</div>
		</div>
	);
}
export default Notifications