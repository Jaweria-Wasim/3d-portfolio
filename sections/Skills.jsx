export default function Skills() {
  return (
    <div id="page-skills" className="page-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 md:mt-40">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-spaceGrotesk font-bold mb-2">
            My Tech Stack
          </h2>
          <p className="text-[var(--text-muted)] mt-4 sm:mt-6 text-sm sm:text-base">
            Tools and technologies I use to build products.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 sm:gap-10 md:grid-cols-3 mt-10">
          {/* Frontend */}
          <div className="skill-category bg-[var(--surface)] border border-[var(--border)] p-8 sm:p-10 rounded-2xl hover:-translate-y-1 hover:bg-[var(--surface-hover)] transition-all">
            <div className="flex items-center gap-3 mb-5">
              <i className="fas fa-code text-2xl text-[var(--secondary)]"></i>
              <h3 className="text-xl sm:text-2xl font-bold">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="skill-pill flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[var(--border)] hover:bg-[var(--primary)] hover:text-white transition">
                <i className="fab fa-react"></i> React.js
              </span>
              <span className="skill-pill flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[var(--border)] hover:bg-[var(--primary)] hover:text-white transition">
                <i className="fas fa-cube"></i> Three.js
              </span>
              <span className="skill-pill flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[var(--border)] hover:bg-[var(--primary)] hover:text-white transition">
                <i className="fab fa-js"></i> TypeScript
              </span>
              <span className="skill-pill flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[var(--border)] hover:bg-[var(--primary)] hover:text-white transition">
                <i className="fas fa-wind"></i> Tailwind CSS
              </span>
            </div>
          </div>

          {/* Backend */}
          <div className="skill-category bg-[var(--surface)] border border-[var(--border)] p-8 sm:p-10 rounded-2xl hover:-translate-y-1 hover:bg-[var(--surface-hover)] transition-all">
            <div className="flex items-center gap-3 mb-5">
              <i className="fas fa-server text-2xl text-[var(--secondary)]"></i>
              <h3 className="text-xl sm:text-2xl font-bold">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="skill-pill flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[var(--border)] hover:bg-[var(--primary)] hover:text-white transition">
                <i className="fab fa-node"></i> Node.js
              </span>
              <span className="skill-pill flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[var(--border)] hover:bg-[var(--primary)] hover:text-white transition">
                <i className="fab fa-python"></i> Python
              </span>
              <span className="skill-pill flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[var(--border)] hover:bg-[var(--primary)] hover:text-white transition">
                <i className="fas fa-database"></i> MongoDB
              </span>
              <span className="skill-pill flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[var(--border)] hover:bg-[var(--primary)] hover:text-white transition">
                <i className="fab fa-aws"></i> AWS
              </span>
            </div>
          </div>

          {/* Tools */}
          <div className="skill-category bg-[var(--surface)] border border-[var(--border)] p-8 sm:p-10 rounded-2xl hover:-translate-y-1 hover:bg-[var(--surface-hover)] transition-all">
            <div className="flex items-center gap-3 mb-5">
              <i className="fas fa-tools text-2xl text-[var(--secondary)]"></i>
              <h3 className="text-xl sm:text-2xl font-bold">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="skill-pill flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[var(--border)] hover:bg-[var(--primary)] hover:text-white transition">
                <i className="fab fa-git-alt"></i> Git
              </span>
              <span className="skill-pill flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[var(--border)] hover:bg-[var(--primary)] hover:text-white transition">
                <i className="fab fa-docker"></i> Docker
              </span>
              <span className="skill-pill flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[var(--border)] hover:bg-[var(--primary)] hover:text-white transition">
                <i className="fab fa-figma"></i> Figma
              </span>
              <span className="skill-pill flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[var(--border)] hover:bg-[var(--primary)] hover:text-white transition">
                <i className="fas fa-terminal"></i> VS Code
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
