import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Users,
  Globe2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow eyebrow-light">
            <span />
            Inside Bandevi
          </div>
          <h1>People, process and technology working together.</h1>
          <p>
            Learn about the business, the work and the delivery approach behind
            Bandevi Global Group.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container about-page-grid">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="A technology partner for practical business progress."
            />
            <p className="body-copy">
              Bandevi Global Group presents services across websites, business
              applications, CRM, ERP and travel technology. The goal of this
              website is to make those capabilities easier to understand and
              help prospective clients start a clear conversation about their
              requirements.
            </p>
            <p className="body-copy">
              Use this page to publish verified leadership profiles, company
              history, office information, delivery credentials and approved
              team photographs.
            </p>
            <Link className="btn btn-primary" to="/contact">
              Start a conversation <ArrowRight />
            </Link>
          </div>
          <img
            className="about-photo"
            src="/images/office-team.svg"
            alt="Illustrative collaborative workspace"
          />
        </div>
      </section>
      <section className="section industries">
        <div className="container">
          <SectionHeading
            eyebrow="Company information"
            title="Details worth verifying and sharing"
          />
          <div className="about-facts">
            {[
              [
                CalendarDays,
                "Experience",
                "Publish verified team experience and company history.",
              ],
              [
                Users,
                "People",
                "Introduce the leadership team and key delivery roles.",
              ],
              [
                Globe2,
                "Markets",
                "Confirm office locations and international service coverage.",
              ],
              [
                ShieldCheck,
                "Trust",
                "Link to official company registration and approved references.",
              ],
            ].map(([Icon, title, desc]) => (
              <div key={title}>
                <Icon />
                <strong>{title}</strong>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <p className="disclaimer">
            Verify all statistics, company records, office locations and project
            claims with current company-approved information before launch.
          </p>
        </div>
      </section>
    </>
  );
}
