"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ToggleThemeButton() {
    const {theme, setTheme} = useTheme("");

    return (
        <button className="flex items-center justify-center p-2 cursor-pointer" onClick={() => {
            setTheme(theme == "dark" ? "light" : "dark")
        }}>
            {theme === "light" ? <Sun /> : <Moon />}
        </button>
    );
}