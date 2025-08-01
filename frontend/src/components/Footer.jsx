import { Link } from "react-router";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="font-sans">
      <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-500">
                Apex Bat Restoration 
              </h3>
              <p className="text-gray-400 mb-4">
                Professional cricket equipment restoration since 2023.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaTwitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-500">
                Services
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/service/bat-repair"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Bat Repair
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service/glove-repair"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Glove Repair
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service/restringing"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Restringing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service/customization"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Customization
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-500">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-500">
                Contact Us
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-2 text-amber-500 flex-shrink-0" />
                  <span>
                    Jarahra Road, Indira Nagar, Lucknow, Uttar Pradesh 226016
                  </span>
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-2 text-amber-500 flex-shrink-0" />
                  <span>+91 7565958575</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-2 text-amber-500 flex-shrink-0" />
                  <span>info@gmail.com</span>
                </li>
              </ul>

              {/* Google Maps Embed */}
              <div className="mt-4 rounded-lg overflow-hidden">
                <iframe
                  title="Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.172127681084!2d81.01255377529492!3d26.915802476645368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3daef8631fd%3A0x12fd5e6c3982b763!2sAPEX%20Cricket%20Academy!5e1!3m2!1sen!2sin!4v1754072822487!5m2!1sen!2sin"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>
              © {new Date().getFullYear()} ApexRestoration Repairs. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
