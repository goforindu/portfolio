"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // icons

const navItems = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contacts" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0f172a] shadow-md sticky top-0 z-50 border-b border-slate-700">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-green-400 font-bold text-xl"
        >
          <img
            src="/images/profile_pic.jpg"
            alt="Profile"
            className="w-14 h-14 rounded-full border-4 border-green-500 shadow-lg"
          />
          <span className="hidden sm:block">Indu Kushwaha</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={`text-lg ${
                  pathname === item.href
                    ? "text-green-400 font-semibold"
                    : "text-white hover:text-green-400"
                }`}
              >
                {item.label}
              </Button>
            </Link>
          ))}
          <a
            href="/Indu_Kushwaha_MERNStack_Resume.pdf"
            download="Indu_Kushwaha_MERNStack_Resume.pdf"
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-8 h-8 text-green-400" />
            ) : (
              <Menu className="w-8 h-8 text-green-400" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-slate-700">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)} // close after click
              className={`block px-6 py-3 text-lg ${
                pathname === item.href
                  ? "text-green-400 font-semibold"
                  : "text-white hover:text-green-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/Indu_Kushwaha_MERNStack_Resume.pdf"
            download="Indu_Kushwaha_MERNStack_Resume.pdf"
            className="block py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-center"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
