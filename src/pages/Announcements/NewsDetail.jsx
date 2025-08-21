import { useParams, Link } from 'react-router-dom';
import Header from '../../components/announcement/Header';
import SocialShare from '../../components/announcement/SocialShare';
import { ArrowLeft, ArrowRight, Calendar, User } from 'lucide-react';

// Button component
const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-medium rounded transition focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm";
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline:
      "bg-transparent border border-blue-200 text-blue-700 hover:bg-blue-50 focus:ring-blue-500",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  return (
    <button
      className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Badge component
const Badge = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const variants = {
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-200 text-gray-700",
    accent: "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow",
  };
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

// Mock news data
export const mockNews = [
  {
    id: 1,
    title: 'GBU Inaugurates Centre for Artificial Intelligence',
    date: '2024-06-20',
    author: 'Research Cell',
    image: 'https://gburif.org/images/intro-carousel/gautam-buddha-university-3.jpg',
    tags: ['AI', 'Research', 'Innovation'],
    content: 'Gautam Buddha University has launched a state-of-the-art Centre for Artificial Intelligence to boost interdisciplinary research and smart technology development. The new centre aims to foster innovation through collaboration with academia and industry, encouraging students and researchers to work on cutting-edge AI solutions for societal challenges.',
  },
  {
    id: 2,
    title: 'Annual Convocation Ceremony Held at GBU',
    date: '2024-05-30',
    author: 'Admin',
    image: 'https://tennews.in/wp-content/uploads/2016/04/14-3.jpg',
    tags: ['Convocation', 'Graduation'],
    content: 'Gautam Buddha University hosted its annual convocation ceremony, awarding degrees to graduating students in the presence of faculty members, proud parents, and esteemed guests. The event celebrated academic excellence and recognized the hard work and dedication of the students as they embark on their future journeys.',
  },
  {
    id: 3,
    title: 'GBU Students Shine at National Hackathon',
    date: '2024-05-15',
    author: 'Innovation Cell',
    image: 'https://tennews.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-22-at-8.24.01-PM-e1669129715871.jpeg',
    tags: ['Hackathon', 'Technology'],
    content: 'A team of engineering students from Gautam Buddha University won top honors at a prestigious national hackathon by developing a smart traffic management system. Their innovative project aims to reduce congestion and optimize urban traffic flow, showcasing the technical prowess and problem-solving skills of GBU students.',
  },
  {
    id: 4,
    title: 'Library Introduces Digital Resources Hub',
    date: '2024-04-28',
    author: 'Library Committee',
    image: 'https://makesaral.com/wp-content/uploads/2025/06/Screenshot_2025-06-03-11-45-15-673_com.google.android.apps_.maps-edit.jpg',
    tags: ['Library', 'Facilities'],
    content: 'The GBU Library has expanded its services by launching a Digital Resources Hub, granting students access to thousands of e-books, scholarly journals, and digital archives. This initiative aims to promote a culture of research and self-learning while providing students with world-class academic resources at their fingertips.',
  },
  {
    id: 5,
    title: 'GBU Sports Meet: Champions of Tomorrow',
    date: '2024-04-10',
    author: 'Sports Department',
    image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Sports', 'Achievements'],
    content: 'Athletes from Gautam Buddha University showcased their talent and sportsmanship at the recent state-level sports meet, winning multiple medals across various disciplines. The event highlighted the university’s commitment to promoting physical fitness and nurturing future champions through dedicated training and excellent sports infrastructure.',
  },
  {
    id: 6,
    title: 'Environment Week Concludes with Plantation Drive',
    date: '2024-04-05',
    author: 'Eco Club',
    image: 'https://scalemag.online/wp-content/uploads/2019/03/Gautam_Buddha_University.jpg',
    tags: ['Environment', 'Campus Life'],
    content: 'To mark the conclusion of Environment Week, students and staff of Gautam Buddha University participated in a massive plantation drive, planting over 500 saplings across the campus. The initiative promotes sustainability, raises environmental awareness, and strengthens the university’s green campus mission.',
  },
  {
    id: 7,
    title: 'Abhivyakti 2024: Cultural Fest Wraps Up',
    date: '2024-03-20',
    author: 'Cultural Committee',
    image: 'https://images.openai.com/thumbnails/url/VUAonnicu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4pdXePdE1PTTRzDypwLPYzijAtjjAIzSpJLfbzKgur8o3y1E3XTdWNqNBNzwyvisoxzcgLcHNLSYtXKwYAxKYpTA',
    tags: ['Cultural', 'Fest'],
    content: 'Abhivyakti 2024, the annual cultural fest of GBU, concluded successfully after three vibrant days of music, dance performances, art exhibitions, and celebrity shows. The fest brought together students from various disciplines, celebrating diversity and talent on campus.',
  },
  {
    id: 8,
    title: 'Blood Donation Camp Organized by NSS',
    date: '2024-03-15',
    author: 'NSS Unit',
    image: 'https://nss.gbu.ac.in/uploads/imagesfiles/666c5a020f5b4_WhatsApp%20Image%202024-03-09%20at%204.29.32%20PM.jpeg',
    tags: ['Social Service', 'Health'],
    content: 'The NSS unit of Gautam Buddha University organized a blood donation camp where volunteers donated over 300 units of blood to support local hospitals. The camp received an overwhelming response, demonstrating the university community’s commitment to social welfare and public health.',
  },
  {
    id: 9,
    title: 'Coding Club Conducts Competitive Programming Contest',
    date: '2024-02-25',
    author: 'Coding Club',
    image: 'https://www.ic3ecsbhi.com/Events/20231006_133039.jpg',
    tags: ['Coding', 'Competition'],
    content: 'The Coding Club at GBU hosted a competitive programming contest that attracted top student coders from across the university. Participants competed for exciting prizes and internship opportunities, pushing their problem-solving and coding skills to the next level.',
  },
  {
    id: 10,
    title: 'GBU Signs MoU with German University',
    date: '2024-02-10',
    author: 'International Relations Office',
    image: 'https://ik.imagekit.io/edtechdigit/usaii/content/images/usaii-and-gautam-buddha-university-sign-mou-to-elevate-ai-education-in-india.png',
    tags: ['International', 'Collaboration'],
    content: 'Gautam Buddha University has signed a Memorandum of Understanding (MoU) with a prestigious German university to facilitate student exchanges, collaborative research projects, and academic programs. This partnership aims to broaden the global exposure of GBU students and faculty.',
  },
  {
    id: 11,
    title: 'Yoga Day Celebration Promotes Wellness',
    date: '2024-01-25',
    author: 'Wellness Club',
    image: 'https://images.openai.com/thumbnails/url/-F4ohXicu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw6yNHIy1zUsTgtKys-qMC0v9g41dorK8M8qSM7KDixODy8NdfTNzi9OLK6IKvc0cjKuiM8pLjVwz_RMcVQrBgAhZyqH',
    tags: ['Yoga', 'Wellness'],
    content: 'In celebration of International Yoga Day, over 1000 students gathered on the main lawn of Gautam Buddha University for a mass yoga session promoting wellness and mindfulness. The event emphasized the importance of physical and mental well-being in students’ lives.',
  },
  {
    id: 12,
    title: 'Guest Lecture on Industry Trends by Tech Leader',
    date: '2024-01-15',
    author: 'Career Cell',
    image: 'https://www.ux4g.gov.in/assets/img/awareness-workshop/gbu-19-11-24/900x16.webp',
    tags: ['Lecture', 'Careers'],
    content: 'The Career Cell at GBU organized a guest lecture featuring a renowned tech industry leader who shared valuable insights on current industry trends, emerging technologies, and career opportunities. Students gained practical knowledge and tips to excel in the tech world.',
  },
  {
    id: 13,
    title: 'Placement Season: Record Offers for 2024 Batch',
    date: '2023-12-30',
    author: 'Placement Cell',
    image: 'https://images.openai.com/thumbnails/url/vLSln3icu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw5MDgsycfcx94zMcrQ0dXS1SHP1Kg70twj0CneKL0gucS7MjChwjfcwCdaNLAv2LA9IMrMszA8yS65QKwYAl74oRw',
    tags: ['Placements', 'Careers'],
    content: 'The placement season at Gautam Buddha University concluded on a high note, with a record number of students from the 2024 graduating batch receiving lucrative offers from top MNCs in IT, finance, and consulting sectors. The success reflects the university’s strong industry connect and focus on employability.',
  },
  {
    id: 14,
    title: 'Arts Club Organizes Photography & Painting Workshop',
    date: '2023-12-15',
    author: 'Arts Club',
    image: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Workshop', 'Arts'],
    content: 'The Arts Club of GBU conducted a photography and painting workshop for budding artists to learn new techniques and enhance their skills. Participants showcased their creative works in an on-campus exhibition, inspiring more students to explore the world of arts.',
  },
  {
    id: 15,
    title: 'Political Science Students Visit Parliament House',
    date: '2023-12-05',
    author: 'Political Science Dept',
    image: 'https://niu.edu.in/wp-content/uploads/2025/06/image5-1.webp',
    tags: ['Educational Tour', 'Politics'],
    content: 'Political Science students from Gautam Buddha University visited the Parliament House in New Delhi as part of their educational tour. They attended live sessions, interacted with lawmakers, and gained practical insights into the functioning of the Indian democratic system.',
  },
];



// Simple date formatting function (similar to date-fns format)
function format(date, formatStr) {
  const d = new Date(date);
  const options = {};
  if (formatStr.includes('MMMM')) options.month = 'long';
  if (formatStr.includes('MMM')) options.month = 'short';
  if (formatStr.includes('dd')) options.day = '2-digit';
  if (formatStr.includes('yyyy')) options.year = 'numeric';
  return d.toLocaleDateString(undefined, options);
}

const NewsDetail = () => {
  const { id } = useParams();
const news = mockNews.find(item => item.id === Number(id));




  if (!news) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        {/* <Header /> */}
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-extrabold text-blue-800 mb-4">News not found</h1>
          <Link to="/announcements/news-notifications">
            <Button size="lg" variant="primary" className="mt-4">
              <ArrowLeft size={18} className="mr-2" />
              Back to News
            </Button>
          </Link>
        </div>
      </div>
    );
  }

 
