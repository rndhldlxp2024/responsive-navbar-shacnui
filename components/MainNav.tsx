"use client";

import Link from "next/link";
import { menuItems } from "./SiteHeader";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

// const mainNavItems = ["A", "B", "C"];

const MainNav = () => {
  const pathname = usePathname();
  return (
    <div className="mr-4 hidden gap-2 md:flex">
      {menuItems.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <Button
            key={index}
            variant={"link"}
            asChild
          >
            <Link
              href={item.href}
              className={`${
                isActive ? "link_active" : ""
              } hover:link_active hover:no-underline`}
            >
              {item.label}
            </Link>
          </Button>
        );
      })}
    </div>
  );
};

export default MainNav;
