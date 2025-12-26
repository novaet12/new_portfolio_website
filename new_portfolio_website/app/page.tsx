'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <header>
        <div className="header-grid">
          <div className="photo-box">
        <Image
        src="/images/mine.png"
        alt="Profile picture"
        width={190}
        height={190}
        style={{ objectFit: "contain" }}
      />

          </div>
          <div>
            <h1>Nahom Tewodros</h1>
            <p className="tagline">Fullstack Engineer | Specializing in Agentic AI &amp; Multi-Agent Systems</p>
            <div className="about-text">
              <p>I'm a Fullstack Developer passionate about building modern, intelligent, and efficient software solutions — from sleek mobile apps to powerful web platforms and autonomous AI systems.</p>

              <p>On the mobile side, I specialize in Flutter, creating cross-platform applications that deliver smooth, native-like experiences on  Android.</p>

              <p><strong>For web development, I work with modern and performant stacks:</strong><br />
              • Next.js &amp; Nuxt for fast, SEO-friendly frontends and full-stack applications<br />
              • Fastify &amp; Express for lightweight, high-performance backend APIs</p>

              <p>I have a deep interest in building efficient database designs and implementations. I enjoy thinking through data modeling, indexing strategies, and query optimization to ensure systems scale well and perform under real-world load.</p>

              <p>Lately, I've been diving deep into Agentic AI — developing autonomous agents and intelligent systems that can reason, plan, and act toward goals with minimal human intervention. Combining traditional full-stack skills with AI opens up exciting possibilities, and I love being at that intersection.</p>

              <p>Whether it's crafting a responsive mobile app, optimizing a backend for speed and reliability, designing a clean data layer, or teaching an AI agent to solve complex problems — I'm driven by the challenge of creating software that's both powerful and user-focused.</p>

              <p>Currently open to new opportunities where I can contribute my full-stack expertise, mobile development skills, and growing passion for Agentic AI.</p>

              <p>Let's connect if you're working on interesting projects in web, mobile, or AI! 🚀</p>
            </div>
          </div>
        </div>
      </header>

      <hr />

      <section className="section">
        <h2>Education</h2>
        <div className="education-box">
          <div className="uni-logo">
             <Image
  src="/images/hu.jpeg"
  alt="Profile picture"
  width={100}
  height={100}
/>
            </div>
          <div className="edu-info">
            <h3>BSc in Electrical and Computer Engineering</h3>
            <p>Your University Name</p>
            <p>Graduation Year: 20XX</p>
          </div>
        </div>
      </section>

      <hr />

      {/* EXPERIENCE */}
      <section className="section">
        <h2>Experience</h2>
        <div className="experience-box">
          <div className="exp-item">
            <div>
              <h3>Self-Employed / Freelancing</h3>
              <p>Fullstack Developer</p>
              <p style={{ fontSize: '11px', marginTop: '8px' }}>Worked on diverse freelance projects involving web and mobile development, building scalable solutions with modern tech stacks.</p>
            </div>
            <div className="exp-dates">Feb 2023 – Oct 2025</div>
          </div>
          <div className="exp-item">
            <div>
              <h3>INSA – Fullstack Developer Intern</h3>
              <p>Fullstack Developer Intern</p>
              <p style={{ fontSize: '11px', marginTop: '8px' }}>Contributed to full-stack development projects, implementing features and optimizing application performance.</p>
            </div>
            <div className="exp-dates">Oct 2025 – Jan 2026</div>
          </div>
        </div>
      </section>

      <hr />

      {/* PROJECTS */}
      <section className="section">
        <h2>Projects</h2>
        <div className="projects-box">
          <div className="project-item">
            <h3>AI Agent System</h3>
            <p>A multi-agent autonomous system capable of reasoning, planning, and executing tasks with minimal human intervention.</p>
            <div className="project-tags">Python • LangChain • React • Node.js</div>
            <a href="#" className="project-link">→ View Project / GitHub</a>
          </div>
          <div className="project-item">
            <h3>E-Commerce Platform</h3>
            <p>Full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking.</p>
            <div className="project-tags">Next.js • Fastify • PostgreSQL • Stripe</div>
            <a href="#" className="project-link">→ View Project / GitHub</a>
          </div>
          <div className="project-item">
            <h3>Cross-Platform Mobile App</h3>
            <p>Flutter-based mobile application for iOS and Android with offline support and cloud synchronization.</p>
            <div className="project-tags">Flutter • Firebase • Dart</div>
            <a href="#" className="project-link">→ View Project / GitHub</a>
          </div>
          <div className="project-item">
            <h3>Real-Time Analytics Dashboard</h3>
            <p>Interactive dashboard for visualizing and analyzing real-time data with interactive charts and filters.</p>
            <div className="project-tags">React • Nuxt • D3.js • WebSockets</div>
            <a href="#" className="project-link">→ View Project / GitHub</a>
          </div>
        </div>
      </section>

      <hr />

      {/* CONTACT */}
      <section className="section">
        <h2>Contact</h2>
        <div className="contact-box">
          <p className="contact-header">Get in touch via any of these platforms:</p>
          <div className="contact-grid">
            <div className="contact-item">
              <h4>📧 Email</h4>
              <a href="mailto:nyboss04@gmail.com">nyboss04@gmail.com</a>
            </div>
            <div className="contact-item">
              <h4>💼 LinkedIn</h4>
              <a href="https://www.linkedin.com/in/nahom-tewodros-783614318" target="_blank" rel="noopener noreferrer">linkedin.com/in/nahom-tewodros-783614318/</a>
            </div>
            <div className="contact-item">
              <h4>💻 GitHub</h4>
              <a href="https://github.com/novaet12" target="_blank" rel="noopener noreferrer">github.com/novaet12</a>
            </div>
            <div className="contact-item">
              <h4>📱 Telegram</h4>
              <a href="https://t.me/novat123" target="_blank" rel="noopener noreferrer">@novat123</a>
            </div>
            <div className="contact-item">
              <h4>🎮 Discord</h4>
              <a href="https://discord.com/users/nova03479" target="_blank" rel="noopener noreferrer">nova03479#1234</a>
            </div>
            <div className="contact-item">
              <h4>💬 WhatsApp</h4>
              <a href="https://wa.me/901976857" target="_blank" rel="noopener noreferrer">+251901976857</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 Nahom Tewodros. All rights reserved.</p>
        <p>Last updated: December 2025</p>
      </footer>
    </main>
  );
}
