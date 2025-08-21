// import React from 'react';
// import { Mail, Phone, MapPin, BookOpen } from 'lucide-react';

// const FacultyHeader = ({ faculty }) => {
//   return (
//     <section className="bg-white py-8 border-b border-gray-200 border-solid">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Left side - Faculty Photo */}
//             <div className="lg:w-80 flex-shrink-0">
//               <img
//                 src={`https://meow.tilchattaas.com/media/${faculty.image}`}
//                 alt={faculty.name}
//                 className="w-52 h-52 rounded-3xl ml-12 object-cover mb-4 border-4 border-blue-100 group-hover:border-blue-200 transition-colors"
//               />

//             </div>

//             {/* Right side - Faculty Info */}
//             <div className="flex-1">
//               <div className="text-left">
//                 <h1 className="text-3xl font-bold text-gray-900 mb-2 text-left">{faculty.name}</h1>

//                 {/* Tags */}
//                 {faculty.tags && (
//                   <div className="flex flex-wrap gap-2 mb-4 justify-start">
//                     {faculty.tags.map((tag, index) => (
//                       <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 )}

//                 <p className="text-lg text-gray-600 mb-4 text-left">{faculty.designation}</p>

//                 <div className="flex items-center space-x-2 text-gray-600 mb-3 justify-start">
//                   <BookOpen className="w-4 h-4" />
//                   <span>{faculty.specialization}</span>
//                 </div>

//                 {/* Contact Information */}
//                 <div className="space-y-2 text-sm text-gray-600">
//                   <div className="flex items-center space-x-2">
//                     <MapPin className="w-4 h-4" />
//                     <span>{faculty.office}</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Phone className="w-4 h-4" />
//                     <span>{faculty.phone}</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Mail className="w-4 h-4" />
//                     <a href={`mailto:${faculty.email}`} className="text-blue-600 hover:underline">
//                       {faculty.email}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FacultyHeader;


import React from 'react';
import { Mail, Phone, Download, ExternalLink, MapPin } from 'lucide-react';

// Reusable Card component
const Card = ({ className = '', children, ...props }) => (
  <div
    className={`rounded-2xl border border-gray-200 border-solid bg-white ${className}`}
    {...props}
  >
    {children}
  </div>
);

// Reusable Badge component
const Badge = ({ className = '', children, ...props }) => (
  <span
    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${className}`}
    {...props}
  >
    {children}
  </span>
);

// Reusable Button component
const Button = ({ className = '', variant = 'solid', children, ...props }) => {
  const base =
    'inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  let styles = '';
  if (variant === 'outline') {
    styles = 'border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-300';
  } else {
    styles = 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500';
  }

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};

const FacultyHeader = ({ faculty }) => {
  return (
    <Card className="p-8 my-8 shadow-lg mx-auto w-5/6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col p-5 lg:flex-row gap-8">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
            <img
              src={`https://meow.tilchattaas.com/media/${faculty?.image || 'default.png'}`}
              alt={faculty?.name || 'Faculty'}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {faculty?.name || 'Dr. Faculty Name'}
            </h1>
            <p className="text-xl text-blue-600 font-semibold mb-4">
              {faculty?.designation || 'Designation'}
            </p>

            {/* Tags */}
            {faculty?.tags && (
              <div className="flex flex-wrap gap-2 mb-6">
                {faculty.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Specialization */}
            <div className="flex items-center gap-3 text-gray-600 mb-4">
              <span className="font-medium">
                {faculty?.specialization || 'Specialization Area'}
              </span>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5" />
                <span>{faculty?.phone || 'Phone Number'}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5" />
                <a
                  href={`mailto:${faculty?.email || '#'}`}
                  className="text-blue-600 hover:underline"
                >
                  {faculty?.email || 'email@example.com'}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>{faculty?.office || 'Office Address'}</span>
              </div>
            </div>

            {/* Action Buttons — always visible! */}
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() =>
                  window.open(faculty?.cv || '#', '_blank')
                }
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  window.open(faculty?.googleScholar || '#', '_blank')
                }
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Google Scholar
              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  window.open(faculty?.orcid || '#', '_blank')
                }
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                ORCID Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex-shrink-0">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center border border-green-200 border-solid">
              <div className="text-2xl font-bold text-green-600">
                {faculty?.experience || '--'}
              </div>
              <div className="text-sm text-green-700">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">
                {faculty?.publications || '--'}
              </div>
              <div className="text-sm text-blue-700">Publications</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center border border-purple-200 border-solid">
              <div className="text-2xl font-bold text-purple-600">
                {faculty?.talks || '--'}
              </div>
              <div className="text-sm text-purple-700">Talks Delivered</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center border border-orange-200 border-solid">
              <div className="text-2xl font-bold text-orange-600">
                {faculty?.projects || '--'}
              </div>
              <div className="text-sm text-orange-700">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FacultyHeader;

