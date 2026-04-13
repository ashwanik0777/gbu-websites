import React, { useMemo, useState } from "react";
import { Mail, Linkedin, Search, Users, GraduationCap, Star } from "lucide-react";
import { motion } from "framer-motion";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const facultyTeam = [
  {
    name: "Prof. Ravindra Kumar Sinha",
    role: "Chief Patron",
    department: "GBU Leadership",
    designation: "Vice Chancellor",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    email: "vc@gbu.ac.in",
  },
  {
    name: "Dr. Gaurav Kumar",
    role: "Faculty Lead & Convener",
    department: "School of ICT",
    designation: "Assistant Professor",
    email: "gaurav.kumar@gbu.ac.in",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Technical Advisor",
    department: "School of ICT",
    designation: "Associate Professor",
    email: "priya.sharma@gbu.ac.in",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Rajesh Singh",
    role: "Research Advisor",
    department: "School of ICT",
    designation: "Assistant Professor",
    email: "rajesh.singh@gbu.ac.in",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
];

const studentTeam = [
  {
    name: "Arjun Patel",
    role: "Full-Stack Developer",
    department: "B.Tech CSE",
    designation: "3rd Year",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/arjunpatel",
  },
  {
    name: "Priya Verma",
    role: "UI/UX Designer",
    department: "B.Tech CSE",
    designation: "2nd Year",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/priyaverma",
  },
  {
    name: "Rohit Kumar",
    role: "Backend Developer",
    department: "B.Tech IT",
    designation: "3rd Year",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/rohitkumar",
  },
  {
    name: "Sneha Gupta",
    role: "Frontend Developer",
    department: "B.Tech CSE",
    designation: "2nd Year",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/snehagupta",
  },
  {
    name: "Vikram Singh",
    role: "AI/ML Developer",
    department: "M.Tech CSE",
    designation: "1st Year",
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/vikramsingh",
  },
  {
    name: "Ananya Sharma",
    role: "Quality Assurance",
    department: "B.Tech IT",
    designation: "3rd Year",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/ananyasharma",
  },
];

const TeamCard = ({ member, isStudent = false }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.25, ease: "easeOut" }}
    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md"
  >
    <div className="relative mb-4 flex items-center gap-4">
      <img
        src={member.image}
        alt={member.name}
        className="h-16 w-16 rounded-2xl object-cover ring-2 ring-slate-100"
      />
      <div className="min-w-0">
        <p className="truncate text-base font-bold text-slate-900">{member.name}</p>
        <p className="truncate text-sm font-medium text-blue-700">{member.role}</p>
      </div>
    </div>

    <div className="mb-4 space-y-1">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{member.department}</p>
      <p className="text-sm text-slate-600">{member.designation}</p>
      <span
        className={cn(
          "inline-flex rounded-full px-2.5 py-1 text-xs font-semibold",
          isStudent ? "bg-emerald-100 text-emerald-700" : "bg-indigo-100 text-indigo-700",
        )}
      >
        {isStudent ? "Student Team" : "Faculty Team"}
      </span>
    </div>

    <div className="flex items-center gap-2">
      {member.email ? (
        <a
          href={`mailto:${member.email}`}
          className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100"
        >
          <Mail className="h-3.5 w-3.5" /> Email
        </a>
      ) : null}
      {member.linkedin ? (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100"
        >
          <Linkedin className="h-3.5 w-3.5" /> LinkedIn
        </a>
      ) : null}
    </div>
  </motion.article>
);

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("faculty");
  const [query, setQuery] = useState("");

  const currentMembers = activeTab === "faculty" ? facultyTeam : studentTeam;

  const filteredMembers = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return currentMembers;

    return currentMembers.filter((member) =>
      [member.name, member.role, member.department, member.designation]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(normalized),
    );
  }, [currentMembers, query]);

  const leadership = facultyTeam[0];

  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Leadership Spotlight</p>
            <h3 className="mt-1 text-2xl font-bold text-slate-900">{leadership.name}</h3>
            <p className="text-sm font-medium text-blue-700">{leadership.role}</p>
            <p className="mt-2 text-sm text-slate-600">
              Strategic guidance for high-impact digital transformation initiatives across the university.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Core Team Snapshot</p>
            <div className="mt-2 flex gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                <Users className="h-3.5 w-3.5" /> {facultyTeam.length} Faculty
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                <GraduationCap className="h-3.5 w-3.5" /> {studentTeam.length} Students
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveTab("faculty");
                setQuery("");
              }}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                activeTab === "faculty"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200",
              )}
            >
              Faculty Team
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab("students");
                setQuery("");
              }}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                activeTab === "students"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200",
              )}
            >
              Student Team
            </button>
          </div>

          <div className="relative min-w-[240px] flex-1 md:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search name, role, department..."
              className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 outline-none transition focus:border-slate-700"
            />
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-medium text-slate-600">
            {filteredMembers.length} result{filteredMembers.length === 1 ? "" : "s"}
          </p>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
            <Star className="h-3.5 w-3.5" /> Team-first collaborative culture
          </span>
        </div>

        {filteredMembers.length ? (
          <div className={cn("grid gap-4", activeTab === "faculty" ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3")}>
            {filteredMembers.map((member) => (
              <TeamCard key={`${member.name}-${member.role}`} member={member} isStudent={activeTab === "students"} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500">
            No team member found for this search.
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
