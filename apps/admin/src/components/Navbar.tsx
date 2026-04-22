"use client"

import Link from 'next/link'
import { LogOut, Moon, Settings, Sun, User } from "lucide-react"
import { useTheme } from 'next-themes'

// SHADCN
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button'
import { SidebarTrigger } from './ui/sidebar'


function Navbar() {
    const { theme, setTheme } = useTheme()

    return (
        <div>
            <nav className='p-4 flex items-center justify-between'>
                {/* LEFT  */}
                <SidebarTrigger />
                {/* RIGHT */}
                <div className="flex items-center gap-4">
                    <Link href={"/"}>Dashboard</Link>
                    {/* THEME MENU  */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {/* USER MENU  */}
                    <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://lh3.googleusercontent.com/a/ACg8ocICwDpzwqdKG0hWtq4_xZOKDDufk9l2ICx-vIlFaGJGSgVjChpMIA=s288-c-no" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <User className='h-[1.2rem] w-[1.2rem] mr-2' /> Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className='h-[1.2rem] w-[1.2rem] mr-2' /> Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem variant='destructive'>
                            <LogOut className='h-[1.2rem] w-[1.2rem] mr-2' /> Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>

                
            </nav>
        </div>
    )
}

export default Navbar
