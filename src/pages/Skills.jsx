import "../styles/Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="skills-container">

        <h2>My Skills</h2>

        <p className="skills-intro">
          A combination of software development, UI/UX design,
          and creative design skills used to build complete
          digital experiences.
        </p>


        <div className="skills-grid">


          <div className="skill-card">

            <h3>Frontend Development</h3>

            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Responsive Design</li>
            </ul>

          </div>


          <div className="skill-card">

            <h3>Backend Development</h3>

            <ul>
              <li>PHP</li>
              <li>MySQL</li>
              <li>SQL Server</li>
              <li>C#</li>
              <li>API Integration</li>
            </ul>

          </div>


          <div className="skill-card">

            <h3>Graphic Design</h3>

            <ul>
              <li>Photoshop</li>
              <li>Figma</li>
              <li>Canva</li>
              <li>Branding</li>
              <li>UI/UX Design</li>
            </ul>

          </div>


          <div className="skill-card">

            <h3>Tools</h3>

            <ul>
              <li>Visual Studio</li>
              <li>VS Code</li>
              <li>GitHub</li>
              <li>Azure</li>
              <li>XAMPP</li>
            </ul>

          </div>


        </div>

      </div>

    </section>
  );
}

export default Skills;