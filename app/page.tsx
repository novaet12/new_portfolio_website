import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-12">
      {/* HEADER / ABOUT */}
      <header className="border-2 border-black p-6 md:p-8">
        <div className="grid gap-6 md:gap-10 md:grid-cols-[220px,1fr]">
          {/* PHOTO */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-44 h-44 border-2 border-black bg-neutral-100">
              <Image
                src="/mine.JPG"
                alt="Your portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* ABOUT TEXT */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-[0.25em] uppercase">
              Your Name
            </h1>
            <p className="mt-3 pt-3 border-t-2 border-black text-[11px] uppercase tracking-[0.3em]">
              Fullstack Engineer | Specializing in Agentic AI &amp; Multi-Agent Systems
            </p>

            <div className="mt-4 text-[12px] leading-relaxed space-y-3 text-justify">
              <p>
                I'm a Fullstack Developer passionate about building modern, intelligent, and efficient software solutions — from sleek mobile apps to powerful web platforms and autonomous AI systems.
              </p>
              <p>
                On the mobile side, I specialize in Flutter, creating cross-platform applications that deliver smooth, native-like experiences on both iOS and Android.
              </p>
              <p>
                <span className="font-semibold">
                  For web development, I work with modern and performant stacks:
                </span>
                <br />
                • Next.js &amp; Nuxt for fast, SEO-friendly frontends and full-stack applications
                <br />
                • Fastify &amp; Express for lightweight, high-performance backend APIs
              </p>
              <p>
                I have a deep interest in building efficient database designs and implementations. I enjoy thinking through data modeling, indexing strategies, and query optimization to ensure systems scale well and perform under real-world load.
              </p>
              <p>
                Lately, I've been diving deep into Agentic AI — developing autonomous agents and intelligent systems that can reason, plan, and act toward goals with minimal human intervention. Combining traditional full-stack skills with AI opens up exciting possibilities, and I love being at that intersection.
              </p>
              <p>
                Whether it's crafting a responsive mobile app, optimizing a backend for speed and reliability, designing a clean data layer, or teaching an AI agent to solve complex problems — I'm driven by the challenge of creating software that's both powerful and user-focused.
              </p>
              <p>
                Currently open to new opportunities where I can contribute my full-stack expertise, mobile development skills, and growing passion for Agentic AI.
              </p>
              <p>
                Let's connect if you're working on interesting projects in web, mobile, or AI! 🚀
              </p>
            </div>
          </div>
        </div>
      </header>

      <hr className="border-t-2 border-black" />

      {/* EDUCATION */}
      <section className="space-y-4">
        <h2 className="text-[13px] uppercase tracking-[0.35em] font-bold">
          Education
        </h2>

        <div className="border-2 border-black p-4 md:p-6 grid gap-4 md:grid-cols-[100px,1fr]">
          {/* UNI LOGO */}
          <div className="relative w-24 h-24 border-2 border-black bg-neutral-100">
            <Image
              src="/hu.jpeg"
              alt="University logo"
              fill
              className="object-contain p-1"
            />
          </div>

          <div className="space-y-1">
            <h3 className="text-[13px] font-bold">
              BSc in Electrical and Computer Engineering
            </h3>
            <p className="text-[12px] text-neutral-800">Haramaya University</p>
            <p className="text-[12px] text-neutral-600">Graduation Year: 2026</p>
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-black" />

      {/* EXPERIENCE */}
      <section className="space-y-4">
        <h2 className="text-[13px] uppercase tracking-[0.35em] font-bold">
          Experience
        </h2>

        <div className="border-2 border-black divide-y-2 divide-black">
          {/* Freelancing */}
          <div className="p-4 md:p-6 grid gap-4 md:grid-cols-[1fr,160px]">
            <div>
              <h3 className="text-[13px] font-bold">
                Self-Employed / Freelancing
              </h3>
              <p className="text-[12px] text-neutral-800">Fullstack Developer</p>
              <p className="mt-2 text-[11px] text-neutral-700">
                Worked on diverse freelance projects involving web and mobile development, building scalable solutions with modern tech stacks.
              </p>
            </div>
            <p className="text-[11px] font-bold whitespace-nowrap">
              Feb 2023 – Oct 2025
            </p>
          </div>

          {/* INSA */}
          <div className="p-4 md:p-6 grid gap-4 md:grid-cols-[1fr,160px]">
            <div>
              <h3 className="text-[13px] font-bold">
                INSA – Fullstack Developer Intern
              </h3>
              <p className="text-[12px] text-neutral-800">
                Fullstack Developer Intern
              </p>
              <p className="mt-2 text-[11px] text-neutral-700">
                Contributed to full-stack development projects, implementing features and optimizing application performance.
              </p>
            </div>
            <p className="text-[11px] font-bold whitespace-nowrap">
              Oct 2025 – Jan 2026
            </p>
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-black" />

      {/* PROJECTS */}
      <section className="space-y-4">
        <h2 className="text-[13px] uppercase tracking-[0.35em] font-bold">
          Projects
        </h2>

        <div className="border-2 border-black divide-y-2 divide-black">
          {/* Project 1 */}
          <article className="p-4 md:p-6 space-y-3">
            <h3 className="text-[13px] font-bold">AI Agent System</h3>
            <p className="text-[12px] text-neutral-800">
              A multi-agent autonomous system capable of reasoning, planning, and executing tasks with minimal human intervention.
            </p>
            <p className="text-[11px] font-bold text-neutral-700">
              Python • LangChain • React • Node.js
            </p>
            <a
              href="https://example.com/project-1"
              className="text-[12px] underline font-bold hover:bg-black hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              → View Project / GitHub
            </a>
          </article>

          {/* Project 2 */}
          <article className="p-4 md:p-6 space-y-3">
            <h3 className="text-[13px] font-bold">E-Commerce Platform</h3>
            <p className="text-[12px] text-neutral-800">
              Full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking.
            </p>
            <p className="text-[11px] font-bold text-neutral-700">
              Next.js • Fastify • PostgreSQL • Stripe
            </p>
            <a
              href="https://example.com/project-2"
              className="text-[12px] underline font-bold hover:bg-black hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              → View Project / GitHub
            </a>
          </article>

          {/* Project 3 */}
          <article className="p-4 md:p-6 space-y-3">
            <h3 className="text-[13px] font-bold">
              Cross-Platform Mobile App
            </h3>
            <p className="text-[12px] text-neutral-800">
              Flutter-based mobile application for iOS and Android with offline support and cloud synchronization.
            </p>
            <p className="text-[11px] font-bold text-neutral-700">
              Flutter • Firebase • Dart
            </p>
            <a
              href="https://example.com/project-3"
              className="text-[12px] underline font-bold hover:bg-black hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              → View Project / GitHub
            </a>
          </article>

          {/* Project 4 */}
          <article className="p-4 md:p-6 space-y-3">
            <h3 className="text-[13px] font-bold">
              Real-Time Analytics Dashboard
            </h3>
            <p className="text-[12px] text-neutral-800">
              Interactive dashboard for visualizing and analyzing real-time data with charts and filters.
            </p>
            <p className="text-[11px] font-bold text-neutral-700">
              React • Nuxt • D3.js • WebSockets
            </p>
            <a
              href="https://example.com/project-4"
              className="text-[12px] underline font-bold hover:bg-black hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              → View Project / GitHub
            </a>
          </article>
        </div>
      </section>

      <hr className="border-t-2 border-black" />

      {/* CONTACT */}
      <section className="space-y-4 mb-10">
        <h2 className="text-[13px] uppercase tracking-[0.35em] font-bold">
          Contact
        </h2>

        <div className="border-2 border-black p-4 md:p-6">
          <p className="text-[11px] uppercase tracking-[0.25em] mb-4">
            Get in touch via any of these platforms:
          </p>

          <div className="grid gap-4 md:grid-cols-2 text-[12px]">
            <div>
              <h4 className="text-[11px] font-bold uppercase mb-1">
                📧 Email
              </h4>
              <a
                href="mailto:nyboss04@gmail.com"
                className="underline hover:bg-black hover:text-white"
              >
                nyboss04@gmail.com
              </a>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase mb-1">
                💼 LinkedIn
              </h4>
              <a
                href="https://www.linkedin.com/in/nahom-tewodros-783614318/"
                className="underline hover:bg-black hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/nahom-tewodros-783614318/
              </a>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase mb-1">
                💻 GitHub
              </h4>
              <a
                href="https://github.com/novaet12"
                className="underline hover:bg-black hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                github.com/novaet12
              </a>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase mb-1">
                📱 Telegram
              </h4>
              <a
                href="https://t.me/novat123`"
                className="underline hover:bg-black hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                @novat123
              </a>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase mb-1">
                🎮 Discord
              </h4>
              <a
                href="https://discord.com/users/nova03479"
                className="underline hover:bg-black hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                nova03479#1234
              </a>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase mb-1">
                💬 WhatsApp
              </h4>
              <a
                href="https://wa.me/+251901976857"
                className="underline hover:bg-black hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                +251 901 976 857
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-black pt-4 pb-8 text-center text-[11px] text-neutral-600">
        <p>© 2025 Nahom Tewodros. All rights reserved.</p>
        <p>Last updated: December 2025</p>
      </footer>
    </main>
  );
}
