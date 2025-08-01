import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import handle from "../temp/handle.png";
import Footer from "../components/Footer";
const Service = () => {

    
  const batServices = [
    {
      service: "Handle Replacement",
      description:
        "Professional replacement of worn or broken handles using premium English willow. Our specialized process ensures perfect grip alignment and maintains bat balance.",
      price: "800",
      image: `${handle}`,
      link: "/service/bat-handle",
    },
    {
      service: "Bat Binding",
      description:
        "Expert binding repair to reinforce your bat's handle and prevent splitting. We use high-quality twine for durability and enhanced shock absorption.",
      price: "50",
      image: `${handle}`,
      link: "/service/bat-binding",
    },
    {
      service: "Toe Guard Installation",
      description:
        "Protect your bat from moisture and damage with our premium toe guards. Custom fitting ensures complete protection without affecting bat performance.",
      price: "50",
      image: `${handle}`,
      link: "/service/toe-guard",
    },
    {
      service: "Professional Bat Cleaning",
      description:
        "Deep cleaning and restoration of your bat's surface. Removes built-up dirt, grease, and marks while preserving the wood's natural qualities.",
      price: "300",
      image: `${handle}`,
      link: "/service/bat-cleaning",
    },
    {
      service: "Weight Reduction",
      description:
        "Precision weight adjustment to improve bat balance and swing speed. We carefully remove material from specific areas to maintain performance characteristics.",
      price: "600",
      image: `${handle}`,
      link: "/service/weight-reduction",
    },
    {
      service: "Professional Bat Oiling",
      description:
        "Specialized oil treatment to maintain moisture content and prevent cracking. Our process protects your bat while enhancing its natural grain appearance.",
      price: "100",
      image: `${handle}`,
      link: "/service/bat-oiling",
    },
  ];

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-800 to-cyan-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Cricket Equipment Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Expert repair and restoration services for bats and gloves. Trusted
            by professional cricketers nationwide.
          </p>
        </div>
      </section>

      {/* Bat Repairing Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-cyan-800">
              Cricket Bat Repair Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We specialize in restoring cricket bats to their optimal condition
              using premium materials and professional techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {batServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-cyan-600 flex flex-col h-full"
              >
                <div className="flex justify-center mb-4">
                  <img src={service.image} alt="services" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-gray-800">
                  {service.service}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="flex flex-row-reverse mt-4">
                  <Link
                    to={service.link}
                    className="text-cyan-700 font-medium flex items-center hover:text-cyan-900"
                  >
                    Details <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bat Repair Process */}
          <div className="mt-16 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4 text-cyan-800 text-center">
              Our Bat Repair Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">
                  Inspection & Assessment
                </h4>
                <p className="text-gray-600">
                  We thoroughly examine your bat to identify all areas needing
                  attention.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">
                  Professional Restoration
                </h4>
                <p className="text-gray-600">
                  Our skilled technicians perform the necessary repairs using
                  specialized tools.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Quality Testing</h4>
                <p className="text-gray-600">
                  Every repaired bat undergoes rigorous testing before being
                  returned.
                </p>
              </div>
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
            Contact us today for a free assessment of your equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
            <Link
              to="/price"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 hover:bg-white hover:text-cyan-800"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Service;
