import Image from "next/image";
import profile from "@/assets/images/profile_image.jpg";

export default function Second_part() {
    return (
        <div className="flex items-center justify-center">
            <div className="relative drop-shadow-2xl drop-shadow-purple-600/40 shadow-2xl shadow-cyan-600/20 bg-linear-270 to-cyan-600 from-purple-800 w-100 h-100 rounded-[50%_50%_31%_69%_/_73%_35%_65%_27%]">
                <div className="absolute w-96 h-96 bg-linear-180 to-blue-600 from-purple-600 border-8 overflow-hidden flex items-center justify-center border-white/50 rounded-[39%_61%_65%_35%_/_49%_45%_55%_51%]">
                    <Image src={profile} width={100} height={100} alt="my image" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
}