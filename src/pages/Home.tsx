import { ArrowRight, CheckCircle, Globe, Shield, Truck, Users, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import img from "../image/meetrajbhai.jpg.jpg"
import bgImage from "../image/hero image .jpg"
import CorianderSeeds from "../image/flat-lay-rice-composition.jpg"
import CuminSeeds from "../image/top-view-variety-spices.jpg"
import ColdPressedOils from "../image/healthy-product-olive-oil (1).jpg"
import PremiumSpices from "../image/assortment-organic-spices-around-wooden-board.jpg"

const Home = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Own Manufacturing Unit",
      description: "State-of-the-art processing facility with quality control"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Premium Quality Products",
      description: "Certified and tested for international standards"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Fast & Reliable Shipping",
      description: "Timely delivery with shipment tracking"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Export Experience",
      description: "Serving Middle East, Africa, Europe & Vietnam"
    }
  ];

  const products = [
    {
      title: "Coriander Seeds",
      description: "Premium Eagle & Scooter grades",
      image:CorianderSeeds,
      link: "/products"
    },
    {
      title: "Cumin Seeds",
      description: "Europe quality specifications",
      image: CuminSeeds ,
      link: "/products"
    },
    {
      title: "Cold Pressed Oils",
      description: "Wood-pressed groundnut & coconut oils",
      image:ColdPressedOils,
      link: "/products"
    },
    {
      title: "Premium Spices",
      description: "Turmeric, red chilli, and authentic spices",
      image: PremiumSpices,
      link: "/products"
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      country: "UAE",
      rating: 5,
      text: "Excellent quality coriander seeds. Very professional service and timely delivery."
    },
    {
      name: "Nguyen Tran",
      country: "Vietnam", 
      rating: 5,
      text: "Great experience working with Shree Hari International. Quality products and fair pricing."
    },
    {
      name: "John Okafor",
      country: "Nigeria",
      rating: 5,
      text: "Reliable supplier for our spice requirements. Highly recommended for African importers."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="background relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
       style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
      >
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Premium <span className="text-primary">Agro Exports</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            From Gujarat's Fields to Global Markets - Your Trusted Partner for Quality Spices, Seeds & Oils
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link
              to="/products"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg flex items-center justify-center space-x-2"
            >
              <span>View Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Leading Agro Exports from Gujarat</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Shree Hari International is a trusted manufacturer and exporter of premium quality spices, 
            seeds, and cold-pressed oils. With our own processing unit and direct farm sourcing, 
            we deliver authentic Indian products to global markets.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose Shree Hari International</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 border border-border rounded-lg hover:shadow-lg transition-all duration-300 hover:border-primary/50 bg-card">
                <div className="text-4xl mb-4 text-primary flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Premium Products</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{product.title}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Link 
                    to={product.link} 
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center group"
                  >
                    Learn More 
                    <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        className="py-16 bg-cover bg-center relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1517022812141-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Meet Our Leadership</h2>
          <div className="max-w-2xl mx-auto text-center">
            <img 
              src={img}
              alt="Meet Nileshbhai Piprotar"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover  border-4 border-primary"
            />
            <h3 className="text-2xl font-semibold mb-2 text-white">Meet Nileshbhai Piprotar</h3>
            <p className="text-primary mb-4 font-medium">Founder & CEO</p>
            <blockquote className="text-lg italic text-gray-200">
              "Our commitment to quality and customer satisfaction has made us a trusted partner 
              for agro exports globally. We believe in building long-term relationships through 
              transparency and excellence."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
     <section className="py-16 bg-muted/30">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
      What Our Clients Say
    </h2>
    <div className="max-w-4xl mx-auto">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="bg-card p-6 rounded-lg shadow-lg h-full border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-card-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.country}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  </div>
</section>

      {/* Call to Action */}
      <section 
        className="py-16 bg-primary text-primary-foreground relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.8) 100%)"
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Import Journey?</h2>
          <p className="text-xl mb-8 opacity-90">Get premium quality agro products delivered globally</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-colors shadow-lg"
            >
              Request Quote
            </Link>
            <Link 
              to="/products" 
              className="border-2 border-background text-background px-8 py-4 rounded-lg font-semibold hover:bg-background hover:text-foreground transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
      </section>
    </div>
  );
};

export default Home;