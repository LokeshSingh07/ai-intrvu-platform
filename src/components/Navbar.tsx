"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { platformName } from "@/data/constant";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const {data:session, status} = useSession();
  const isLoggedIn = status === "authenticated";


  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">{platformName}</Link>


        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-2">
          {
            isLoggedIn ? 
            <>
            <Link href={"/dashboard"}>
              <Button className="ml-4" variant={"gradient"}>
                Dashboard
              </Button>
            </Link> 
            <Button 
              variant={"link"}
              onClick={async()=>{
                await signOut({callbackUrl: "/"})
              }}
            >
              Logout
            </Button> 
            </> : 
          (
            <div>        
              <Link href={"/auth"}>
                <Button className="ml-4" variant={"link"}>
                  Signin
                </Button>
              </Link>
              <Link href={"/auth"}>
                <Button variant={"gradient"}>
                  Get Started
                </Button>
              </Link>

            </div>
          )
          }
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
        </button>
      </div>



      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 p-6">
            <li>
                <Link href={"/auth"}>
                  <Button className="w-full" variant={"secondary"} onClick={() => setIsOpen(false)}> Singin</Button>
                </Link>
            </li>
            <li>
              <Link href={"/auth"}>
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  onClick={() => setIsOpen(false)}
                  >
                  Get Started
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
