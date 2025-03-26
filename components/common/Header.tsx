import { FileText } from "lucide-react";
import { Button } from "../ui/button";
import NavLink from "./nav-link";

const Header = () => {
  const isLoggedin = false;

  return (
    <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex items-center gap-2 lg:gap-3 shrink-0">
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transition duration-200 ease-in-out" />
          <span className="font-extrabold text-lg lg:text-xl text-gray-900">
            Sommaire
          </span>
        </NavLink>
      </div>

      <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
        <NavLink href="/#pricing" className="text-base lg:text-xl">Pricing</NavLink>
        {isLoggedin && (
          <NavLink href="/dashboard" className="text-base lg:text-xl">Your Summaries</NavLink>
        )}
      </div>

      <div className="flex lg:justify-end lg:flex-1">
        {isLoggedin ? (
          <div className="flex gap-3 items-center">
            <NavLink href="/upload" className="text-base lg:text-xl">Upload a PDF</NavLink>
            <div>Pro</div>
            <Button className="rounded-full">User</Button>
          </div>
        ) : (
          <div>
            <NavLink href="/sign-in" className="text-base lg:text-xl">Sign In</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
