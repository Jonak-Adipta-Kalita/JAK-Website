import Image from "next/image";
import img from "@/../public/My Pic.png";

const MyPic = () => {
    return (
        <div className="relative w-100">
            <Image
                src={img}
                alt="My Pic"
            />
        </div>
    )
}

export default MyPic;
