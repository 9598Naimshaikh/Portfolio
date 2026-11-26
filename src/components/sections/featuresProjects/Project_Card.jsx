import Image from "next/image";
import Link from "next/link";
import chatSupportProject from "@/assets/images/chatSupportProject.png"
import { MoveRight } from "lucide-react";

export default function Project_Card() {
    return (
        <div className="w-full min-h-20 bg-blue-400/20 p-2 rounded-2xl">

            <Image src={chatSupportProject} alt="Project Image" width={100} height={100} className="w-full h-56 my-2 rounded-md bg-green-500" />

            <h2 className="text-xl font-bold tracking-wide">ChatSupportAI</h2>
            <p className="text-sm">AI-Powered Customer Support Chatbot</p>

            <Link href="/" className="flex items-center gap-2 my-2">View Project <MoveRight /></Link>

        </div>
    );
}