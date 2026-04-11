import React from "react";
import { Globe } from "lucide-react";

const ProfilePreview = ({ profile }) => (
  <section id="profile-preview" className="rounded-2xl border border-stone-300 bg-white p-5 shadow-sm">
    <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-stone-900">
      <Globe className="h-5 w-5" /> Public Profile Preview
    </h2>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-xl border border-stone-200 p-3"><p className="text-xs uppercase text-stone-500">Name</p><p className="font-semibold text-stone-900">{profile.name}</p></div>
      <div className="rounded-xl border border-stone-200 p-3"><p className="text-xs uppercase text-stone-500">Designation</p><p className="font-semibold text-stone-900">{profile.designation}</p></div>
      <div className="rounded-xl border border-stone-200 p-3"><p className="text-xs uppercase text-stone-500">Email</p><p className="font-semibold text-stone-900">{profile.email}</p></div>
      <div className="rounded-xl border border-stone-200 p-3"><p className="text-xs uppercase text-stone-500">Phone</p><p className="font-semibold text-stone-900">{profile.phone}</p></div>
      <div className="rounded-xl border border-stone-200 p-3"><p className="text-xs uppercase text-stone-500">Department</p><p className="font-semibold text-stone-900">{profile.department}</p></div>
      <div className="rounded-xl border border-stone-200 p-3"><p className="text-xs uppercase text-stone-500">Office</p><p className="font-semibold text-stone-900">{profile.office}</p></div>
    </div>
  </section>
);

export default ProfilePreview;
