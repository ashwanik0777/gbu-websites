import React from "react";

export const Field = ({ label, children }) => (
  <div>
    <label className="mb-1 block text-sm font-medium text-stone-700">{label}</label>
    {children}
  </div>
);

export default Field;
