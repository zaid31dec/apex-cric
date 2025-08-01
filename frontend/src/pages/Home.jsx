// src/pages/Home.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from "../components/Footer";
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
      title: "Weight Reduction",
      desc: "Precision weight adjustment to improve bat balance and swing speed.",
      image: `${handle}`,
      link: "/service/weight-reduction",
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
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
              <div className="text-4xl md:text-5xl font-bold mb-2">3</div>
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
      <Footer />
    </div>
  );
};

export default Home;
