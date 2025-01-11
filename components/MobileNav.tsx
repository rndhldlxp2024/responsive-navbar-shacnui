"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { menuItems } from "./SiteHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";

// const mobileItems = ["A", "B", "C"];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      {/* This button will trigger open the the mobile sheet menu */}
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size={"icon"}
          onClick={() => setOpen(true)}
          className="md:hidden"
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="sm:w-[300px] w-[250px] px-0"
      >
        <SheetTitle className="hidden">Menu</SheetTitle>
        <div className="flex flex-col items-start">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Button
                key={index}
                variant={"link"}
                onClick={() => setOpen(false)}
                asChild
                className="w-full"
              >
                <Link
                  href={item.href}
                  className={`${
                    isActive ? "link_active" : ""
                  } hover:link_active hover:no-underline hover:bg-gray-100 dark:hover:bg-gray-800`}
                >
                  {item.label}
                </Link>
              </Button>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
