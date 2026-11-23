import Image from "next/image";
import NavItems from "./NavItems";
import Button from "./Button";
import logo from "@/assets/images/logo.png";
import ToggleThemeButton from "./ToggleThemeButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-2 border-b dark:border-purple-800/70 ">
      <Link href="/" className="logo flex items-center gap-2">
        <div className="w-11 h-11 rounded-full overflow-hidden shrink-0">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold">Naeem</h3>
      </Link>

      {/* Nav Items link. */}
      <NavItems />

      <div className="flex items-center justify-center gap-4">
        <ToggleThemeButton />

        <Button />

      </div>
    </div>
  );
}
