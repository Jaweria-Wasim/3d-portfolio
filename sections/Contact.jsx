'use client'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message Sent!')
  }

  return (
    <div id="page-contact" className="page-section">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 md:mt-40 text-center mb-10">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-spaceGrotesk font-bold mb-6 sm:mb-8">
          Let's Talk
        </h2>
        <p className="text-[var(--text-muted)] mb-8 text-sm sm:text-base">
          Have a question or want to work together? Drop me a message below!
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[var(--surface)] p-6 sm:p-10 md:p-12 rounded-2xl border border-[var(--border)] flex flex-col gap-4 sm:gap-6"
        >
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 sm:p-4 rounded-xl border border-[var(--border)] bg-[rgba(0,0,0,0.2)] text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <textarea
            rows="5"
            placeholder="Message"
            required
            className="w-full p-3 sm:p-4 rounded-xl border border-[var(--border)] bg-[rgba(0,0,0,0.2)] text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-primary transition"
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary w-full justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold border border-[var(--border)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
