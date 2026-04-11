import React from "react";
import { BookOpen, GraduationCap, Mail, Plus, Trash2, User } from "lucide-react";
import Field from "./Field";
import { inputClass } from "./constants";

const ProfileForms = ({
  profile,
  tagsInput,
  onUpdateField,
  onUpdateTags,
  onUpdateResearchArea,
  onAddResearchArea,
  onRemoveResearchArea,
  newAreaTitle,
  newAreaDesc,
  setNewAreaTitle,
  setNewAreaDesc,
}) => {
  return (
    <>
      <section className="grid gap-6 lg:grid-cols-2">
        <div id="personal-details" className="rounded-2xl border border-stone-300 bg-white p-5 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-stone-900">
            <User className="h-5 w-5" /> Personal Details
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Full Name"><input className={inputClass} value={profile.name || ""} onChange={(e) => onUpdateField("name", e.target.value)} /></Field>
            <Field label="Designation"><input className={inputClass} value={profile.designation || ""} onChange={(e) => onUpdateField("designation", e.target.value)} /></Field>
            <Field label="Specialization"><input className={inputClass} value={profile.specialization || ""} onChange={(e) => onUpdateField("specialization", e.target.value)} /></Field>
            <Field label="Department"><input className={inputClass} value={profile.department || ""} onChange={(e) => onUpdateField("department", e.target.value)} /></Field>
            <Field label="School"><input className={inputClass} value={profile.school || ""} onChange={(e) => onUpdateField("school", e.target.value)} /></Field>
            <Field label="Experience (Years)"><input className={inputClass} type="number" min="0" value={profile.experience_years || 0} onChange={(e) => onUpdateField("experience_years", Number(e.target.value || 0))} /></Field>
            <Field label="Total Publications"><input className={inputClass} type="number" min="0" value={profile.publications || 0} onChange={(e) => onUpdateField("publications", Number(e.target.value || 0))} /></Field>
          </div>
        </div>

        <div id="contact-links" className="rounded-2xl border border-stone-300 bg-white p-5 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-stone-900">
            <Mail className="h-5 w-5" /> Contact & Links
          </h2>
          <div className="space-y-4">
            <Field label="Email"><input className={inputClass} value={profile.email || ""} onChange={(e) => onUpdateField("email", e.target.value)} /></Field>
            <Field label="Phone"><input className={inputClass} value={profile.phone || ""} onChange={(e) => onUpdateField("phone", e.target.value)} /></Field>
            <Field label="Office"><input className={inputClass} value={profile.office || ""} onChange={(e) => onUpdateField("office", e.target.value)} /></Field>
            <Field label="Faculty Profile URL"><input className={inputClass} value={profile.faculty_url || ""} onChange={(e) => onUpdateField("faculty_url", e.target.value)} /></Field>
            <Field label="Profile Image URL"><input className={inputClass} value={profile.image_url || ""} onChange={(e) => onUpdateField("image_url", e.target.value)} /></Field>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="CV Link"><input className={inputClass} value={profile.cv || ""} onChange={(e) => onUpdateField("cv", e.target.value)} /></Field>
              <Field label="Google Scholar Link"><input className={inputClass} value={profile.googleScholar || ""} onChange={(e) => onUpdateField("googleScholar", e.target.value)} /></Field>
            </div>
            <Field label="ORCID Link"><input className={inputClass} value={profile.orcid || ""} onChange={(e) => onUpdateField("orcid", e.target.value)} /></Field>
            <Field label="Profile Tags (comma separated)"><input className={inputClass} value={tagsInput} onChange={(e) => onUpdateTags(e.target.value)} /></Field>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div id="academic-content" className="rounded-2xl border border-stone-300 bg-white p-5 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-stone-900">
            <GraduationCap className="h-5 w-5" /> Academic Content
          </h2>
          <div className="space-y-4">
            <Field label="Education Summary"><input className={inputClass} value={profile.education || ""} onChange={(e) => onUpdateField("education", e.target.value)} /></Field>
            <Field label="Short Bio"><textarea className={`${inputClass} min-h-24`} value={profile.shortBio || ""} onChange={(e) => onUpdateField("shortBio", e.target.value)} /></Field>
            <Field label="Full Bio"><textarea className={`${inputClass} min-h-36`} value={profile.fullBio || ""} onChange={(e) => onUpdateField("fullBio", e.target.value)} /></Field>
          </div>
        </div>

        <div id="research-areas" className="rounded-2xl border border-stone-300 bg-white p-5 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-stone-900">
            <BookOpen className="h-5 w-5" /> Research Areas
          </h2>
          <div className="space-y-3">
            {(profile.researchAreas || []).map((area, index) => (
              <div key={`area-${index}`} className="rounded-xl border border-stone-200 p-3">
                <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                  <div className="space-y-3">
                    <input className={inputClass} value={area.title || ""} onChange={(e) => onUpdateResearchArea(index, "title", e.target.value)} placeholder="Area title" />
                    <textarea className={`${inputClass} min-h-20`} value={area.description || ""} onChange={(e) => onUpdateResearchArea(index, "description", e.target.value)} placeholder="Area description" />
                  </div>
                  <button onClick={() => onRemoveResearchArea(index)} className="inline-flex h-10 items-center gap-2 rounded-lg border border-rose-200 bg-rose-50 px-3 text-sm font-medium text-rose-700 hover:bg-rose-100">
                    <Trash2 className="h-4 w-4" /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-stone-200 bg-stone-50 p-3">
            <p className="mb-3 text-sm font-semibold text-stone-700">Add New Research Area</p>
            <div className="grid gap-3">
              <input className={inputClass} value={newAreaTitle} onChange={(e) => setNewAreaTitle(e.target.value)} placeholder="Title" />
              <textarea className={`${inputClass} min-h-20`} value={newAreaDesc} onChange={(e) => setNewAreaDesc(e.target.value)} placeholder="Description" />
              <button onClick={onAddResearchArea} className="inline-flex items-center justify-center gap-2 rounded-xl bg-stone-900 px-3 py-2 text-sm font-semibold text-white hover:bg-stone-800">
                <Plus className="h-4 w-4" /> Add Area
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileForms;
