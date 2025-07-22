"use client";

import Link from "next/link";
import { Mountain, Menu, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { useEditMode } from "@/hooks/use-edit-mode";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function AppHeader() {
  const { isEditMode, toggleEditMode } = useEditMode();

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#" className="flex items-center gap-2 font-semibold font-headline text-lg mr-4">
            <Mountain className="h-6 w-6" />
            <span>Profile Forge</span>
          </Link>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-foreground/60 transition-colors hover:text-foreground/80 font-medium">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="#" className="flex items-center gap-2 text-lg font-semibold font-headline mb-4">
                  <Mountain className="h-6 w-6" />
                  <span>Profile Forge</span>
                </Link>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="flex items-center space-x-2">
            <Switch id="edit-mode-toggle" checked={isEditMode} onCheckedChange={toggleEditMode} />
            <Label htmlFor="edit-mode-toggle" className="flex items-center gap-2 cursor-pointer">
              <Edit className="h-4 w-4" />
              <span>Edit Mode</span>
            </Label>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
