import React from "react";
import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
  return (
    <Link
      className={`brand ${light ? "brand-light" : ""}`}
      to="/"
      aria-label="Bandevi Global Group home"
    >
      <img src="/logo.svg" alt="Bandevi Global Group" width="224" height="58" />
    </Link>
  );
}
