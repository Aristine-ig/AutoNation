"use client";

import { Moon } from "lucide-react";
// import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  // const { theme, setTheme } = useTheme();

  return (
   
     <Button variant="ghost" size="icon" disabled>
      <Moon className="h-4 w-4" />
      <span className="sr-only">Dark mode only</span>
    </Button>
  );
}
