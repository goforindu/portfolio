const testimonials = [
  {
    name: "Shubham Gupta",
    role: "SDE II, devicethread",
    img: "/images/shubham_profile.jpeg",
    quote:
      "I had the pleasure of working alongside Indu Kushwaha as a peer at our previous company, where we collaborated on several web and mobile app projects using React and React Native with CapacitorJS. Indu is a capable SDE who can independently deliver end-to-end frontend modules, from UI to API integration. Her technical strengths in React and mobile app development are solid, and she brings a thoughtful approach to problem-solving. She’s focused and driven, and once you get into a rhythm with her, working together becomes smooth and productive. She's someone you can rely on to get things done. I’d gladly work with her again anytime.",
  },
  {
    name: "Shweta Bajpai",
    role: "Project Coordinator, Vixr",
    img: "/images/shweta_profile.jpeg",
    quote:
      "I had the pleasure of working with Indu and have always admired her dedication and strong work ethic. She is truly passionate about what she does and brings a great deal of commitment to meeting deadlines. Her willingness to learn, take on new challenges, and contribute to diverse projects makes her stand out. With solid domain knowledge and a never-give-up attitude, Indu is undoubtedly an asset to any team she becomes a part of.",
  },
  {
    name: "Sambit Nayak",
    role: "SDE II, devicethread",
    img: "/images/sambit.jpeg",
    quote:
      "Indu always completes every task with dedication and honesty. She ensures full clarity by asking the right questions until she fully understands the design or requirement, preventing issues later. Beyond work, she genuinely celebrates others’ happiness, which makes her a wonderful person to work with.",
  },
  {
    name: "Rajeev Kumar",
    role: "Founder, Cosmorugs",
    img: "/images/rajeev_profile.png",
    quote:
      "Working with Indu has been a wonderful experience. She developed and optimized our web solutions with great attention to detail and efficiency. From understanding our business requirements to delivering user-friendly features, Indu ensured everything was smooth and well-executed. Her deep knowledge of the MERN stack, problem-solving skills, and dedication to timely delivery have greatly helped Cosmorugs enhance its digital presence. We highly appreciate her professionalism and would strongly recommend her for any frontend or full-stack development projects.",
  },
];
import Image from "next/image";
export default function AboutPage() {
  return (
    <main className="bg-[#0f172a] text-white px-6 py-20 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-400 mb-8">About Me</h1>
        <div className="flex justify-center ">
          {/* <img
            src="/images/profile_pic.jpg"
            alt="Profile"
            className="w-42 h-42 rounded-full border-4 border-green-500 shadow-lg"
          /> */}
        </div>
        {/* Bio */}
        <p className="text-gray-300 text-lg leading-relaxed">
          <span>I&aposm a</span>
          <span className="text-green-400 font-semibold">
            MERN & Next.js Developer
          </span>
          <span>with over</span>
          <span className="text-green-400 font-semibold">
            7+ years of experience
          </span>
          <span>
            building scalable and secure web applications. I specialize in
            frontend and full-stack development using
          </span>
          <span className="text-green-400 font-semibold">TypeScript,</span>
          <span className="text-green-400 font-semibold">Tailwind CSS,</span>
          <span className="text-green-400 font-semibold">Node.js</span>and
          <span className="text-green-400 font-semibold">MongoDB.</span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {[
            "Clean Code",
            "Performance Focused",
            "Full Stack",
            "Problem Solver",
            "Team Player",
          ].map((tag, index) => (
            <span
              key={index}
              className="bg-green-700 text-white text-sm px-4 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="mt-16">
        <h2 className="text-2xl text-green-300 font-semibold mb-6 text-center">
          Testimonials
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-6 rounded-xl shadow-md border border-slate-700 text-left"
            >
              <p className="text-gray-300 mb-4 italic">“{t.quote}”</p>
              <div className="flex-shrink-0">
                <Image
                  src={t.img} // LinkedIn image link or /public/photo.jpg
                  alt="Client photo"
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="text-green-400 font-semibold">{t.name}</div>
              <div className="text-sm text-gray-400">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
