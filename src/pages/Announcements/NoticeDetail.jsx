import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import SocialShare from '../../components/announcement/SocialShare';

// Button component
const Button = ({ children, variant = "default", size = "md", className = "", ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Badge component
const Badge = ({ children, className = "" }) => (
  <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wide ${className}`}>
    {children}
  </span>
);

// Mock data...
const mockNotices = [
  {
    id: 1,
    title: "End Semester Examination Schedule - June 2025",
    content: "The final examination schedule for all undergraduate and postgraduate programs for the June 2025 End Semester exams has been released. Students are advised to carefully check the detailed timetable and ensure they appear for the exams as per the allotted dates and time slots. Any clash or discrepancy should be reported to the Examination Cell immediately. Download the official PDF for complete subject-wise details.",
    date: "2025-05-25",
    type: "Exam",
    pdfUrl: "https://gbu.ac.in/notices/exam-schedule-june-2025.pdf"
  },
  {
    id: 2,
    title: "Extension of Fee Payment Deadline - Summer Semester",
    content: "This is to notify all students enrolled in the Summer Semester 2025 that the last date for fee payment has been extended up to 5th June 2025. Students are requested to clear their dues within the extended period to avoid any late fee charges or restrictions in attending classes and appearing in examinations. Kindly visit the student portal for fee payment and receipt download.",
    date: "2025-05-20",
    type: "Fee",
    pdfUrl: "https://gbu.ac.in/notices/fee-extension-summer-2025.pdf"
  },
  {
    id: 3,
    title: "Annual Convocation 2025 Notification",
    content: "The Gautam Buddha University Annual Convocation for the graduating batch of 2025 is scheduled to be held on 30th July 2025 at the University Auditorium. All eligible graduating students are required to complete the registration process online through the Convocation Portal and pay the requisite fee for the award of degree certificates. Detailed instructions regarding gown collection, rehearsal, and other protocols are provided in the PDF attached.",
    date: "2025-05-15",
    type: "Event",
    pdfUrl: "https://gbu.ac.in/notices/convocation-2025-guidelines.pdf"
  },
  {
    id: 4,
    title: "Academic Calendar 2025-26 Released",
    content: "The Academic Section has published the detailed Academic Calendar for the academic session 2025-26. It contains important dates including semester commencement, mid-term exams, end-term exams, holidays, vacations, and other academic events. All students and faculty members are advised to download and refer to the calendar for better academic planning.",
    date: "2025-05-10",
    type: "Academic",
    pdfUrl: "https://gbu.ac.in/notices/academic-calendar-2025-26.pdf"
  },
  {
    id: 5,
    title: "Notice Regarding Monsoon Break",
    content: "It is hereby informed that the University will observe the Monsoon Break from 20th July to 5th August 2025 for all regular courses. Students are requested to plan their travel and other activities accordingly. The academic activities will resume as per the schedule mentioned in the Academic Calendar. Hostellers are advised to vacate the premises if required by the Hostel Administration.",
    date: "2025-05-12",
    type: "General",
    pdfUrl: ""
  },
  {
    id: 6,
    title: "Mid-Term Examination Guidelines - July 2025",
    content: "The Examination Branch has issued detailed guidelines for the conduct of Mid-Term Examinations scheduled for July 2025. All students must strictly adhere to the examination rules and maintain discipline during the exams. Mobile phones and any kind of unfair means are strictly prohibited inside the examination hall. Students must carry their valid ID cards at all times.",
    date: "2025-06-01",
    type: "Exam",
    pdfUrl: "https://gbu.ac.in/notices/midterm-guidelines-july-2025.pdf"
  },
  {
    id: 7,
    title: "Scholarship Renewal Notice - 2025",
    content: "Students who are currently availing scholarships are informed to submit the renewal application forms for the academic year 2025-26 to the Scholarship Section latest by 10th August 2025. The application must be duly filled with all required supporting documents such as previous year mark sheets, income certificates, and recommendation letters wherever applicable.",
    date: "2025-06-05",
    type: "General",
    pdfUrl: ""
  },
  {
    id: 8,
    title: "Workshop on Cybersecurity and Data Privacy",
    content: "The School of Information and Communication Technology (ICT) is organizing a National Workshop on 'Cybersecurity and Data Privacy' on 22nd August 2025. Eminent industry experts and academicians will deliver talks and conduct hands-on sessions. Students and faculty are encouraged to register early as seats are limited. Download the brochure for registration details and session schedule.",
    date: "2025-06-10",
    type: "Event",
    pdfUrl: "https://gbu.ac.in/notices/cybersecurity-workshop-2025.pdf"
  },
  {
    id: 9,
    title: "Notice for Hostel Allotment - New Session",
    content: "Applications for hostel accommodation for the academic session 2025-26 are now open. Interested students must apply through the Hostel Management Portal and submit the required documents online. The allotment will be done on a first-come-first-served basis subject to availability. Students are advised to read the attached notice carefully for eligibility, fee structure, and rules.",
    date: "2025-06-15",
    type: "General",
    pdfUrl: "https://gbu.ac.in/notices/hostel-allotment-2025.pdf"
  },
  {
    id: 10,
    title: "Holiday Notice: Raksha Bandhan",
    content: "This is to inform all students, faculty, and staff that the University will remain closed on 18th August 2025 on account of Raksha Bandhan. Regular classes and office work will resume from the next working day as per the usual schedule.",
    date: "2025-06-18",
    type: "General",
    pdfUrl: ""
  }
];


// Date formatter
function format(date, formatStr) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const d = new Date(date);
  const month = months[d.getMonth()];
  const day = String(d.getDate()).padStart(2, "0");
  const year = d.getFullYear();
  return `${month} ${day}, ${year}`;
}

const NoticeDetail = () => {
  const { id } = useParams();
  const notice = mockNotices.find(item => item.id === Number(id));

  if (!notice) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Notice not found</h1>
          <Link to="/announcements/notices">
            <Button>Back to Notices</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getTypeColor = (type) => {
    const colors = {
      'Exam': 'bg-red-100 text-red-800',
      'Fee': 'bg-blue-100 text-blue-800',
      'Event': 'bg-green-100 text-green-800',
      'Academic': 'bg-purple-100 text-purple-800',
      'General': 'bg-gray-100 text-gray-800'
    };
    return colors[type] || colors['General'];
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-20">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
        <div className="mb-6">
          <Link to="/announcements/notices">
            <Button variant="outline" size="sm">
              <ArrowLeft size={16} className="mr-2" />
              Back to Notices
            </Button>
          </Link>
        </div>

        <Badge className={`${getTypeColor(notice.type)} mb-2`}>
          {notice.type}
        </Badge>

        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">{notice.title}</h1>
        <p className="text-gray-500 mb-6">Published on {format(notice.date, 'MMMM dd, yyyy')}</p>

        <div className="prose max-w-none mb-6">
          <p className="text-lg text-gray-700 leading-relaxed">{notice.content}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {notice.pdfUrl && (
            <a
              href={notice.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Button>
                <Download size={16} className="mr-2" />
                Download PDF
              </Button>
            </a>
          )}
          <SocialShare
            url={window.location.href}
            title={notice.title}
          />
        </div>
      </div>
    </div>
  );
};

export default NoticeDetail;
