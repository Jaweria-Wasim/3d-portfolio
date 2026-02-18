export default function Achievements() {
  const stats = [
    { icon: "fas fa-briefcase", number: "04+", label: "Years Exp." },
    { icon: "fas fa-code-branch", number: "50+", label: "Projects" },
    { icon: "fas fa-trophy", number: "12", label: "Awards" },
  ];

  return (
    <div id="page-achievements" className="page-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 md:mt-40">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-spaceGrotesk font-bold mb-2">
            Achievements
          </h2>
          <p className="text-[var(--text-muted)] mt-4 sm:mt-6 text-sm sm:text-base">
            Impactful numbers over the years.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="stat-card
                bg-[var(--surface)]
                border border-[var(--border)]
                p-8 sm:p-10
                rounded-2xl
                text-center
                hover:-translate-y-2
                hover:bg-[var(--surface-hover)]
                hover:border-[var(--secondary)]
                transition-all
              "
            >
              <i className={`${stat.icon} text-3xl sm:text-4xl text-[var(--secondary)] mb-4`}></i>
              <div
                className="stat-number
                  text-3xl sm:text-4xl md:text-5xl
                  font-spaceGrotesk font-bold mb-2
                  bg-gradient-to-r from-primary to-secondary
                  bg-clip-text text-transparent
                "
              >
                {stat.number}
              </div>
              <div className="text-[var(--text-muted)] text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
