"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogOut, Menu, X } from "lucide-react";
import { platformName } from "@/data/constant";
import { signOut, useSession } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const {data:session, status} = useSession();
  const isLoggedIn = status === "authenticated";
  const router = useRouter();



  const handleLogout = async () => {
    toast("Signing you out...");
    await signOut({ redirect: false });

    setTimeout(() => {
      toast.success("Signed out successfully!");
      router.push("/auth");
    }, 800);
  };



  return (
    <header className="bg-[#FAF8F4]/90 backdrop-blur-sm border-b border-[#12151B]/10 sticky top-0 z-50">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Sans:wght@400;500&display=swap');
        .nav-display { font-family: 'Space Grotesk', sans-serif; }
        .nav-body { font-family: 'IBM Plex Sans', sans-serif; }
      `}</style>

      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="nav-display flex items-center gap-2 text-xl font-bold text-[#12151B]">
          <span className="w-2 h-2 rounded-full bg-[#35D0BA]" />
          {platformName}
        </Link>


        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-3">
          {
            isLoggedIn ? 
            <>
            <Link href={"/dashboard"}>
              <Button className="nav-body bg-[#12151B] hover:bg-[#1E222B] text-white rounded-lg">
                Dashboard
              </Button>
            </Link> 
            <Button 
              variant={"link"}
              onClick={handleLogout}
              className="nav-body text-[#6B7280] hover:text-[#12151B]"
            >
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button> 
            </> : 
          (
            <>
              <Link href={"/auth"}>
                <Button className="nav-body text-[#12151B] hover:text-[#3E63DD]" variant={"link"}>
                  Sign in
                </Button>
              </Link>
              <Link href={"/auth"}>
                <Button className="nav-body bg-[#12151B] hover:bg-[#1E222B] text-white rounded-lg">
                  Get started
                </Button>
              </Link>
            </>
          )
          }
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6 text-[#12151B]" /> : <Menu className="w-6 h-6 text-[#12151B]" />}
        </button>
      </div>



      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF8F4] border-t border-[#12151B]/10">
          <ul className="flex flex-col gap-3 p-6">
           {isLoggedIn ? (
              <>
                <li>
                  <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                    <Button className="nav-body w-full bg-[#12151B] hover:bg-[#1E222B] text-white rounded-lg">
                      Dashboard
                    </Button>
                  </Link>
                </li>
                <li>
                  <Button
                    className="nav-body w-full border border-[#12151B]/15 text-[#12151B] rounded-lg"
                    variant="outline"
                    onClick={() => {
                      setIsOpen(false);
                      handleLogout();
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/auth" onClick={() => setIsOpen(false)}>
                    <Button className="nav-body w-full border border-[#12151B]/15 text-[#12151B] rounded-lg" variant="outline">
                      Sign in
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="/auth" onClick={() => setIsOpen(false)}>
                    <Button
                      className="nav-body w-full bg-[#12151B] hover:bg-[#1E222B] text-white rounded-lg"
                    >
                      Get started
                    </Button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;