import Image from "next/image";
import DocumentImage from "/public/images/document.png";

const Document = () => {
  return (
		<div className="relative border w-fit h-fit rounded-xl border-opacity-10 border-white border-solid">
			<div className=" p-3">
				<Image src={DocumentImage} alt="" />
			</div>
			<div className="absolute w-full bottom-0 bg-[#4D4D4D] text-white rounded-b-xl px-2 py-3">
				<p>Fleet License</p>
			</div>
		</div>
	);
}
export default Document