
import React from 'react';
// Simple Card, CardHeader, CardTitle, CardContent, and Badge components with Tailwind styling

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl shadow-md border border-gray-200 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return (
    <div className={`px-6 py-4 border-b border-gray-100 bg-gray-50 rounded-t-xl ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "" }) {
  return (
    <h2 className={`text-lg font-semibold text-gray-800 tracking-tight ${className}`}>
      {children}
    </h2>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
}

export function Badge({ children, variant = "outline", className = "" }) {
  let base =
    "inline-block px-2 py-0.5 rounded-full text-xs font-semibold border transition-colors duration-150";
  let color =
    variant === "outline"
      ? "bg-white border-current"
      : "bg-gray-100 border-transparent";
  return (
    <span className={`${base} ${color} ${className}`}>
      {children}
    </span>
  );
}
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// Custom Select components using Headless UI Listbox and Tailwind CSS

import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';

export function Select({ value, onValueChange, children }) {
  // children: SelectTrigger and SelectContent
  // We'll extract options from SelectContent
  let trigger, content;
  React.Children.forEach(children, child => {
    if (child.type === SelectTrigger) trigger = child;
    if (child.type === SelectContent) content = child;
  });
  const options = React.Children.map(content.props.children, c => ({
    value: c.props.value,
    label: c.props.children,
  }));

  return (
    <Listbox value={value} onChange={onValueChange}>
      {({ open }) => (
        <div className="relative">
          {React.cloneElement(trigger, { open, value, options })}
          <Transition
            as={Fragment}
            show={open}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {React.cloneElement(content, { value, options })}
          </Transition>
        </div>
      )}
    </Listbox>
  );
}

export function SelectTrigger({ className = '', open, value, options, children }) {
  const selected = options.find(o => o.value === value);
  return (
    <Listbox.Button
      className={`flex items-center justify-between bg-white border border-gray-300 rounded-md px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    >
      <span className="block truncate">{selected ? selected.label : children}</span>
      <ChevronUpDownIcon className="h-5 w-5 text-gray-400 ml-2" aria-hidden="true" />
    </Listbox.Button>
  );
}

export function SelectContent({ className = '', value, options, children }) {
  return (
    <Listbox.Options
      className={`absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none ${className}`}
    >
      {options.map(option => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Listbox.Options>
  );
}

export function SelectItem({ value, children }) {
  return (
    <Listbox.Option value={value} as={Fragment}>
      {({ selected, active }) => (
        <li
          className={`cursor-pointer select-none relative py-2 pl-10 pr-4 ${
            active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
          }`}
        >
          <span className={`block truncate ${selected ? 'font-semibold' : ''}`}>{children}</span>
          {selected ? (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
              <CheckIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          ) : null}
        </li>
      )}
    </Listbox.Option>
  );
}

export function SelectValue({ placeholder }) {
  // This is handled by SelectTrigger, so just render nothing
  return null;
}

const CourseApplications = () => {
  const schoolData = {
    'Engineering': [
      { course: 'B.Tech CSE', applications: 450, approved: 180, pending: 50, rejected: 20 },
      { course: 'B.Tech ECE', applications: 320, approved: 150, pending: 30, rejected: 15 },
      { course: 'M.Tech CSE', applications: 180, approved: 80, pending: 15, rejected: 8 }
    ],
    'ICT': [
      { course: 'BCA', applications: 280, approved: 120, pending: 25, rejected: 10 },
      { course: 'MCA', applications: 200, approved: 90, pending: 20, rejected: 8 }
    ],
    'Management': [
      { course: 'MBA', applications: 280, approved: 120, pending: 25, rejected: 10 },
      { course: 'BBA', applications: 170, approved: 80, pending: 15, rejected: 5 }
    ],
    'Biotechnology': [
      { course: 'B.Sc Biotech', applications: 150, approved: 90, pending: 20, rejected: 5 },
      { course: 'M.Sc Biotech', applications: 120, approved: 70, pending: 10, rejected: 3 }
    ],
    'Law': [
      { course: 'LLB', applications: 200, approved: 100, pending: 15, rejected: 8 },
      { course: 'LLM', applications: 120, approved: 60, pending: 10, rejected: 5 }
    ]
  };

  const [selectedSchool, setSelectedSchool] = React.useState('Engineering');
  const currentData = schoolData[selectedSchool] || schoolData['Engineering'];

  return (
    <div className="space-y-6">
      {/* School Selector */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Course Applications by School</CardTitle>
            <Select value={selectedSchool} onValueChange={setSelectedSchool}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select School" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(schoolData).map((school) => (
                  <SelectItem key={school} value={school}>
                    {school}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={currentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="course" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="applications" fill="#3b82f6" name="Total Applications" />
                <Bar dataKey="approved" fill="#10b981" name="Approved" />
                <Bar dataKey="pending" fill="#f59e0b" name="Pending" />
                <Bar dataKey="rejected" fill="#ef4444" name="Rejected" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* School Images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['photo-1461749280684-dccba630e2f6', 'photo-1487058792275-0ad4aaf24ca7', 'photo-1581091226825-a6a2a5aee158', 'photo-1527576539890-dfa815648363'].map((image, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden h-32">
            <img 
              src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=300&h=200`}
              alt={`School ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Statistics - {selectedSchool}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Course</th>
                  <th className="text-left p-2">Total Applications</th>
                  <th className="text-left p-2">Approved</th>
                  <th className="text-left p-2">Pending</th>
                  <th className="text-left p-2">Rejected</th>
                  <th className="text-left p-2">Approval Rate</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((course, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-2 font-medium">{course.course}</td>
                    <td className="p-2">{course.applications}</td>
                    <td className="p-2">
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        {course.approved}
                      </Badge>
                    </td>
                    <td className="p-2">
                      <Badge variant="outline" className="text-orange-600 border-orange-200">
                        {course.pending}
                      </Badge>
                    </td>
                    <td className="p-2">
                      <Badge variant="outline" className="text-red-600 border-red-200">
                        {course.rejected}
                      </Badge>
                    </td>
                    <td className="p-2">
                      {((course.approved / (course.applications - course.pending)) * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseApplications;
