import "../styles/Resume.css";

function Resume() {
  return (
    <section className="resume">

      {/* Resume Header */}
      <div className="resume-hero">

        <h1>Maurice Coles II</h1>

        <h2>
          Full-Stack Developer | UI/UX Designer | Graphic Designer
        </h2>

        <div className="resume-actions">
          <button>
            Download Resume
          </button>

          <button className="outline-btn">
            View Portfolio
          </button>
        </div>

      </div>



      {/* Professional Summary */}

      <div className="resume-card">

        <h3>Professional Summary</h3>

        <p>
          Entry-Level Full-Stack Developer with hands-on experience building
          responsive, database-driven web applications using HTML, CSS,
          JavaScript, PHP, MySQL, and MVC architecture. Skilled in full-stack
          development, REST workflows, UI/UX design principles, and delivering
          professional web solutions.
        </p>

      </div>

      {/* Education */}
      <div className="resume-card">
        <h3>Education</h3>
        <div className="education-card">
          <h2 className="degree-title">
            Bachelor of Science in Computer & Information Science
          </h2>
          <h4>
            ECPI University — Virginia Beach, VA
          </h4>
          <p>
            GPA: 3.64 | November 2025
          </p>
        </div>
      </div>


      {/* Technical Skills */}
      <div className="resume-card">
        <h3>Technical Skills</h3>
        <div className="skills-container">
          <div className="skill-box">
            <h4>Languages</h4>
            <p>
              JavaScript, TypeScript, PHP, C#, C++, Java, Python, SQL, T-SQL, HTML5, JSON, Shell Scripting 
            </p>
          </div>

          <div className="skill-box">
            <h4>Web Development & Frameworks</h4>
            <p>
              React, Angular, AngularJS, jQuery, Bootstrap, ASP.NET, .NET, .NET Core, 
              MVC, REST APIs, CRUD Operations, Object-Oriented Programming (OOP), 
              Full-Stack Development, Front-End Development, Back-End Development, 
              Web Application Design, Responsive Web Design, Mobile Product Development, 
              SDLC, Agile Software Development, Debugging, Performance Tuning, 
              Requirements Analysis, Quality Assurance, Version Control
            </p>
          </div>

          <div className="skill-box">
            <h4>Tools</h4>
            <p>
              Git, GitHub, VS Code, Visual Studio,
              XAMPP, phpMyAdmin, WordPress
            </p>
          </div>
          
          <div className="skill-box">
            <h4>Databases</h4>
            <p>
              MySQL, SQL Server, T-SQL, Oracle, phpMyAdmin, Database Design, 
              Database Systems, Database Constraints, Cloud Databases, Data Integration, 
              Data Management, Data Manipulation, Data Analysis, Dataverse Fundamentals
            </p>
          </div>

          <div className="skill-box">
            <h4>Developer Tools & Platforms</h4>
            <p>
              Visual Studio, Visual Studio Code, Git, GitHub, GitHub Actions, XAMPP, 
              Docker, PowerShell, Linux, Linux Administration, Azure, Azure AD, AWS, 
              Power Automate, DevOps, Public Cloud
            </p>
          </div>

          <div className="skill-box">
            <h4>UI/UX Design</h4>
            <p>
              UI/UX Design, User Interface Design, User Experience (UX), Wireframing, 
              Prototyping, UX Research, Design Systems, Design Thinking, Visual UI Design, 
              Adaptive UI/UX Design, Accessible UI/UX Design, WCAG, Web Accessibility, 
              Mobile Testing, Color Theory, Typography, Layout Design
            </p>
          </div>

          <div className="skill-box">
            <h4>Design Software</h4>
            <p>
              Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe XD, 
              Adobe Premiere Pro, Adobe After Effects, Adobe Acrobat, Figma, Sketch, 
              Canva, Visio
            </p>
          </div>

          <div className="skill-box">
            <h4>Web Platforms</h4>
            <p>
              WordPress, Google Sites, eCommerce Platforms, Website Management, 
              Website Maintenance, Google Workspace
            </p>
          </div>

          
          <div className="skill-box">
            <h4>Development</h4>
            <p>
              MVC, OOP, CRUD, REST APIs,
              Responsive Design, UI/UX,
              Database Design, SDLC
            </p>
          </div>
          

        </div>

      </div>




      {/* Experience */}
      <div className="resume-card">
        <h3>Professional Experience</h3>
        <div className="experience">
          <div className="experience-card">
            <h2>
              Accounts Receivable Specialist
            </h2>
            <h4>
              Gravis Law PLLC | Sep 2023 - Present
            </h4>

            <p>
              Managed billing workflows, financial records,
              account reporting, and high-volume legal operations
              while maintaining accuracy and efficiency.
            </p>

          </div>

          <div className="experience-card">
            <h2>
              Collections / Technical Support Agent
            </h2>
            <h4>
              Alorica | Aug 2022 - Sep 2023
            </h4>
            <p>
              Provided technical troubleshooting,
              CRM support, account maintenance,
              and customer issue resolution.
            </p>
          </div>

          <div className="experience-card">
            <h2>
              Freelance Full-Stack Web Developer / Designer
            </h2>
            <h4>
              Jan 2022 - Present
            </h4>
            <p>
              Designed responsive websites and applications
              using HTML, CSS, JavaScript, PHP, WordPress,
              and MySQL.
            </p>
          </div>
        </div>
      </div>


      {/* Projects */}
      <div className="resume-card">
        <h3>Featured Projects</h3>
        <div className="project-container">
          <div className="project-card">
            <h2>
              PHP MVC Capstone
            </h2>
            <p>
              Built a full-stack MVC application with
              authentication, MySQL integration,
              and CRUD functionality.
            </p>
          </div>

          <div className="project-card">
            <h2>
              Inventory Management System
            </h2>
            <p>
              Developed a PHP/MySQL inventory platform
              for tracking products, records,
              and reporting.
            </p>
          </div>

          <div className="project-card">
            <h2>
              AI Data & Model Evaluation
            </h2>
            <p>
              Evaluated AI outputs, performed data labeling,
              and validated structured datasets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Resume;