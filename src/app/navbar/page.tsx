"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function Navbar() {
  return (
    <header className="bg-black">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-4">
        <NavigationMenu>
          <NavigationMenuList className="flex h-16 items-center gap-6">
            {/* Brand */}
            <NavigationMenuItem>
              <Link href="/"  passHref>
                <NavigationMenuLink className="text-white font-semibold text-lg">
                  MyApp
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Links */}
            <NavigationMenuItem>
              <Link href="/features" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "text-gray-300 hover:text-white transition-colors"
                  )}
                >
                  Features
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