const currentIndex = mockNews.findIndex(item => item.id === Number(id));
const previousNews = currentIndex > 0 ? mockNews[currentIndex - 1] : null;
const nextNews = currentIndex < mockNews.length - 1 ? mockNews[currentIndex + 1] : null;


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* <Header />/ */}

      <div className="container mx-auto px-4 py-10 max-w-3xl">
        <div className="mb-8">
          <Link to="/announcements/news-notifications">
            <Button variant="outline" size="sm" className="group">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition" />
              Back to News
            </Button>
          </Link>
        </div>

        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100 transition hover:shadow-blue-200">
          {news.image && (
            <div className="relative aspect-video w-full overflow-hidden group">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>
          )}

          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-5">
              {news.tags.map((tag) => (
                <Badge key={tag} variant="accent">
                  #{tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl font-extrabold text-blue-900 mb-4 leading-tight drop-shadow">
              {news.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 text-blue-700/80 gap-2">
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <Calendar size={16} className="text-blue-400" />
                  {format(new Date(news.date), 'MMMM dd, yyyy')}
                </span>
                <span className="hidden sm:inline-block h-4 w-px bg-blue-200 mx-2" />
                <span className="flex items-center gap-1">
                  <User size={16} className="text-blue-400" />
                  {news.author}
                </span>
              </div>
              <SocialShare
                url={window.location.href}
                title={news.title}
              />
            </div>

            <div className="prose max-w-none text-blue-900 prose-lg">
              <p className="text-lg leading-relaxed font-medium">
                {news.content}
              </p>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch mt-10 gap-4">
          {previousNews ? (
            <Link to={`/announcements/news-notifications/${previousNews.id}`} className='flex-1'>


              <Button
                variant="outline"
                className="w-full text-left flex items-center gap-3 border-blue-200 hover:border-blue-400 group"
              >
                <ArrowLeft size={18} className="mr-2 text-blue-400 group-hover:-translate-x-1 transition" />
                <div>
                  <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Previous</div>
                  <div className="line-clamp-1 font-medium text-blue-800">{previousNews.title}</div>
                </div>
              </Button>
            </Link>
          ) : <div className="flex-1" />}

          {nextNews ? (
            <Link to={`/announcements/news-notifications/${nextNews.id}`} className="flex-1">
              <Button
                variant="outline"
                className="w-full text-right flex items-center gap-3 justify-end border-blue-200 hover:border-blue-400 group"
              >
                <div>
                  <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Next</div>
                  <div className="line-clamp-1 font-medium text-blue-800">{nextNews.title}</div>
                </div>
                <ArrowRight size={18} className="ml-2 text-blue-400 group-hover:translate-x-1 transition" />
              </Button>
            </Link>
          ) : <div className="flex-1" />}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
