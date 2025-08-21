"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xwpqdjlg", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Message sent successfully ✅");
      form.reset();
    } else {
      setStatus("Oops! Something went wrong ❌");
    }
  };
  return (
    <main className="min-h-screen bg-[#0f172a] text-white px-6 py-20">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-green-400 mb-8">Get in Touch</h1>
        <p className="text-gray-300 mb-10">
          Feel free to reach out via the form below or connect with me on social
          media.
        </p>

        <form
          className="space-y-6"
          method="POST"
          action="https://formspree.io/f/xwpqdjlg"
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            className="bg-[#1e293b] text-white "
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-[#1e293b] text-white"
          />
          <Textarea
            placeholder="Your Message"
            name="message"
            className="bg-[#1e293b] text-white"
            rows={6}
          />
          <Button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white w-full"
          >
            Send Message
          </Button>
        </form>

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://github.com/goforindu"
            target="_blank"
            className="text-red-400 hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/indu-kushwaha-a83ab139/"
            target="_blank"
            className="text-blue-400 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="mailto:goforindu@gmail.com"
            className="text-yellow-300 hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </main>
  );
}
