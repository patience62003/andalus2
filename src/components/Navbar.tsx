import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ApplyButton } from "./ui";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    { to: "/", label: "Home" },
    { to: "/admissions", label: "Admissions" },
    { to: "/tuition", label: "Tuition" },
    { to: "/about", label: "About" },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    "hover:text-slate-900 hover:underline " +
    (isActive ? "text-slate-900 underline" : "text-slate-700");

  return (
    <nav className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-0">
        <Link to="/" className="text-base font-extrabold tracking-tight text-slate-900">
          Andalus
        </Link>

        <div className="hidden items-center gap-6 text-sm md:flex">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={linkClass}>
              {n.label}
            </NavLink>
          ))}
          <ApplyButton />
        </div>

        <button
          className="inline-flex items-center rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 text-sm md:hidden">
          <div className="flex flex-col gap-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setMenuOpen(false)}
                className="text-left text-slate-700 hover:text-slate-900"
              >
                {n.label}
              </Link>
            ))}
            <ApplyButton className="mt-2 w-full justify-center" />
          </div>
        </div>
      )}
    </nav>
  );
}
