"use client"

import { UserButton, useAuth } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import SearchInput from "./search-input";


const NavbarRoutes = () => {
    const pathname = usePathname()
    const isTeacherPage = pathname?.startsWith("/teacher")
    const isCoursesPage = pathname?.includes("/courses")

    return (
        <>
        <div className="">
            <SearchInput />
        </div>
        <div className="ml-auto text-sky-900 text-sm flex gap-x-2">
            {isTeacherPage || isCoursesPage ?
                (<Link href={"/"}>
                    <Button size="sm" variant="ghost">
                        <LogOut className="mr-2 h-4 w-4" />
                        Exit
                    </Button>
                </Link>) : <div></div>
            }
            <UserButton afterSignOutUrl="/" />
        </div>
        </>
    )

}

export default NavbarRoutes