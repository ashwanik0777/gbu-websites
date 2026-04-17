import React, { useEffect, useState } from "react";
import {
  Send,
  Info,
  CreditCard,
  User,
  Phone,
  LogIn,
  Map,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import SearchableWrapper from "../Searchbar/SearchableWrapper";

const leftLinks = [
  { label: "Tenders", to: "/tender", icon: Send, type: "internal" },
  { label: "Recruitments", to: "/recruitments", icon: Send, type: "internal" },
  { label: "Booking", to: "/booking", type: "internal" },
  { label: "RTI", to: "/rti", icon: Info, type: "internal" },
  { label: "Sitemap", to: "/sitemapMain", type: "internal" },
];

const rightLinks = [
  { label: "Online Fee Payment", to: "https://csms.gbu.ac.in/", icon: CreditCard, type: "external" },
  { label: "Student Portal", to: "https://gbu.samarth.ac.in/", icon: User, type: "external" },
  { label: "Faculty Login", to: "https://gbu.samarth.ac.in/", icon: LogIn, type: "external" },
  { label: "Admin Login", to: "https://gbu.samarth.ac.in/", icon: LogIn, type: "external" },
  { label: "Grievance Portal", to: "/grievance", icon: Map, type: "internal" },
  { label: "Directory", to: "/contactDirectory", icon: Map, type: "internal" },
  { label: "Contact Us", to: "/contactUs", icon: Phone, type: "internal" },
];

const renderNavLink = (item, className) => {
  const Icon = item.icon;
  const content = (
    <>
      {Icon ? <Icon size={14} className="shrink-0" /> : null}
      <span className="truncate">{item.label}</span>
    </>
  );

  if (item.type === "external") {
    return (
      <a key={item.label} href={item.to} className={className} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link key={item.label} to={item.to} className={className}>
      {content}
    </Link>
  );
};

const Primarynavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <SearchableWrapper>
      <nav
        className="fixed left-0 top-0 z-50 w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow"
        role="navigation"
        aria-label="Primary navigation"
      >
        <div className="mx-auto flex min-h-12 w-full max-w-[1920px] items-center gap-3 px-3 py-2 sm:px-4 lg:px-6 xl:px-10">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-white/10 lg:hidden"
          >
            <Menu size={18} />
          </button>

          <div className="hidden w-full items-center justify-between gap-6 lg:flex">
            <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1 text-xs xl:text-sm">
              {leftLinks.map((item) =>
                renderNavLink(item, "inline-flex items-center gap-1.5 rounded-md px-2 py-1 hover:bg-white/15"),
              )}
            </div>

            <div className="flex min-w-0 flex-wrap items-center justify-end gap-x-4 gap-y-1 text-xs xl:text-sm">
              {rightLinks.map((item) =>
                renderNavLink(item, "inline-flex items-center gap-1.5 rounded-md px-2 py-1 hover:bg-white/15"),
              )}
            </div>
          </div>

          <div className="min-w-0 flex-1 text-right text-[11px] font-medium opacity-90 lg:hidden">
            Quick Links
          </div>
        </div>

        <div
          className={`fixed inset-0 z-[100] transition ${
            isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-black/45"
          />

          <aside
            className={`absolute left-0 top-0 h-full w-[86vw] max-w-sm bg-white p-4 text-slate-900 shadow-2xl transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-600">Menu</p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-5 overflow-y-auto pb-6">
              <section>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Quick Links</p>
                <div className="space-y-1">
                  {leftLinks.map((item) =>
                    renderNavLink(
                      item,
                      "flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100",
                    ),
                  )}
                </div>
              </section>

              <section>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Portals</p>
                <div className="space-y-1">
                  {rightLinks.map((item) =>
                    renderNavLink(
                      item,
                      "flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100",
                    ),
                  )}
                </div>
              </section>
            </div>
          </aside>
        </div>
      </nav>
    </SearchableWrapper>
  );
};

export default Primarynavbar;
