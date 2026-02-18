export default function Work() {
  const projects = [
    { title: "Project 1", desc: "3D Dashboard" },
    { title: "Project 2", desc: "E-Commerce" },
    { title: "Project 3", desc: "Portfolio" },
    // Add more projects as needed
  ];

  return (
    <div id="page-work" className="page-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 md:mt-40">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-spaceGrotesk font-bold mb-2">
            Featured Work
          </h2>
          <p className="text-[var(--text-muted)] mt-4 sm:mt-6 text-sm sm:text-base">
            Selected projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-[var(--surface)]
                         p-6 sm:p-8
                         rounded-2xl
                         border border-[var(--border)]
                         hover:-translate-y-1
                         hover:bg-[var(--surface-hover)]
                         transition-all"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{proj.title}</h3>
              <p className="text-[var(--text-muted)] text-sm sm:text-base">{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
