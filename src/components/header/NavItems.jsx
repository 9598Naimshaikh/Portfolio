"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItems() {
    const path_name = usePathname();

    return (
        <div className="flex items-center gap-4">
            <Link href="/" className={`px-3 py-1 ${path_name === "/" ? "border-b-3 border-purple-600" : ""}`}>Home</Link>
            <Link href="/about" className={`px-3 py-1 transition-all duration-200 ${path_name === "/about" ? "border-b-3 border-purple-600" : ""}`}>About</Link>
            <Link href="/projects" className={`px-3 py-1 transition-all duration-200 ${path_name === "/projects" ? "border-b-3 border-purple-600" : ""}`}>Projects</Link>
            <Link href="/skills" className={`px-3 py-1 transition-all duration-200 ${path_name === "/skills" ? "border-b-3 border-purple-600" : ""}`}>Skills</Link>
            <Link href="/contact" className={`px-3 py-1 transition-all duration-200 ${path_name === "/contact" ? "border-b-3 border-purple-600" : ""}`}>Contact</Link>
        </div>
    );
}