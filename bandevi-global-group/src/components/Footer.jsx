import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-about">
          <Logo light />
          <p>
            Websites, business applications, CRM, ERP and travel technology
            shaped around the way your organisation works.
          </p>
          <div className="social-links">
            <a href="https://wa.me/917011040474" target="_blank" rel="noreferrer" aria-label="Contact Bandevi on WhatsApp">
              <MessageCircle />
            </a>
            <a href="mailto:sales@bandeviglobalgroup.com" aria-label="Email Bandevi">
              <Mail />
            </a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/our-work">Our Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Services</h4>
          <Link to="/services">Website Development</Link>
          <Link to="/services">Mobile Applications</Link>
          <Link to="/services">CRM & ERP</Link>
          <Link to="/services">Travel Technology</Link>
          <Link to="/services">AI & Automation</Link>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <a href="tel:+917011040474"><Phone />+91 70110 40474</a>
          <a href="mailto:sales@bandeviglobalgroup.com"><Mail />sales@bandeviglobalgroup.com</a>
          <p><MapPin />SCO 63, Huda Market, Sector 23A, Gurugram, Haryana 122017</p>
        </div>
        <div className="footer-note">
          <h4>Let’s build something useful</h4>
          <p>Tell us about your goals, current workflows and the challenge you want to solve.</p>
          <Link className="text-link" to="/contact">Start a conversation <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Bandevi Global Group. All rights reserved.</span>
        <div>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
