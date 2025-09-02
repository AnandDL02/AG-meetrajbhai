import { Users, Target, Heart, Award, CheckCircle } from 'lucide-react';
import img1 from "../image/meetrajbhai.jpg.jpg"
import img2 from "../image/export-manejar.jpg"
import img3 from "../image/s1.jpg"

const About = () => {
  const team = [
    {
      name: "Meet Nileshbhai Piprotar",
      role: "Founder & CEO",
      description: "Visionary leader with extensive experience in agro exports and business development.",
      image: img1
    },
    {
      name: "Mr. Janak Kalotra",
      role: "International Trade Manager",
      description: "Manages global client relationships and export documentation processes.",
      image: img2
    },
    {
      name: "Nilesh Bhai Piprotar",
      role: "Procurement & Quality Head",
      description: "Ensures premium quality sourcing directly from farms and suppliers.",
      image: img3
    },
    {
      name: "Ms. Priya Shah",
      role: "Finance & Compliance Head",
      description: "Oversees financial planning, compliance, and ensures smooth export operations.",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "Mr. Rahul Desai",
      role: "Logistics & Operations Manager",
      description: "Responsible for supply chain management and timely global delivery.",
      image: "https://randomuser.me/api/portraits/men/85.jpg"
    }
  ];

  const values = [
    {
      icon: <CheckCircle className="h-10 w-10 text-green-600" />,
      title: "Quality First",
      description: "We never compromise on quality. Every product undergoes rigorous testing and quality checks."
    },
    {
      icon: <Heart className="h-10 w-10 text-green-600" />,
      title: "Trust & Transparency",
      description: "Building long-term relationships through honest communication and transparent dealing."
    },
    {
      icon: <Target className="h-10 w-10 text-green-600" />,
      title: "On-Time Delivery",
      description: "Committed to meeting deadlines and ensuring timely shipment to all our global clients."
    },
    {
      icon: <Users className="h-10 w-10 text-green-600" />,
      title: "Customer First",
      description: "Our customers' success is our success. We go above and beyond to meet their needs."
    }
  ];

  const certifications = [
    { name: "IEC", description: "Import Export Code Certificate" },
    { name: "APEDA", description: "Agricultural & Processed Food Products Export Development Authority" },
    { name: "FSSAI", description: "Food Safety and Standards Authority of India" },
    { name: "MSME", description: "Micro, Small & Medium Enterprises Registration" }
  ];

  const foodCertifications = [
    { name: "FDA", image: "/certificates/fda.png" },
    { name: "Halal", image: "/certificates/halal.png" },
    { name: "Kosher", image: "/certificates/kosher.png" },
    { name: "IFS", image: "/certificates/ifs.png" },
    { name: "India Organic", image: "/certificates/india-organic.png" },
    { name: "USDA Organic", image: "/certificates/usda.png" },
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            About Shree Hari International
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Your trusted partner for premium quality agro exports from the heart of Gujarat, India
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded with a vision to bridge the gap between Gujarat's agricultural excellence and global markets, 
                Shree Hari International has emerged as a trusted name in agro exports.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Based in Morzar, Bhanvad, Devbhoomi Dwarka, Gujarat, we leverage our strategic location and 
                deep-rooted connections with local farmers to source the finest quality products.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to quality, transparency, and customer satisfaction has enabled us to build 
                lasting partnerships with importers across Middle East, Africa, Europe, and Vietnam.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To deliver premium quality agro products while building sustainable partnerships 
                that benefit farmers, traders, and consumers worldwide.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the most trusted and preferred partner for agro exports from India, 
                recognized globally for quality, reliability, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-3xl mx-auto">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-600">
              <img src={img1} alt="Founder" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Meet Nileshbhai Piprotar</h2>
            <p className="text-green-600 font-semibold text-lg mb-6">Founder & CEO</p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">
              "With years of experience in agriculture and international trade, I founded Shree Hari International 
              with a simple yet powerful vision - to showcase the excellence of Gujarat's agricultural products to the world."
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              "Our success lies in our commitment to quality, our relationships with farmers, and our dedication 
              to serving our international clients with integrity and excellence."
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 mb-12">Dedicated professionals committed to excellence</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-green-500">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 mb-12">The principles that guide everything we do</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="flex justify-center mb-4">{v.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Certifications</h2>
          <p className="text-lg text-gray-600 mb-12">Certified for quality and compliance</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((c, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-md p-8 rounded-xl border border-green-200 shadow hover:shadow-xl transition">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{c.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Safety Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Food Safety Certifications</h2>
          <p className="text-lg text-gray-600 mb-12">Certified & Trusted Globally</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {foodCertifications.map((cert, i) => (
              <div key={i} className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2">
                <img src={cert.image} alt={cert.name} className="h-20 object-contain mb-4" />
                <p className="text-gray-700 font-medium">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
