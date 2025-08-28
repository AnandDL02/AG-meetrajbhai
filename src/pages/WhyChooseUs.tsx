
import { Shield, Factory, Globe, CheckCircle, Users, Award, Truck, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Factory className="h-12 w-12 text-green-600" />,
      title: "Own Manufacturing Unit",
      description: "Complete control over quality with our state-of-the-art processing facility in Gujarat",
      benefits: ["Quality Control", "Cost Efficiency", "Customization"]
    },
    {
      icon: <Shield className="h-12 w-12 text-green-600" />,
      title: "Direct from Manufacturer",
      description: "No middlemen involved - ensuring competitive prices and consistent quality",
      benefits: ["Best Prices", "Quality Assurance", "Direct Communication"]
    },
    {
      icon: <Truck className="h-12 w-12 text-green-600" />,
      title: "Fast Export & Delivery",
      description: "Efficient logistics network ensuring timely delivery to global destinations",
      benefits: ["Quick Turnaround", "Reliable Shipping", "Track & Trace"]
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-green-600" />,
      title: "Transparent Dealing",
      description: "Complete transparency in pricing, quality, and business processes",
      benefits: ["Clear Pricing", "Quality Reports", "Regular Updates"]
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: "Experienced Team",
      description: "Skilled professionals with years of experience in agro exports",
      benefits: ["Expert Guidance", "Technical Support", "Market Knowledge"]
    },
    {
      icon: <Globe className="h-12 w-12 text-green-600" />,
      title: "Global Reach",
      description: "Successfully serving customers across Middle East, Africa, Europe, and Vietnam",
      benefits: ["Proven Track Record", "Cultural Understanding", "Local Partnerships"]
    }
  ];

  const stats = [
    {
      number: "2000+",
      label: "MT Annual Export",
      description: "Total volume exported annually"
    },
    {
      number: "15+",
      label: "Countries Served",
      description: "Global presence across continents"
    },
    {
      number: "95%",
      label: "Client Retention",
      description: "Long-term partnership success rate"
    },
    {
      number: "5+",
      label: "Years Experience",
      description: "Industry expertise and knowledge"
    }
  ];

  const certifications = [
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "IEC Certified",
      description: "Import Export Code for international trade"
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "APEDA Registered",
      description: "Agricultural & Processed Food Products Export"
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "FSSAI Certified",
      description: "Food Safety and Standards Authority"
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "MSME Registered",
      description: "Micro, Small & Medium Enterprise"
    }
  ];

  const workingProcess = [
    {
      step: 1,
      title: "Inquiry & Discussion",
      description: "Share your requirements and get detailed quotation"
    },
    {
      step: 2,
      title: "Sample & Approval",
      description: "Receive samples for quality verification and approval"
    },
    {
      step: 3,
      title: "Order Confirmation",
      description: "Confirm order details and advance payment"
    },
    {
      step: 4,
      title: "Production & QC",
      description: "Processing with quality checks at every stage"
    },
    {
      step: 5,
      title: "Shipment & Documentation",
      description: "Secure packaging and complete export documentation"
    },
    {
      step: 6,
      title: "Delivery & Support",
      description: "Timely delivery with ongoing customer support"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Why Choose Shree Hari International</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Your trusted partner for premium quality agro exports with unmatched reliability and service
          </p>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of partnering with a reliable manufacturer and exporter
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-center mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{reason.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{reason.description}</p>
                <div className="space-y-2">
                  {reason.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-600">Numbers that speak for our reliability and growth</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-gray-600">Certified for quality, safety, and international standards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
                <div className="flex justify-center mb-4">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600">Simple and transparent process from inquiry to delivery</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workingProcess.map((process, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-white font-bold text-lg">{process.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">{process.title}</h3>
                    <p className="text-gray-600 text-center">{process.description}</p>
                  </div>
                  {index < workingProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-green-300"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Built on Trust & Reliability</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Timely Delivery</h3>
                <p className="text-gray-600">
                  Consistent track record of on-time deliveries with proper documentation and quality assurance.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Customer Support</h3>
                <p className="text-gray-600">
                  Dedicated customer support team available to assist with inquiries, orders, and after-sales service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our growing family of satisfied customers and experience premium quality with unmatched service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Start Your Order
            </a>
            <a
              href="mailto:shreehariexpoter11@gmail.com"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Request Samples
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
