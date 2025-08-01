import React from "react";
import {
  FaTools,
  FaSmile,
  FaTrophy,
  FaShippingFast,
  FaHandshake,
  FaStar,
} from "react-icons/fa";
import image from '../temp/handle.png'
import { Link } from "react-router";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-800 to-cyan-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Our Cricket Bat Repair Service
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Restoring cricket equipment to peak performance since 2023
          </p>
        </div>
      </section>
      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-cyan-800">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              At Apex Bat Restoration, our mission is to extend the life of
              cricket equipment through expert craftsmanship, preserving the
              performance and feel that players love while reducing waste in the
              sporting community.
            </p>
          </div>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 p-0.5 " >
             <img
                    src={image}
                    alt="profile"
                    className="w-full h-full object-cover rounded-xl"
                  />
          </div>
        </div>
      </section>

      {/* Stats Section */}{" "}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
              {/* Stat 1 */}
              <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-cyan-600 transform hover:-translate-y-1 ">
                <div className="flex justify-center text-cyan-600 mb-4">
                  <FaTools className="text-5xl" />
                </div>
                <div className="text-5xl font-bold mb-2 text-cyan-800">
                  1000+
                </div>
                <div className="text-xl text-gray-600">Bats Restored</div>
              </div>

              {/* Stat 2 */}
              <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-amber-500 transform hover:-translate-y-1 ">
                <div className="flex justify-center text-amber-500 mb-4">
                  <FaSmile className="text-5xl" />
                </div>
                <div className="text-5xl font-bold mb-2 text-amber-600">
                  98%
                </div>
                <div className="text-xl text-gray-600">
                  Customer Satisfaction
                </div>
              </div>

              {/* Stat 3 */}
              <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500 transform hover:-translate-y-1">
                <div className="flex justify-center text-green-500 mb-4">
                  <FaTrophy className="text-5xl" />
                </div>
                <div className="text-5xl font-bold mb-2 text-green-600">
                  50+
                </div>
                <div className="text-xl text-gray-600">
                  Professional Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-cyan-800">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-cyan-600 text-3xl mb-4">
                <FaTools />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Expert Craftsmanship
              </h3>
              <p className="text-gray-600">
                We combine traditional techniques with modern innovations for
                the best possible results.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-amber-500 text-3xl mb-4">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Integrity
              </h3>
              <p className="text-gray-600">
                Honest assessments and transparent pricing - no hidden fees or
                unnecessary repairs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-green-500 text-3xl mb-4">
                <FaStar />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Quality</h3>
              <p className="text-gray-600">
                Using only premium materials that meet professional standards
                for durability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-red-500 text-3xl mb-4">
                <FaShippingFast />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Reliability
              </h3>
              <p className="text-gray-600">
                Consistent results with quick turnaround times you can depend
                on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-cyan-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Restore Your Cricket Gear?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the BatCraft difference with our professional repair
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/repair"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl"
            >
              Book Bat Repair
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
