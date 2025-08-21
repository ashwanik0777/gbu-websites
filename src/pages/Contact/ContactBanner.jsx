import { Phone, Mail, MapPin } from "lucide-react";
import SocialIcons from "./SocialIcons";
import GoogleMap from "./GoogleMap";
import ContactForm from "./ContactForm";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper";
import BannerSection from "../../components/HeroBanner";
const CONTACT_DETAILS = [
  {
    icon: MapPin,
    title: "Address",
    content: (
      <>
        Yamuna Expressway, Greater Noida,
        <br />
        Gautam Budh Nagar, Uttar Pradesh (INDIA) - 201312
      </>
    ),
    bgColor: "bg-blue-500",
    hoverColor: "group-hover:bg-blue-600",
  },
  {
    icon: Phone,
    title: "Phone",
    content: (
      <a
        href="tel:01202344200"
        className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-lg"
      >
        0120-234-4200
      </a>
    ),
    bgColor: "bg-green-500",
    hoverColor: "group-hover:bg-green-600",
  },
  {
    icon: Mail,
    title: "Email",
    content: (
      <a
        href="mailto:info@gbu.ac.in"
        className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-lg"
      >
        info@gbu.ac.in
      </a>
    ),
    bgColor: "bg-purple-500",
    hoverColor: "group-hover:bg-purple-600",
  },
];

const ContactDetail = ({ icon: Icon, title, content, bgColor, hoverColor }) => (
  <div className="flex items-start space-x-4 group">
    <div
      className={`p-3 rounded-full shadow-lg ${bgColor} ${hoverColor} transition-colors duration-300`}
    >
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  </div>
);

const ContactInfo = () => (
  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg h-full transform hover:scale-105 transition-transform duration-300">
    <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
      Get In Touch
    </h3>
    <div className="space-y-8">
      {CONTACT_DETAILS.map((detail, index) => (
        <ContactDetail key={index} {...detail} />
      ))}
      <div className="pt-6 border-t border-gray-200">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h4>
        <SocialIcons />
      </div>
    </div>
  </div>
);

const SectionCard = ({ title, children }) => (
  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg h-full transform hover:scale-105 transition-transform duration-300">
    {title && (
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        {title}
      </h3>
    )}
    {children}
  </div>
);

const ContactBanner = () => (
  <SearchableWrapper>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <BannerSection title="Contact Us" subtitle="Connecting you with GBU." bgTheme={1} />
      {/* Content Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start mb-12">
            <ContactInfo />
            <SectionCard title="Find Us Here">
              <GoogleMap />
            </SectionCard>
            <SectionCard>
              <ContactForm />
            </SectionCard>
          </div>
        </div>
      </section>
    </div>
  </SearchableWrapper>
);

export default ContactBanner;
