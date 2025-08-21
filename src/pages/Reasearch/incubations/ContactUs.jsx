import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

import SearchableWrapper from "../../../components/Searchbar/SearchableWrapper";

const ContactUs = () => {

  return (
    <SearchableWrapper>
      <section className="px-4 py-15 ">
        <h1 className="text-3xl font-bold text-center mb-15">CONTACT US</h1>

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 overflow-hidden flex flex-col md:flex-row">
          {/* Contact Info */}
          <div className="w-full md:w-1/2 p-8">


            <div className="space-y-4 text-gray-700 text-lg">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-600 mt-1" />
                <p>GBU Campus, Greater Noida – 201312, UP, India</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-blue-600 mt-1" />
                <p>0120-2346170 / 4275</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-blue-600 mt-1" />
                <div>
                  <a href="mailto:incubator@gbu.ac.in"  >
                    incubator@gbu.ac.in
                  </a>
                  <br />
                  <a href="mailto:gburif@gbu.ac.in"  >
                    gburif@gbu.ac.in
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Follow us</h3>
              <div className="flex gap-4">
                <a href="#" aria-label="LinkedIn" className="text-blue-700 hover:scale-110 transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" aria-label="Twitter" className="text-sky-500 hover:scale-110 transition">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" aria-label="Facebook" className="text-blue-600 hover:scale-110 transition">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" aria-label="Instagram" className="text-pink-500 hover:scale-110 transition">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" aria-label="YouTube" className="text-red-600 hover:scale-110 transition">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Get in Touch Button */}
            <div className="mt-8">
              <a
                href="mailto:incubator@gbu.ac.in"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full md:w-1/2 h-80 md:h-auto">
            <iframe
              title="Google Map - GBU"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.450765827336!2d77.52362523413468!3d28.4210116512394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc0f9b557da4f%3A0x1fd3e901505650e!2sBodhisattva%20Dr.%20B.R.%20Ambedkar%20Central%20Library!5e0!3m2!1sen!2sin!4v1751395008080!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </section>
    </SearchableWrapper>
  );
};

export default ContactUs;
