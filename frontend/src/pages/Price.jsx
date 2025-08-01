import { Link } from "react-router-dom";
import { FaTools } from "react-icons/fa";
import Footer from "../components/Footer";
import batRepairImage from "../temp/handle.png"; // Make sure to have this image

const Price = () => {
  const batServices = [
    {
      name: "Handle Replacement With Warranty",
      price: "₹800",
    },
    {
      name: "Handle Replacement Without Warranty",
      price: "₹600",
    },
    {
      name: "Weight Reduction",
      price: "₹600",
    },
    {
      name: "Professional Bat Cleaning",
      price: "₹300",
    },
    {
      name: "Professional Bat Oiling",
      price: "₹100",
    },
    {
      name: "Bat Binding",
      price: "₹50",
    },
    {
      name: "Toe Guard Installation",
      price: "₹50",
    },
  ];

  const repairRules = [
    "All repairs will take minimum of 3 business days",
    <>
      Pickup and delivery available in Lucknow within 5KM of{" "}
      <a
        href="https://maps.app.goo.gl/GyavGhrTuPYokHAp6"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500  hover:text-blue-800"
      >
        this location
      </a>
      .
    </>,
    "Shipping costs additional for outstation customers",
    "Payment due upon service completion",
  ];

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-800 to-cyan-600 text-white py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Cricket Bat Repair Pricing
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Professional bat repair services at competitive rates
          </p>
        </div>
      </section>

      {/* Bat Repair Image */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={batRepairImage}
              alt="Professional bat repair in progress"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Bat Repair Pricing */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-800 mb-4">
              Bat Repair Services Pricing
            </h2>
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full">
              Bat Repairing will take minimum of 3 days.
            </div>
          </div>

          {/* Pricing Table */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden max-w-4xl mx-auto my-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm md:text-base table-auto">
                <thead className="bg-gray-100 text-gray-700 uppercase text-xs md:text-sm">
                  <tr>
                    <th className="px-6 py-4 text-left">Services</th>
                    <th className="px-6 py-4 text-left">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {batServices.map((service, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 border-t border-gray-200 transition duration-200"
                    >
                      <td className="px-6 py-4 text-gray-800">
                        {service.name}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {service.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Repair Guidelines */}
          <div className="mt-10 max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-5 text-cyan-800 flex items-center">
              <FaTools className="mr-3 text-amber-500" /> Repair Guidelines
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {repairRules.map((rule, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-white rounded-lg shadow-sm border-l-4 border-amber-500"
                >
                  {/* <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" /> */}
                  <span className="text-gray-700">{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-cyan-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Repair Your Cricket Bat?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book your repair service today and get your bat back in top
            condition.
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

export default Price;
