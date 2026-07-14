import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-header">

        <h2>Let's Work Together!</h2>

        <p>
          I'm open to new opportunities, freelance projects, and
          collaborations. Let's create something impactful.
        </p>

      </div>


      <div className="contact-box">


        <div className="contact-profile">

          <div className="contact-logo">
            MC
          </div>


          <h3>Maurice Coles II</h3>

          <span>
            Full-Stack Developer | UI/UX Designer
          </span>


          <div className="availability-tags">

            <div>W-2 Opportunities</div>

            <div>1099 Contracts</div>

            <div>Freelance Projects</div>

          </div>

        </div>



        <div className="contact-links">
          

  <a
    href="mailto:mauricecoles.mc@gmail.com"
    aria-label="Send Maurice an email"
  >
    📧 mauricecoles.mc@gmail.com
  </a>

  <a
    href="https://www.linkedin.com/in/maurice-coles-ii-715217a2/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit Maurice's LinkedIn profile"
  >
    💼 LinkedIn
  </a>

  <a
    href="https://github.com/maucol3633"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit Maurice's GitHub profile"
  >
    🐙 GitHub
  </a>


          <a href="#">
            🌎 Remote / United States
          </a>


        </div>

      </div>
    </section>
  );
}

export default Contact;