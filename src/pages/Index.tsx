import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".property-card").forEach((card) => {
      observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    document.querySelector(".hamburger")?.classList.toggle("active");
    document.querySelector(".nav-links")?.classList.toggle("active");
  };

  const closeMenu = () => {
    document.querySelector(".hamburger")?.classList.remove("active");
    document.querySelector(".nav-links")?.classList.remove("active");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon.`);
    form.reset();
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="/style.css" />

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            Dream<span>Homes</span>
          </a>
          <ul className="nav-links">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#properties" onClick={closeMenu}>Properties</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
          <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Find Your Dream Home</h1>
          <p>Discover luxury properties in the most sought-after neighborhoods. Your perfect home is just a click away.</p>
          <a href="#properties" className="btn-primary">View Properties</a>
        </div>
      </section>

      {/* PROPERTIES */}
      <section className="section" id="properties">
        <div className="section-header">
          <h2>Featured Properties</h2>
          <p>Handpicked luxury homes for discerning buyers</p>
          <div className="divider"></div>
        </div>
        <div className="properties-grid">
          {[
            { img: "images/house1.jpg", price: "$2,450,000", loc: "Beverly Hills, CA", desc: "Stunning modern villa with infinity pool, 5 bedrooms, panoramic views, and open-concept living spaces." },
            { img: "images/house2.jpg", price: "$1,850,000", loc: "Aspen, CO", desc: "Contemporary retreat nestled in nature with floor-to-ceiling windows, 4 bedrooms, and private deck." },
            { img: "images/house3.jpg", price: "$3,200,000", loc: "Greenwich, CT", desc: "Elegant stone estate with 6 bedrooms, grand foyer, manicured gardens, and 3-car garage." },
          ].map((p, i) => (
            <div className="property-card" key={i}>
              <img src={p.img} alt={`Property in ${p.loc}`} className="property-image" />
              <div className="property-info">
                <div className="property-price">{p.price}</div>
                <div className="property-location">{p.loc}</div>
                <p className="property-desc">{p.desc}</p>
                <a href="#contact" className="btn-outline">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <div className="section-header">
          <h2>Meet Your Agent</h2>
          <p>Expertise you can trust</p>
          <div className="divider"></div>
        </div>
        <div className="about-container">
          <img src="images/agent.jpg" alt="Real estate agent" className="agent-image" />
          <div className="about-text">
            <h3>Sarah Mitchell</h3>
            <div className="subtitle">Senior Real Estate Advisor</div>
            <p>
              With over 15 years of experience in luxury real estate, Sarah has helped hundreds of families find their perfect home. Her deep knowledge of the market, exceptional negotiation skills, and dedication to client satisfaction set her apart.
            </p>
            <div className="stats">
              <div className="stat">
                <h4>500+</h4>
                <span>Homes Sold</span>
              </div>
              <div className="stat">
                <h4>15+</h4>
                <span>Years Experience</span>
              </div>
              <div className="stat">
                <h4>98%</h4>
                <span>Client Satisfaction</span>
              </div>
            </div>
            <a href="#contact" className="btn-primary">Get in Touch</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Ready to find your dream home? Let's talk.</p>
          <div className="divider"></div>
        </div>
        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h3>Dream<span>Homes</span></h3>
            <p>Your trusted partner in finding the perfect luxury property. We make home buying an unforgettable experience.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#properties">Properties</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">in</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 DreamHomes. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Index;
