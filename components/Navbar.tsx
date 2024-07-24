"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { walletStore } from "@/store/states"
import ConnectedNetwork from "./ConnectedNetwork"
import { Button } from "./ui/button"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

const Navbar = () => {
    const { selectedAccount,chainId } = walletStore((state: any) => state.wallet)
    const changeAccount = async()=>{
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        })
    }
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger><ConnectedNetwork /></NavigationMenuTrigger>
                    <NavigationMenuContent className="pl-8 pr-8 pb-3 pt-3">
                        <div className="flex justify-center items-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                            {chainId ? (<p className="text-sm font-medium leading-none w-[200px] md:w-[200px] md:grid-cols-2 lg:w-[200px] ">
                                chainId: {chainId}
                            </p>) : <p className="text-sm font-medium leading-none w-[200px] md:w-[200px] md:grid-cols-2 lg:w-[200px] ">
                                No Network Connected
                            </p>
                            }

                        </div>
                        {selectedAccount ? (<div className="flex justify-center items-center"><Button onClick={changeAccount}>Change Network?</Button></div>) :
                            <div className="flex justify-center items-center"><Button onClick={changeAccount}>Connect to a Network?</Button></div>}


                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>{selectedAccount ? selectedAccount : "No Account"}</NavigationMenuTrigger>
                    <NavigationMenuContent className="pl-8 pr-8 pb-3 pt-3">
                        <div className="flex justify-center items-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                            {selectedAccount ? (<p className="text-sm font-medium leading-none w-[200px] md:w-[200px] md:grid-cols-2 lg:w-[200px] ">
                                Connected to the following account
                            </p>) : <p className="text-sm font-medium leading-none w-[200px] md:w-[200px] md:grid-cols-2 lg:w-[200px] ">
                                Not Account Connected
                            </p>
                            }

                        </div>
                        {selectedAccount ? (<div className="flex justify-center items-center"><Button onClick={changeAccount}>Change Account?</Button></div>):
                            <div className="flex justify-center items-center"><Button onClick={changeAccount}>Connect Account?</Button></div>}
                        

                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Navbar

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
