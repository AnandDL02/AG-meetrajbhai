import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Building2 } from "lucide-react";
import { toast } from "sonner";
import bg1 from "../image/chat1.png"
import bg2 from "../image/chat2.png"
import l1 from "../image/l1.jpg"
import l2 from "../image/l2.jpg"
import { Globe, Factory } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Hello! I'm interested in your products.
    
Name: ${formData.name}
Email: ${formData.email}
Country: ${formData.country}
Product: ${formData.product}
Quantity: ${formData.quantity}
Message: ${formData.message}`;

    const phoneNumber = "917777974441";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
    toast.success("Redirecting to WhatsApp...");

    setFormData({
      name: "",
      email: "",
      country: "",
      product: "",
      quantity: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const products = [
    "Coriander Seeds",
    "Cumin Seeds",
    "Groundnut Kernels",
    "Turmeric",
    "Red Chilli",
    "Cold Pressed Oils",
    "Fenugreek Seeds",
    "Fennel Seeds",
    "Other Spices",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Ready to start your import journey? Get in touch with our team today
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Send us an Inquiry
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your country"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="product"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Product Interest *
                    </label>
                    <select
                      id="product"
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select a product</option>
                      {products.map((product, index) => (
                        <option key={index} value={product}>
                          {product}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Required Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., 1 MT, 500 KG, 1 Container"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us more about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                {/* Office 1 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Our Head Office
                    </h3>
                    <p className="text-gray-600">
                      (1) A-40, 3rd floor, Sumel business park 2, <br />{" "}
                      Opp.vanijya bhavan, Kankariya, <br /> Ahmedabad, Gujarat,
                      India
                    </p>

                    <p className="text-gray-600">
                      (2) NEAR TELEPHONE OFFICE, TA BHANVAD, Morjhar, Devbhumi
                      Dwarka, Gujarat, 360510 (24BHEPP2179K1Z2) shree Hari
                      International GST Add please
                    </p>
                  </div>
                </div>

                {/* Office 2 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Manufacturing Unit
                    </h3>
                    <p className="text-gray-600">
                      (1) - Kokli Rd,Upleta 360490 , Gujarat
                    </p>

                    <p className="text-gray-600">
                      (2) - Station Road,Bhanvad 360510,Gujarat, India
                    </p>
                    <p className="text-gray-600 capitalize ">
                      (3) - Kotecha Agro Industries 100/1, Paiki 1, <br /> Plot
                      No 7, H K Industrial Area,
                      <br /> Village Kuchiyadad, Rajkot, Gujarat, 360023
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-600">
                      <a
                        href="tel:+917777974441"
                        className="hover:text-green-600 transition-colors"
                      >
                        +91 7777974441
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600">
                      <a
                        href="mailto:shreehariexpoter11@gmail.com"
                        className="hover:text-green-600 transition-colors"
                      >
                        info@shreehariinternational.in
                      </a>
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM IST
                      <br />
                      Sunday: Available for urgent inquiries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Companies */}
      <section className="w-full py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Our Affiliate Companies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Status International */}
            <div
              className="relative rounded-xl overflow-hidden shadow-lg group h-64 flex flex-col justify-start"
              style={{
                backgroundImage: `url(${bg1})`, // 🔹 Add your bg here
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark transparent overlay */}
              <div className="absolute inset-0 bg-black/70"></div>

              <div className="relative z-10 p-6 text-white">
                {/* Logo */}
                <img
                  src= {l1}
                  alt="Status International"
                  className="h-12 mb-3"
                />
                {/* Title */}
                <h4 className="text-xl font-bold">Status International</h4>
                {/* Paragraph */}
                <p className="text-sm mt-2 opacity-90">
                  Status International is our trusted affiliate company, working
                  closely with us to provide top-quality agro products across
                  multiple global markets.
                </p>
                {/* GST */}
                <p className="text-sm mt-2 font-semibold">
                  GST: 24MFFPK0096A1ZO
                </p>
                <p className="text-sm mt-2 font-semibold">
                   IEC: MFFPK0096A 
                </p>
              </div>
            </div>
            {/* Shramdeep Enterprise */}
            <div
              className="relative rounded-xl overflow-hidden shadow-lg group h-64 flex flex-col justify-start"
              style={{
                 backgroundImage: `url(${bg2})`, // 🔹 Add your bg here
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark transparent overlay */}
              <div className="absolute inset-0 bg-black/70"></div>

              <div className="relative z-10 p-6 text-white">
                {/* Logo */}
                <img
                  src= {l2}
                  alt="Shramdeep Enterprise"
                  className="h-12 mb-3"
                />
                {/* Title */}
                <h4 className="text-xl font-bold">Shramdeep Enterprise</h4>
                {/* Paragraph */}
                <p className="text-sm mt-2 opacity-90">
                  Shramdeep Enterprise is one of our affiliate partners,
                  supporting our mission to deliver reliable agricultural
                  products and services globally.
                </p>
                {/* GST */}
                <p className="text-sm mt-2 font-semibold">
                  GST:  24AKWPK5364R1Z4
                </p>
                <p className="text-sm mt-2 font-semibold">
                  IEC:  AKWPK5364R
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Location
            </h2>
            <p className="text-lg text-gray-600">
              Visit us at our manufacturing facility in Gujarat
            </p>
          </div>

          <div className="bg-white h-[70vh] p-8 rounded-xl shadow-lg">
            {/* <a
              href="https://maps.app.goo.gl/kYLg3ndG3gdBSfEZ8?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-200 h-96 rounded-lg flex items-center justify-center hover:bg-gray-300 transition"
            >
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-700 font-medium">View on Google Maps</p>
                <p className="text-gray-500 text-sm">
                  Sumel Business Park-2, Kankaria, Ahmedabad, Gujarat 380022
                </p>
              </div>
            </a> */}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3145517301477!2d72.60008657531344!3d23.012220079181102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85ce2f50ee17%3A0xe840717a1b442845!2sSumel%20Business%20Park%202!5e0!3m2!1sen!2sin!4v1757656519842!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
