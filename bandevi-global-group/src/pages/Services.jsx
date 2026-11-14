import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Laptop,
  Smartphone,
  Layers3,
  Plane,
  Sparkles,
  Database,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
const items = [
  [
    Laptop,
    "Website development",
    "Responsive business websites, portals and customer experiences designed around clear user journeys.",
  ],
  [
    Smartphone,
    "Mobile applications",
    "Mobile-first application experiences that help teams and customers stay connected.",
  ],
  [
    Layers3,
    "CRM & ERP solutions",
    "Purpose-built workflows for enquiries, customer relationships, operations, inventory and reporting.",
  ],
  [
    Plane,
    "Travel technology",
    "Travel portals, booking experiences, supplier workflows and travel operations platforms.",
  ],
  [
    Sparkles,
    "AI & automation",
    "Practical automation and intelligent tools that reduce repetitive work and support better decisions.",
  ],
  [
    Database,
    "Integrations & data",
    "Connect business tools, organise information and create a consistent flow of data.",
  ],
];
export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow eyebrow-light">
            <span />
            What we do
          </div>
          <h1>Technology built around your business.</h1>
          <p>
            From customer-facing websites to the systems behind your operations,
            explore services designed to move work forward.
          </p>
        </div>
      </section>
      <section className="section services-detail-showcase">
        <div className="container">
          <SectionHeading
            eyebrow="Our capabilities"
            title="Services that work together"
            text="Choose a focused service or combine capabilities into a joined-up digital solution."
          />
          <div className="offering-grid">
            {items.map(([Icon, title, desc]) => (
              <article className="offering-card" key={title}>
                <div className="offering-icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link to="/contact" className="text-link">
                  Discuss this service <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section industries">
        <div className="container split-feature">
          <div>
            <div className="eyebrow">
              <span />A clear delivery approach
            </div>
            <h2>From first conversation to handover.</h2>
            <p>
              Start by defining the business problem, agree on scope and
              milestones, then review the work as it takes shape. Confirm
              documentation, access and support responsibilities before
              handover.
            </p>
            <Link className="btn btn-primary" to="/contact">
              Talk to our team <ArrowRight />
            </Link>
          </div>
          <div className="process-list">
            {[
              [
                "01",
                "Discover",
                "Understand your users, current tools and the problem to solve.",
              ],
              [
                "02",
                "Define",
                "Agree deliverables, dependencies, costs and milestones.",
              ],
              [
                "03",
                "Build & review",
                "Review progress and test the journeys your team will use.",
              ],
              [
                "04",
                "Hand over",
                "Confirm access, documentation, training and support scope.",
              ],
            ].map(([n, t, d]) => (
              <div className="process-step" key={n}>
                <span>{n}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
