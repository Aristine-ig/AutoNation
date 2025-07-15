"use client";

import { useState } from "react";
import Link from "next/link";
import { useUser, SignOutButton, SignIn } from "@clerk/nextjs";



import {
  Heart,
  Menu,
  X,
  MessageCircle,
  AudioWaveform,
  LogOut,
  LogIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
// import { SignInButton } from "@clerk/nextjs";

export function Header() {
  const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/#pricing", label: "Pricing" },
    // { href: "/roadmap", label: "Roadmap" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <div className="w-full fixed top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="absolute inset-0 border-b border-primary/10" />
      <header className="relative max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 transition-opacity hover:opacity-80"
          >
            {/* <AudioWaveform className="h-7 w-7 text-primary animate-pulse-gentle" /> */}
            <div className="flex flex-col">
              {/* <h2 className="text-5xl font-bold text-white mb-6">
                Choose Your Perfect Plan
              </h2> */}
              <h2 className=" text-3xl font-grotesk text-white h2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                AutoNation
              </h2>
              {/* <span className="text-xs dark:text-muted-foreground">
                your automation companion{" "}
              </span> */}
            </div>
          </Link>

          <div className="flex items-center gap-10">
            <nav className="relative font-code text-2xl text-n-1 transition-colors hover:text-color-1 hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className=" px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {/* <ThemeToggle /> */}

              {user ? (
                <>
                  {/* <Button
                    asChild
                    className="hidden md:flex gap-2 bg-primary/90 hover:bg-primary"
                  >
                    <Link href="/dashboard">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Start Chat
                    </Link>
                  </Button> */}
                  <SignOutButton>
                    <Button
                      variant="outline"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {/* <LogOut className="w-4 h-4 mr-2" /> */}
                      Sign out
                    </Button>
                  </SignOutButton>
                </>
              ) : (
                //  <Button href="/sign-in" white onClick={() => { }}>
                //     Sign In
                //   </Button>
                  <Button className="">
                    {/* <LogIn className="w-4 h-4 mr-2" /> */}
                    Sign In
                  </Button>
              )}
              {/* <Button ref="/sign-in"  onClick={() => { }}>
                 Sign In
                </Button> */}

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-primary/10">
            <nav className="flex flex-col space-y-1 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {user && (
                <Button
                  asChild
                  className="mt-2 mx-4 gap-2 bg-primary/90 hover:bg-primary"
                >
                  <Link href="/dashboard">
                    <MessageCircle className="w-4 h-4" />
                    <span>Start Chat</span>
                  </Link>
                </Button>
              )}
            </nav>
          </div>
        )}
      </header>

      {/* <LoginModal /> */}
    </div>
  );
}
