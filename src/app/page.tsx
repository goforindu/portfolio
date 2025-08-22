import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProjectsPage from "./projects/page";
import AboutPage from "./about/page";
import ContactPage from "./contacts/page";
import SkillPage from "./skills/page";
import Link from "next/link";
import BlogPage from "./blogs/page";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-6 text-center bg-[#0f172a] overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.15),transparent_70%)] before:animate-pulse before:blur-3xl before:z-0"></div>

        {/* Profile Picture */}
        <div className="flex justify-center z-10 mb-6">
          <img
            src="/images/profile_pic.jpg"
            alt="Profile"
            className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-green-500 shadow-lg"
          />
        </div>

        {/* Intro Text */}
        <div className="z-10 max-w-2xl text-white px-2">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold drop-shadow mb-4">
            Hi, I'm <span className="text-green-400">Indu Kushwaha</span>
          </h1>

          <p className="text-sm sm:text-base md:text-xl text-gray-300 font-medium mb-6 leading-relaxed">
            MERN Stack Web Developer with 7+ years of experience building{" "}
            <span className="text-green-400 font-semibold">scalable</span>,{" "}
            <span className="text-green-400 font-semibold">secure</span>, and{" "}
            <span className="text-green-400 font-semibold">user-friendly</span>{" "}
            applications.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            {/* CTA Button */}
            <Link href="/contacts">
              <Button className=" bg-red-400 hover:bg-red-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-lg">
                Hire Me!
                <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button className=" bg-green-600 hover:bg-green-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-lg">
                See My Work
                <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Other sections */}
      <AboutPage />
      <SkillPage />
      <ProjectsPage />
      <BlogPage />
      <ContactPage />
    </>
  );
}
