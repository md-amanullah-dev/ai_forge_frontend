"use client";

import Link from "next/link";

import { ThemeToggle } from "./theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog/hello-world" },
  { label: "Profile", href: "/user/1" },
] as const;

const navLinkClasses =
  "rounded-md px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400";

export function Header() {
  return (
    <header className="w-full max-w-[1440px] !px-12 font-sans shadow-sm">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-700 transition-colors hover:text-blue-900"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 font-black text-white">
            N
          </span>
          NextStarter
        </Link>

        <div className="flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-2">
              {navLinks.map(({ label, href }) => (
                <NavigationMenuItem key={href}>
                  <NavigationMenuLink asChild>
                    <Link href={href} className={navLinkClasses}>
                      {label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
