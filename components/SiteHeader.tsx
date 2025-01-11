import React from "react";
import MainNav from "@/components/MainNav";
import MobileNav from "@/components/MobileNav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

export const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const SiteHeader = () => {
  return (
    <header className="flex h-15 w-full shrink-0 items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">
      <MainNav />
      <MobileNav />
      <div className="flex h-14 items-center px-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2">
              <Avatar className="size-8">
                <AvatarImage
                  src="/avatar.jpg"
                  alt="avatar"
                />
                <AvatarFallback>JJ</AvatarFallback>
              </Avatar>
              <div className="font-medium text-sm">John Doe</div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 mr-4">
            <DropdownMenuLabel>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="size-8">
                    <AvatarImage
                      src="/avatar.jpg"
                      alt="avatar"
                    />
                    <AvatarFallback>JJ</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-0.">
                    <div className="text-sm font-medium">John Doe</div>
                    <div className="text-xs dark: text-gray-400">
                      john@abc.com
                    </div>
                  </div>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href={"#"}
                className="flex w-full"
                prefetch={false}
              >
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href={"#"}
                className="flex w-full"
                prefetch={false}
              >
                Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default SiteHeader;
