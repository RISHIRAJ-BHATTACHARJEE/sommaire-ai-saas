import { Crown, FileText } from "lucide-react";
import NavLink from "./nav-link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Header = () => {

  return (
    <nav className="flex items-center gap-6 justify-between py-4 lg:px-8 px-2 mx-10">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex items-center gap-2 lg:gap-3 shrink-0">
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transition duration-200 ease-in-out" />
          <span className="font-extrabold text-lg lg:text-xl text-gray-900">
            Sommaire
          </span>
        </NavLink>
      </div>

      <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
        <NavLink href="/#pricing" className="text-base lg:text-xl">
          Pricing
        </NavLink>
        <SignedIn>
          <NavLink href="/dashboard" className="text-base lg:text-xl">
            Your Summaries
          </NavLink>
        </SignedIn>
      </div>

      <div className="flex lg:justify-end lg:flex-1">
        <SignedIn>
          <div className="flex gap-4 items-center">
            <NavLink href="/upload" className="text-base lg:text-xl">
              Upload a PDF
            </NavLink>
            <div className="flex items-center gap-1">
                <Crown size={16} className="fill-yellow-400 text-yellow-500"/>
                Pro
            </div>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </SignedIn>
        <SignedOut>
          <NavLink href="/sign-in" className="text-base lg:text-xl">
            Sign In
          </NavLink>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Header;
