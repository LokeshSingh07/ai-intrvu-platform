'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function NotFound() {
    return (
      <div className="flex h-screen flex-col items-center justify-center ">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-indigo-800 to-purple-400 bg-clip-text text-transparent animate-pulse">
          404 
        </h1>
        <h2 className="mt-2 text-3xl font-semibold">Page Not Found</h2>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
          Oops! The page you are looking for does not exist.
        </p>
        <Link href='/'>
            <Button
              className={"h-12 px-4 w-fit mt-5 md:mt-10 rounded-full"}
            >
                Go to Home Page
            </Button>
        </Link>
      </div>
    );
  }
  