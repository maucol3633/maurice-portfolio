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

        <p>
          I design and develop modern web applications that blend clean code,
          intuitive user experiences, and creative visual design. From
          responsive front-end interfaces to powerful back-end solutions,
          I create digital products that are fast, scalable, and built to
          solve real-world problems.
        </p>

        <div className="hero-buttons">

          <a href="/projects" className="btn-primary">
            View My Work
          </a>

          <a href="/resume" className="btn-secondary">
            Download Résumé
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