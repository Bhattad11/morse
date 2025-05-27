import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const data = [
    {
      emoji: "👨‍💻",
      name: "Rahul Sharma",
      role: "Lead Software Engineer",
    },
    { emoji: "🧑‍💼", name: "Aniket", role: "Managing Director" },
    { emoji: "🧑‍💼", name: "Anay Gupta", role: "Manager" },
  ];
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <h1 className="fade-in">Welcome to Morse</h1>
          <p className="fade-in">Where innovation meets excellence.</p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-section title-about slide-in">
        <h2>Who We Are</h2>
        <p>
          At TechNova, we're passionate about creating cutting-edge technology
          solutions that power businesses and improve lives. Since our
          inception, we've worked with startups, enterprises, and innovators
          across the globe to deliver scalable and smart digital products.
        </p>
        <p>
          Our expertise spans{" "}
          <strong>
            AI & ML, web and mobile app development, cloud computing, IoT
          </strong>
          , and more. We believe in blending creativity with technology to solve
          real-world problems.
        </p>
      </section>

      <div className="about-container">
        {/* Mission & Vision */}
        <section className="mission-vision-section">
          <div className="info-card mission">
            <div className="icon">🚀</div>
            <h3>Our Mission</h3>
            <p>
              To transform the digital experience through intelligent solutions
              that drive measurable value and inspire innovation.
            </p>
          </div>
          <div className="info-card vision">
            <div className="icon">🌐</div>
            <h3>Our Vision</h3>
            <p>
              To become a global leader in technological advancement, fostering
              a connected, efficient, and sustainable future.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🧠</div>
              <h4>Innovation First</h4>
              <p>We push boundaries and challenge norms.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">👥</div>
              <h4>Customer-Centric</h4>
              <p>We build for people, not just platforms.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h4>Integrity</h4>
              <p>Transparency, honesty, and security are in our DNA.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h4>Collaboration</h4>
              <p>Great things are built together, not alone.</p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="team-section">
          <h2>Meet Our Experts</h2>
          <div className="team-grid">
            {data.map(({ emoji, name, role }) => (
              <div key={name} className="team-card">
                <div className="avatar">{emoji}</div>
                <h4>{name}</h4>
                <p>{role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="cta-section contact-section fade-in">
        <h2>Ready to Build the Future Together?</h2>
        <p>Let's create something extraordinary. Get in touch with us today!</p>
        <button
          onClick={() => {
            navigate("/contactUs");
          }}
          className="contact-btn hover-effect"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
}
export default About;
