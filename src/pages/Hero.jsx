import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">
          👋 Welcome to my portfolio
        </span>

        <h1>
          Maurice Coles II
        </h1>

        <h2>
          Full-Stack Developer • UI/UX Designer • Graphic Designer
        </h2>

        <div className="portfolio-message">

  <p>
    In today’s hiring landscape, technology helps evaluate candidates, but automated screening cannot always capture creativity, problem-solving, and real-world skills.
  </p>

  <p>
    I built this portfolio to go beyond a résumé and showcase what I can create through full-stack development, UI/UX design, graphic design, and hands-on projects.
    A résumé summarizes experience. A portfolio proves capability.
  </p>

</div>

        <div className="hero-buttons">

          <a href="/projects" className="btn-primary">
            Web Projects
          </a>

          <a href="/design" className="btn-secondary">
            Graphic Designs
          </a>

        </div>

        {/* NEW CARD ADDED */}
        <div className="hero-card">
          <div className="card-avatar">
            MC
          </div>

          <div className="card-content">
            <h3>
              Open To Opportunities
            </h3>

            <p>
              W-2 Roles • 1099 Contracts • Freelance Projects
            </p>
          </div>

          <a 
            href="/contact" 
            className="connect-btn"
          >
            Let's Connect
          </a>

        </div>
      </div>
    </section>
  );
}
export default Hero;