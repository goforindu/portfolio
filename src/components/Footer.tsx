// app/components/Footer.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6 text-center">
        {/* Footer Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          Let’s build something together
        </h2>

        {/* CTA Button */}
        <Link href="/contacts">
          <Button className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-lg">
            Contact Me
            <Mail className="ml-2 h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </Link>

        {/* Footer Info */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Indu Kushwaha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
