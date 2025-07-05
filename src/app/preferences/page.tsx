import AppSettingsMenu from "@/components/AppSettingsMenu";

const Settings = () => {
	return (
		<div className="">
			<div className="w-full h-[1px] bg-white bg-opacity-10 mt-2 mb-4"></div>
			<div className="grid grid-cols-2 gap-14">
				<div className="flex flex-col gap-4 border-r-solid border-r-[2px] border-r-white border-opacity-10">
					
					<AppSettingsMenu />
				</div>
				<div>
					{/* <SentMessages /> */}
				</div>
			</div>
		</div>
	);
};
export default Settings;
