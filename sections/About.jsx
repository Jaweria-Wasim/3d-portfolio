export default function About() {
  return (
    <div id="page-about" className="page-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 md:mt-40">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-spaceGrotesk font-bold mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text */}
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-[1rem] sm:text-[1.2rem] text-[var(--text-muted)] leading-7 sm:leading-8">
              I am a passionate frontend developer with a strong focus on creating
              modern, responsive, and user-centered web experiences. I enjoy transforming
              complex ideas into clean, intuitive interfaces using technologies like
              React, Next.js, and Tailwind CSS. Alongside development, I have a growing
              interest in UI/UX design and data analytics, which helps me build products
              that are not only visually appealing but also practical and performance-driven.
              I am continuously learning and improving my skills, with the goal of building
              impactful digital solutions while growing professionally in both industry and academia.
            </p>
          </div>

          {/* Optional Profile Image */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4  shadow-xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1L6cWADa5B3WbXiuw_UPN4Qqv9cGe0uGjg&s" // replace with your profile image path
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
