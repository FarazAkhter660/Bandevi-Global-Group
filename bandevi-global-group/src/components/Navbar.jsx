import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Our Work", "/our-work"],
  ["About", "/about"],
  ["Contact", "/contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Logo />
        <button
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          className={`main-nav ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === "/"} onClick={close}>
              {label}
            </NavLink>
          ))}
          <Link
            className="button button-primary nav-cta"
            to="/contact"
            onClick={close}
          >
            Discuss Your Project <ArrowUpRight size={17} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
