// src/pages/Home.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import BackgroundImage from "../temp/backgroundImage.jpg";
import handle from "../temp/handle.png";
import profile from "../temp/profile.png";

const Home = () => {
  // Mock data for demonstration
  const services = [
    {
      title: "Bat Handle Replacement",
      image: `${handle}`,
      desc: "Professional replacement of worn or broken handles",
      link: "/service/bat-handle",
    },
    {
      title: "Toe Guard Installation",
      image: `${handle}`,
      desc: "Protect your bat from moisture and damage",
      link: "/service/toe-guard",
    },
    {
      title: "Face Restoration",
      image: `${handle}`,
      desc: "Remove scratches and restore the playing surface",
      link: "/service/face-restoration",
    },
    {
      title: "Glove Re-palming",
      image: `${handle}`,
      desc: "Replace worn palm padding for better grip",
      link: "/service/glove-repalming",
    },
  ];

  const galleryImages = [`${handle}`, `${handle}`, `${handle}`, `${handle}`];

  const testimonials = [
    {
      name: "David Warner",
      image: `${profile}`,
      role: "Professional Cricketer",
      text: "My bat feels like new after the repair. Amazing craftsmanship!",
      rating: 5,
    },
    {
      name: "Virat Kohli",
      image: `${profile}`,
      role: "Indian Player",
      text: "Fast turnaround and excellent quality. Highly recommended!",
      rating: 5,
    },
    {
      name: "Kane Williamson",
      image: `${profile}`,
      role: "New Zealand Player",
      text: "Saved my favorite bat that I thought was beyond repair.",
      rating: 5,
    },
    {
      name: "Steve Smith",
      image: `${profile}`,
      role: "Australian Player",
      text: "The glove repair service extended the life of my favorite gloves by years.",
      rating: 5,
    },
    {
      name: "Joe Root",
      image: `${profile}`,
      role: "England Player",
      text: "Professional service with attention to detail. Will use again!",
      rating: 5,
    },
  ];

  // Testimonial carousel state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialInterval = useRef(null);

  // Start auto rotation of testimonials
  useEffect(() => {
    testimonialInterval.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (testimonialInterval.current) {
        clearInterval(testimonialInterval.current);
      }
    };
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    resetInterval();
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    resetInterval();
  };

  const resetInterval = () => {
    if (testimonialInterval.current) {
      clearInterval(testimonialInterval.current);
    }
    testimonialInterval.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  return (
    <div className="font-sans">
      {/* Hero Section with Background Image */}
      <section
        className="relative py-32 px-4 text-white "
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Stronger Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-80"></div> */}

        <div className="relative max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
            Professional Cricket Equipment Repair
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-lg opacity-90">
            Restore your bats and gloves to peak performance with our expert
            repair services. Trusted by professionals worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/repair"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Your Bat Repaired
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-cyan-800">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We specialize in all types of cricket equipment repairs to extend
            the life of your gear and improve performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-cyan-600 flex flex-col h-full"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.desc}</p>
                <Link
                  to={service.link}
                  className="text-cyan-700 font-medium flex items-center justify-end hover:text-cyan-900"
                >
                  More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-cyan-800">
            Our Repair Gallery
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            See our craftsmanship in action through our repair gallery
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {galleryImages.slice(0, 6).map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Repair example ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-block bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 px-4 bg-cyan-800 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            What Players Say
          </h2>
          <p className="text-center text-cyan-200 mb-12 max-w-2xl mx-auto">
            Trusted by cricketers at all levels of the game
          </p>

          <div className="relative bg-white text-gray-800 rounded-xl shadow-xl p-8 min-h-[300px]">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-cyan-700 text-white p-3 rounded-full hover:bg-cyan-600 transition duration-300 z-10"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-cyan-700 text-white p-3 rounded-full hover:bg-cyan-600 transition duration-300 z-10"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>

            {/* Testimonial Content */}
            <div className="text-center px-8">
              <div className="flex justify-center mb-6">
                <div className="border-2 border-dashed rounded w-20 h-20 overflow-hidden p-0.5">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt="profile"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>

              <p className="text-xl italic mb-6">
                "{testimonials[currentTestimonial].text}"
              </p>

              <h4 className="font-bold text-xl mb-1">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-cyan-600 mb-4">
                {testimonials[currentTestimonial].role}
              </p>

              <div className="flex justify-center text-amber-400">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <FaStar key={i} className="w-6 h-6 fill-current mx-1" />
                  )
                )}
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTestimonial(index);
                    resetInterval();
                  }}
                  className={`w-3 h-3 mx-1 rounded-full ${
                    index === currentTestimonial ? "bg-cyan-700" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-amber-500 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-amber-100">Items Repaired</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-amber-100">Satisfaction Rate</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">5</div>
              <div className="text-amber-100">Years Experience</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-amber-100">Professional Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-cyan-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Restore Your Cricket Gear?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get professional repair services with fast turnaround and guaranteed
            satisfaction.
          </p>
          <Link
            to="/repair"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Your Repair Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-500">
                BatCraft Repairs
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
                    to="/services"
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
                  <span>info@batcraftrepairs.com</span>
                </li>
              </ul>

              {/* Google Maps Embed */}
              <div className="mt-4 rounded-lg overflow-hidden">
                <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7122.23481290129!2d81.0018584763765!3d26.853005965153316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2b6b6f1b2c1%3A0x4f7f3b1f7e1c1f1e!2sJarahra%20Road%2C%20Indira%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226016!5e0!3m2!1sen!2sin!4v1716987654323!5m2!1sen!2sin"
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
              © {new Date().getFullYear()} BatCraft Repairs. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
