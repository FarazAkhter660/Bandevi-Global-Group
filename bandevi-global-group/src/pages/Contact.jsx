import React from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import ContactForm from "../components/ContactForm";
export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow eyebrow-light">
            <span />
            Tell us what you need
          </div>
          <h1>Let's talk about what your business needs next.</h1>
          <p>
            Share a little about your organisation and the problem you want to
            solve. The team can follow up with the right next step.
          </p>
        </div>
      </section>
      <section className="section contact-section">
        <div className="container contact-grid">
          <div>
            <div className="eyebrow">
              <span />
              Get in touch
            </div>
            <h2>Start a useful conversation.</h2>
            <p>
              Whether you need a new website, a business system or a technology
              partner, tell us what you're working towards.
            </p>
            <a className="contact-line" href="tel:+917011040474">
              <Phone />
              +91 70110 40474
            </a>
            <a
              className="contact-line"
              href="mailto:sales@bandeviglobalgroup.com"
            >
              <Mail />
              sales@bandeviglobalgroup.com
            </a>
            <a
              className="contact-line"
              href="https://wa.me/917011040474"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle />
              WhatsApp
            </a>
            <p className="address-line">
              <MapPin />
              SCO 63, Huda Market, Sector 23A, Gurugram, Haryana 122017
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
