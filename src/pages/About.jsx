import "../styles/About.css";

function About() {
  return (
    <section className="about">

      <div className="about-grid">

        {/* Profile Card */}
        <div className="profile-card">

          <div className="profile-circle">
            MC
          </div>

          <h2>Maurice Coles II</h2>
          <p>Web Developer & Graphic Designer</p>

          <div className="profile-tags">
            <span>React</span>
            <span>UI/UX</span>
            <span>Design</span>
          </div>

        </div>


        {/* About Card */}
        <div className="about-card">

          <span className="badge">
            ABOUT ME
          </span>

          <h1>
            Creating Digital
            Experiences With Code
            & Design
          </h1>

          <p>
            I'm a Web Developer and Graphic Designer specializing in
            responsive websites, modern interfaces, and creative digital
            solutions.
          </p>

          <p>
            I combine development skills with design thinking to create
            websites and applications that are functional, user-friendly,
            and visually engaging.
          </p>

        </div>


        {/* Stats Cards */}
        <div className="stat-card">
          <h2>20+</h2>
          <p>Projects Built</p>
        </div>

        <div className="stat-card">
          <h2>10+</h2>
          <p>Years Designing</p>
        </div>

        <div className="stat-card">
          <h2>B.S.</h2>
          <p>Software Development</p>
        </div>

        <div className="stat-card">
          <h2>100%</h2>
          <p>Responsive Design</p>
        </div>


        {/* Skills Cards */}
        <div className="skills-card">

          <h3>Core Skills</h3>

          <div className="skills-list">
            <span>⚛ React</span>
            <span>🎨 UI/UX</span>
            <span>💻 JavaScript</span>
            <span>🌐 HTML/CSS</span>
            <span>🗄 SQL</span>
            <span>🚀 Git/GitHub</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;