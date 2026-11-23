import { ArrowDownToLine, BriefcaseBusiness, SquareArrowUpRightExit } from "lucide-react";

const data = {
  name: "Naeem Shaikh",
  occ: "Full Stack Web Developer",
  description:
    "I build modern and responsive web applications using MERN stack. Let's create something amazing togather.",
  github: "https://github.com/9598Naimshaikh",
  linkedin: "https://www.linkedin.com/in/naeem-shaikh-9032b5289/",
  xtwitter: "https://x.com/Naim_Shaikh90",
  instagram: "",
};
export default function First_part() {
  return (
    <div className="w-full space-y-2 flex flex-col justify-center">
      <div className="mb-5 bg-linear-180 border border-blue-400/50 drop-shadow-xl drop-shadow-blue-600 rounded-full px-4 py-1/2 flex items-center gap-2 w-fit">
        <BriefcaseBusiness className="w-3" />
        <p className="text-xs tracking-wide">I am open to work</p>
      </div>

      <h1 className="font-bold tracking-wide text-3xl">
        Hi, I&apos;m <span className="text-blue-500">Naeem Shaikh</span>
      </h1>

      <h2 className="font-bold text-xl">Full Stack Web Developer</h2>

      <p className="max-w-md">I build modern and responsive web applications using MERN stack. Let&apos;s create something amazing togather!</p>

      <div className="my-5 flex items-center gap-4">
        <button className="flex items-center justify-center gap-3 bg-linear-270 to-cyan-600 from-purple-600 text-white px-4 py-2">
            <span>View My Projects</span>
            <SquareArrowUpRightExit className="w-5" />
        </button>
        <button className="flex items-center justify-center gap-3 px-4 py-2 border-2 border-blue-600/80">
            <span>Download CV</span>
            <ArrowDownToLine className="w-5" />
        </button>
      </div>
    </div>
  );
}
