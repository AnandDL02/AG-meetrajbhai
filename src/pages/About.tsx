
import { Users, Target, Heart, Award, CheckCircle } from 'lucide-react';
import img1 from "../image/meetrajbhai.jpg.jpg"
import img2 from "../image/meetrajbhai.jpg.jpg"
import img3 from "../image/meetrajbhai.jpg.jpg"

const About = () => {
  const team = [
   {
  name: "Meet Nileshbhai Piprotar",
  role: "Founder & CEO",
  description: "Visionary leader with extensive experience in agro exports and business development.",
  image: img1
},
    {
      name: "Export Executive",
      role: "International Trade Manager",
      description: "Manages global client relationships and export documentation processes.",
      image: img2
    },
    {
      name: "Purchase Manager",
      role: "Procurement & Quality Head",
      description: "Ensures premium quality sourcing directly from farms and suppliers.",
      image: img3
    }
  ];

  const values = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: "Quality First",
      description: "We never compromise on quality. Every product undergoes rigorous testing and quality checks."
    },
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: "Trust & Transparency",
      description: "Building long-term relationships through honest communication and transparent dealing."
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "On-Time Delivery",
      description: "Committed to meeting deadlines and ensuring timely shipment to all our global clients."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Shree Hari International</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Your trusted partner for premium quality agro exports from the heart of Gujarat, India
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-6">
                    Founded with a vision to bridge the gap between Gujarat's agricultural excellence and global markets, 
                    Shree Hari International has emerged as a trusted name in agro exports.
                  </p>
                  <p className="mb-6">
                    Based in Morzar, Bhanvad, Devbhoomi Dwarka, Gujarat, we leverage our strategic location and 
                    deep-rooted connections with local farmers to source the finest quality products.
                  </p>
                  <p>
                    Our commitment to quality, transparency, and customer satisfaction has enabled us to build 
                    lasting partnerships with importers across Middle East, Africa, Europe, and Vietnam.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 text-center">
                <div className="bg-white rounded-xl p-8 shadow-lg">
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
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
              <div className="w-40 h-40 bg-cover mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundImage: `url(${img1})` }}>
                {/* <img src={img1} alt="" className=' rounded-[50%] w-[100%] h-[100%]' /> */}
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Meet Nileshbhai Piprotar</h2>
              <p className="text-green-600 font-semibold text-xl mb-6">Founder & CEO</p>
              <div className="max-w-2xl mx-auto">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  "With years of experience in agriculture and international trade, I founded Shree Hari International 
                  with a simple yet powerful vision - to showcase the excellence of Gujarat's agricultural products to the world."
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  "Our success lies in our commitment to quality, our relationships with farmers, and our dedication 
                  to serving our international clients with integrity and excellence."
                </p>
              </div>
              <div className="flex justify-center space-x-4 mt-8">
                <a href="https://instagram.com/themeetsagar" className="text-green-600 hover:text-green-700 font-semibold">
                  @themeetsagar
                </a>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">LinkedIn: Meetraj Sagar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">Dedicated professionals committed to excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-200">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center bg-cover" style={{ backgroundImage: `url(${img1})` }}>
                  {/* <img src={img1} alt="" className='rounded-[50%] w-[100%] h-[100%] object-center' /> */}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Certifications</h2>
            <p className="text-xl text-gray-600">Certified for quality and compliance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
