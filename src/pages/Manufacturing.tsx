
import { Factory, Shield, Users, Truck, CheckCircle, Award } from 'lucide-react';

const Manufacturing = () => {
  const processes = [
    {
      title: "Raw Material Sourcing",
      description: "Direct procurement from verified farmers and suppliers",
      image: "Sourcing"
    },
    {
      title: "Quality Inspection",
      description: "Rigorous testing and quality checks at every stage",
      image: "Quality"
    },
    {
      title: "Cleaning & Sorting",
      description: "Modern sortex machines for premium quality output",
      image: "Sorting"
    },
    {
      title: "Processing & Extraction",
      description: "Traditional wood-pressing for oils and modern processing",
      image: "Processing"
    },
    {
      title: "Packaging",
      description: "Customized packaging as per international standards",
      image: "Packing"
    },
    {
      title: "Loading & Export",
      description: "Careful loading and documentation for global shipment",
      image: "Loading"
    }
  ];

  const facilities = [
    {
      icon: <Factory className="h-8 w-8 text-green-600" />,
      title: "In-house Processing Unit",
      description: "Modern facility with advanced cleaning, sorting, and processing equipment"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Quality Control Lab",
      description: "On-site testing laboratory ensuring product quality and safety standards"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Skilled Workforce",
      description: "Experienced team of quality inspectors and processing specialists"
    },
    {
      icon: <Truck className="h-8 w-8 text-green-600" />,
      title: "Export Infrastructure",
      description: "Complete export setup with documentation and logistics support"
    }
  ];

  const certifications = [
    "Food Safety Management System",
    "HACCP Compliance",
    "ISO Quality Standards",
    "Organic Processing Certification",
    "Export House Certification",
    "Phytosanitary Compliance"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Manufacturing Excellence</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            State-of-the-art facilities ensuring premium quality from farm to export
          </p>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern infrastructure combined with traditional processing methods to deliver exceptional quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-center mb-4">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">From raw materials to export-ready products</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    <span className="text-green-800 font-semibold">{process.image}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Quality Assurance</h2>
              <p className="text-xl text-gray-600">
                Comprehensive quality control measures at every step of production
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Quality Promise</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Raw Material Selection</h4>
                      <p className="text-gray-600">Careful selection and testing of raw materials from trusted sources</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Processing Controls</h4>
                      <p className="text-gray-600">Strict adherence to processing parameters and hygiene standards</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Final Inspection</h4>
                      <p className="text-gray-600">Comprehensive testing before packaging and export approval</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Documentation</h4>
                      <p className="text-gray-600">Complete quality certificates and traceability records</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Certifications & Standards</h3>
                <div className="grid grid-cols-1 gap-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-lg">
                      <Award className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Manufacturing Gallery</h2>
            <p className="text-xl text-gray-600">A glimpse into our world-class facilities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <Factory className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <span className="text-gray-600 font-medium">{process.image} Process</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-center">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Capabilities</h2>
            <p className="text-xl opacity-90">Numbers that reflect our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">MT Monthly Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-lg opacity-90">Quality Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Quality Monitoring</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;
