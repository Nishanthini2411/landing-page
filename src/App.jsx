import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);
  return visible ? (
    <button
      className="scroll-top-btn"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    ></button>
  ) : null;
};

const PageLoader = () => (
  <div className="loader">
    <div className="spinner"></div>
  </div>
);

const Navbar = () => (
  <nav className="navbar">
    <h1>Kularasa Nishanthini</h1>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/education">Education</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

const Section = ({ title, children }) => (
  <div className="section fade-in">
    <h2>{title}</h2>
    {children}
  </div>
);

const Home = () => (
  <Section title="Welcome!">
    <div className="home-section">
      <img
        src="src/pages/9ffcee8d-6fd7-4c03-b1ee-24e30be93972.jpeg"
        alt="K.Nishanthini"
        className="profile-img"
      />
      <div>
        <p>
          <h1> Kularasa Nishanthini</h1> <br></br>I'm a passionate Front-End
          Developer based in Kilinochchi, Sri Lanka, with strong skills in HTML,
          CSS, and JavaScript. Completed Advanced Level education and eager to
          apply web development skills to real-world projects. Committed to
          continuous learning and effective team collaboration.
        </p>
      </div>
    </div>
  </Section>
);

const Projects = () => (
  <Section title="Projects">
    <ul>
     
      <li>
        <b>Quiz App</b>
      </li>
      <p>
        An interactive quiz game that shows multiple-choice questions and tracks
        the user's score. It uses dynamic rendering of questions and gives
        feedback at the end. Built with pure HTML, CSS, and JavaScript.
      </p>
      <li>
        <b>Chat App</b>
      </li>
      <p>
        A basic real-time chat interface that allows users to send and receive
        messages. Messages are displayed in a chat bubble layout. This app
        simulates a chat experience using front-end technologies.
      </p>
      <li>
        <b>Calculator App</b>
      </li>
      <p>
        A modern UI calculator that handles basic arithmetic functions with a
        responsive layout. It mimics the functionality of a typical handheld
        calculator and is made using HTML, CSS, and JavaScript.
      </p>
    </ul>
  </Section>
);

const Skills = () => (
  <Section title="Technical Skills">
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Bootstrap</li>
      <li>MySQL</li>
      <li>Microsoft Office</li>
    </ul>
    <h3>Soft Skills</h3>
    <div className="skills-pills">
      <span>Teamwork</span>
      <span>Time Management</span>
      <span>Communication</span>
      <span>Hardworking</span>
    </div>
  </Section>
);

const Education = () => (
  <Section title="Education">
    <ul>
      <li>G.E.C Advanced Level (2021–2024)</li>
      <li>IAT Don Bosco – Basic Computer Skills (2024–2025)</li>
      <li>Full Stack Development (2025–Present)</li>
    </ul>
  </Section>
);

const Contact = () => (
  <Section title="Contact">
    <p>
      📍 154, Jeyanthinagar, Kilinochchi
      <br />
      <br></br>
      📞 +94 774791109
      <br />
      <br></br>
      📧 nishanishanthini189@gmail.com
    </p>
  </Section>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <PageLoader />;

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
