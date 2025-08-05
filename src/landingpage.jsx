import "./App.css";

function Landingpage() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h1 className="logo">
          <span>KULARASA NISHANTHINI</span>
        </h1>
        <ul className="nav-links left">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <section className="hero" id="home">
        <div className="hero-left">
          <div className="image-glow">
            <img
              src="src/9ffcee8d-6fd7-4c03-b1ee-24e30be93972.jpeg"
              alt="Nishanthini"
            />
          </div>
        </div>
        <div className="hero-right">
          <h2>
            Hi, I'm <span className="green">Nishanthini</span>
          </h2>
          <h3>
            I'm a <span className="green">Front-End Developer</span>
          </h3>
          <p>
            Passionate Front-End Developer skilled in HTML, CSS, JavaScript, and
            React.
            <br />
            Always eager to learn and build modern, responsive web applications.
          </p>
          <div className="social-icons">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:nishanishanthini189@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <h2>About Me</h2>
        <p>
          Hi, I’m Nishanthini, a dedicated Front-End Developer from Kilinochchi,
          Sri Lanka. I focus on creating responsive, user-friendly web
          interfaces using modern technologies like HTML, CSS, JavaScript, and
          React. I’m passionate about turning ideas into functional, visually
          appealing applications.
        </p>
      </section>

      <section className="section" id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div>
            <h4>Technical Skills</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>React</li>
              <li>GitHub</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div>
            <h4>Soft Skills</h4>
            <ul>
              <li>Teamwork</li>
              <li>Problem Solving</li>
              <li>Time Management</li>
              <li>Communication</li>
              <li>Hard working</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="education">
        <h2>Education</h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            maxWidth: "600px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <li>🎓 Ordinary Level Completed(2020)</li>
          <li>🎓 Advanced Level Completed(2021-2023)</li>
          <li>💻 Basic Computer Course Completed(2024-2025)</li>
          <li>🌐 Full Stack Development (2025)</li>
        </ul>
      </section>

      <section className="section" id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            🎯 Quiz App -{" "}
            <p>
              An interactive quiz game that shows multiple-choice questions and
              tracks the user's score. It uses dynamic rendering of questions
              and gives feedback at the end. Built with pure HTML, CSS, and
              JavaScript.
            </p>
          </li>
          <li>
            💬 Chat App -{" "}
            <p>
              A basic real-time chat interface that allows users to send and
              receive messages. Messages are displayed in a chat bubble layout.
              This app simulates a chat experience using front-end technologies.
            </p>
          </li>
          <li>
            🧮 Calculator App -{" "}
            <p>
              {" "}
              A modern UI calculator that handles basic arithmetic functions
              with a responsive layout. It mimics the functionality of a typical
              handheld calculator and is made using HTML, CSS, and JavaScript.
            </p>
          </li>
        </ul>
      </section>

      <footer className="footer" id="contact">
        <p>
          📞 +94 0774791109 | 📧 nishanishanthini189@gmail.com | 📍 Kilinochchi,
          Sri Lanka
        </p>
      </footer>
    </div>
  );
}

export default Landingpage;
