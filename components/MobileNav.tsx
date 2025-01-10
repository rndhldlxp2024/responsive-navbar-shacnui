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

// const mobileItems = ["A", "B", "C"];

const MobileNav = () => {
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
      <SheetContent side={"left"}>
          <SheetTitle className="hidden">Menu</SheetTitle>
        <div className="flex flex-col items-start">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant={"link"}
              onClick={() => setOpen(false)}
            >
              {item}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
