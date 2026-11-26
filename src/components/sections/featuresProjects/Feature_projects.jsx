import Link from "next/link";
import Feature_project_section from "./Feature_project_section";
import { MoveRight } from "lucide-react";

export default function FeatureProjects() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="font-medium tracking-wide text-xl">Featured Projects</h1>
        <Link href="/projects" className="flex items-center gap-2 bg-blue-400/40 px-4 py-1 rounded-2xl">View All Project <MoveRight /></Link>
        
      </div>

      <Feature_project_section />
    </div>
  );
}
