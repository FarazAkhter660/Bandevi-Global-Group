import React from "react";
import { Link } from "react-router-dom";
import heroVisual from "../assets/hero-visual.svg";
import tripProject from "../assets/trip-project.svg";
import crmProject from "../assets/crm-project.svg";
import maximtripProject from "../assets/maximtrip-project.svg";
import {
    ArrowRight,
    ArrowUpRight,
    Laptop,
    Layers3,
    Plane,
    Sparkles,
    GraduationCap,
    HeartPulse,
    House,
    Factory,
    BriefcaseBusiness,
    Newspaper,
    ShoppingCart,
    CalendarDays,
    Monitor,
    Globe2,
    Users,
    ShieldCheck,
    Code2,
    Rocket,
    Handshake,
    Headset,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
const services = [
    [
        Laptop,
        "Websites & Apps",
        "Modern, responsive and high-performing digital experiences.",
        "blue",
    ],
    [
        Layers3,
        "CRM & ERP",
        "Custom business systems for sales, operations and reporting.",
        "mint",
    ],
    [
        Plane,
        "Travel Technology",
        "Travel portals, booking workflows and operations systems.",
        "violet",
    ],
    [
        Sparkles,
        "AI & Automation",
        "Intelligent tools to streamline tasks and improve productivity.",
        "gold",
    ],
];
const industries = [
    [Plane, "Travel & Hospitality"],
    [ShoppingCart, "Retail & E-commerce"],
    [GraduationCap, "Education & Training"],
    [HeartPulse, "Healthcare & Wellness"],
    [House, "Real Estate"],
    [Factory, "Manufacturing & Distribution"],
    [BriefcaseBusiness, "Professional Services"],
    [Newspaper, "Media & Publishing"],
];
const stats = [
    [Layers3, "Business-first", "Solutions shaped around your goals"],
    [Globe2, "Connected", "Web, mobile and business systems"],
    [Users, "User-focused", "Experiences for customers and teams"],
    [ShieldCheck, "Scalable", "Built to support changing needs"],
    [Headset, "Ongoing", "A clear handover and support scope"],
];
const projects = [
    [
        "Trip Sarathi",
        "Flight search and travel navigation platform",
        tripProject
    ],
    [
        "BANDEVI CRM",
        "Sales enquiry and follow-up workspace",
        crmProject
    ],
    [
        "MaximTrip",
        "Travel booking and package management",
        maximtripProject
    ]
];
const values = [
    [Layers3, "Business-first", "approach"],
    [Code2, "Experienced", "team"],
    [Rocket, "Scalable &", "secure solutions"],
    [Handshake, "Transparent", "process"],
    [Headset, "Ongoing", "support"],
];
export default function Home() {
    return (
        <>
            <section className="hero hero--nexus">
                <div className="hero-glow" />
                <div className="container hero-grid hero-grid--centered">
                    <div className="hero-copy">
                        <div className="eyebrow eyebrow-light">
                            <span />
                            Business technology & software development
                        </div>
                        <h1>
                            Technology that moves your business <em>forward.</em>
                        </h1>
                        <p>
                            We build digital experiences, business applications and
                            intelligent systems that simplify operations, improve sales and
                            drive growth.
                        </p>
                        <div className="hero-actions">
                            <Link className="btn btn-primary" to="/services">
                                Explore Our Services <ArrowRight />
                            </Link>
                            <Link className="btn btn-outline" to="/our-work">
                                Explore Our Work <ArrowUpRight />
                            </Link>
                        </div>
                        <div className="hero-tags">
                            <span>✓ Websites & Apps</span>
                            <span>✓ CRM & ERP</span>
                            <span>✓ Travel Technology</span>
                            <span>✓ AI & Automation</span>
                        </div>
                    </div>
                    <div className="hero-art">
                        <img
                            src={heroVisual}
                            alt="Bandevi CRM dashboard and Trip Sarathi travel application"
                            className="hero-visual"
                        />
                    </div>
                </div>
            </section>
            <section className="stats">
                <div className="container stats-inner">
                    <div className="stats-intro">
                        Trusted for
                        <br />
                        business impact
                    </div>
                    {stats.map(([Icon, value, label]) => (
                        <div className="stat" key={value}>
                            <Icon />
                            <div>
                                <strong>{value}</strong>
                                <small>{label}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="section services-showcase">
                <div className="container services-panel">
                    <SectionHeading
                        eyebrow="Our services"
                        title="End-to-end technology solutions"
                        action={
                            <Link className="text-link" to="/services">
                                View all services <ArrowRight size={16} />
                            </Link>
                        }
                    />
                    <div className="service-grid">
                        {services.map(([Icon, title, desc, tone]) => (
                            <Link
                                className={`service-card ${tone}`}
                                to="/services"
                                key={title}
                            >
                                <Icon />
                                <h3>{title}</h3>
                                <p>{desc}</p>
                                <span className="round-arrow">
                                    <ArrowRight />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section industries industries-showcase">
                <div className="container industries-panel">
                    <SectionHeading
                        eyebrow="Industries we support"
                        title="Solutions for your industry"
                        action={
                            <Link className="text-link" to="/industries">
                                Explore industries <ArrowRight size={16} />
                            </Link>
                        }
                    />
                    <div className="industry-grid">
                        {industries.map(([Icon, title]) => (
                            <Link className="industry-card" to="/industries" key={title}>
                                <Icon />
                                <span>{title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section portfolio portfolio--editorial">
                <div className="container">
                    <SectionHeading
                        eyebrow="Selected work"
                        title="A selection of digital concepts."
                        action={
                            <Link className="text-link" to="/our-work">
                                View all projects <ArrowRight size={16} />
                            </Link>
                        }
                    />
                    <div className="project-grid">
                        {projects.map(([name, desc, img]) => (
                            <article className="project-card" key={name}>
                                <div className="project-image">
                                    <img src={img} alt={`${name} project concept preview`} />
                                </div>
                                <div className="project-info">
                                    <div>
                                        <h3>{name}</h3>
                                        <p>{desc}</p>
                                    </div>
                                    <Link to="/our-work" aria-label={`Explore ${name}`}>
                                        <ArrowUpRight />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section about">
                <div className="container about-row">
                    <div className="about-heading">
                        <div className="eyebrow">
                            <span />
                            Why Bandevi
                        </div>
                        <h2>A partner you can rely on.</h2>
                        <p>
                            We bring people, process and technology together to create
                            practical digital solutions around the way your business works.
                        </p>
                        <Link className="text-link" to="/about">
                            Discover Bandevi <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="value-grid">
                        {values.map(([Icon, title, sub]) => (
                            <div className="value-item" key={title}>
                                <Icon />
                                <strong>
                                    {title}
                                    <br />
                                    {sub}
                                </strong>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="cta-section">
                <div className="container">
                    <div className="cta">
                        <div>
                            <h2>Have a project in mind?</h2>
                            <p>
                                Let's discuss how the right technology can improve your
                                business.
                            </p>
                        </div>
                        <Link className="btn btn-primary" to="/contact">
                            Discuss Your Project <ArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
