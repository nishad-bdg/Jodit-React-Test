import Image from "next/image";
import Logo from "@/public/assets/Logo.svg";
import User from "@/public/assets/User.svg";
import Menu from "@/public/assets/Menu.svg";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" />

        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {NAV_LINKS.map((nav, index) => (
            <p key={index} className="main-text font-medium">
              {" "}
              {nav.name}
            </p>
          ))}
        </div>
      </div>

      <div className="flex gap-x-5 lg:gap-x-2">
        <p className="hidden lg:block main-text font-medium pr-[56px]">
          Open an account
        </p>
        <Image src={User} alt="User Profile" />
        <span className="hidden font-medium main-text lg:block">Sign In</span>
        <Image src={Menu} alt="Menu" className="lg:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
