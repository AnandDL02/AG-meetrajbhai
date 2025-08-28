
import { Star, Quote, Globe } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      company: "Al-Rashid Trading LLC",
      country: "UAE",
      countryFlag: "🇦🇪",
      rating: 5,
      text: "Shree Hari International has been our trusted supplier for coriander seeds for over 2 years. Their quality is consistently excellent, and their pricing is very competitive. The team is professional and always delivers on time. Highly recommended for Middle East importers.",
      product: "Coriander Seeds"
    },
    {
      name: "Nguyen Tran Minh",
      company: "Saigon Spice Import Co.",
      country: "Vietnam",
      countryFlag: "🇻🇳",
      rating: 5,
      text: "We have been importing cumin seeds and groundnut kernels from Shree Hari International for our retail chain. The quality has always been top-notch, and their packaging meets our exact requirements. Great experience working with Meet and his team.",
      product: "Cumin Seeds & Groundnut Kernels"
    },
    {
      name: "John Okafor",
      company: "West Africa Commodities",
      country: "Nigeria",
      countryFlag: "🇳🇬",
      rating: 5,
      text: "Finding a reliable supplier in India was challenging until we found Shree Hari International. Their turmeric powder quality is exceptional, and they provide all necessary certifications. The communication is excellent, and they understand our African market needs.",
      product: "Turmeric Powder"
    },
    {
      name: "Maria Rodriguez",
      company: "European Spice Solutions",
      country: "Spain",
      countryFlag: "🇪🇸",
      rating: 5,
      text: "We source various spices from Shree Hari International for our European distribution network. Their quality control is impressive, and they maintain consistent standards across all orders. The documentation for EU imports is always perfect.",
      product: "Mixed Spices"
    },
    {
      name: "Mohamed Hassan",
      company: "Cairo Import & Export",
      country: "Egypt",
      countryFlag: "🇪🇬",
      rating: 5,
      text: "The cold-pressed groundnut oil from Shree Hari International is of premium quality. Our customers love the authentic taste and aroma. The wood-pressing method they use makes all the difference. Excellent product and service.",
      product: "Cold Pressed Groundnut Oil"
    },
    {
      name: "David Thompson",
      company: "Thompson Trading Ltd",
      country: "Kenya",
      countryFlag: "🇰🇪",
      rating: 5,
      text: "Shree Hari International has been instrumental in helping us establish our spice business in East Africa. Their red chilli quality is outstanding, and they provide excellent market insights. Professional team with great customer service.",
      product: "Red Chilli"
    }
  ];

  const countries = [
    { name: "UAE", flag: "🇦🇪", orders: "500+ MT" },
    { name: "Vietnam", flag: "🇻🇳", orders: "300+ MT" },
    { name: "Nigeria", flag: "🇳🇬", orders: "400+ MT" },
    { name: "Egypt", flag: "🇪🇬", orders: "200+ MT" },
    { name: "Kenya", flag: "🇰🇪", orders: "150+ MT" },
    { name: "Spain", flag: "🇪🇸", orders: "100+ MT" },
    { name: "Saudi Arabia", flag: "🇸🇦", orders: "250+ MT" },
    { name: "Morocco", flag: "🇲🇦", orders: "180+ MT" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Hear what our global customers say about our products and services
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Trusted by Importers Worldwide</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our commitment to quality, reliability, and customer satisfaction has earned us the trust of importers 
            across multiple continents. Here's what our valued customers have to say about their experience with us.
          </p>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50 h-full">
                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-primary fill-current" />
                      ))}
                    </div>

                    {/* Quote Icon */}
                    <div className="flex justify-center mb-4">
                      <Quote className="h-8 w-8 text-primary" />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-muted-foreground mb-6 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    {/* Product */}
                    <div className="bg-primary/10 px-3 py-1 rounded-full text-primary text-sm font-medium mb-4 inline-block">
                      {testimonial.product}
                    </div>

                    {/* Customer Info */}
                    <div className="border-t border-border pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-card-foreground">{testimonial.name}</p>
                          <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl mb-1">{testimonial.countryFlag}</div>
                          <p className="text-primary font-semibold text-sm">{testimonial.country}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving customers across continents with consistent quality and reliable service
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
            {countries.map((country, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-xl text-center hover:shadow-lg transition-shadow duration-200">
                <div className="text-3xl mb-2">{country.flag}</div>
                <p className="font-semibold text-gray-800 text-sm mb-1">{country.name}</p>
                <p className="text-green-600 text-xs font-medium">{country.orders}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Customer Satisfaction Metrics</h2>
            <p className="text-xl text-gray-600">Numbers that reflect our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Client Retention</div>
              <div className="text-gray-600">Long-term partnerships</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Happy Clients</div>
              <div className="text-gray-600">Satisfied customers</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Countries</div>
              <div className="text-gray-600">Global reach</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Average Rating</div>
              <div className="text-gray-600">Customer satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Satisfied Customers</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the quality and service that has made us the preferred choice for importers worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Get Your Quote
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

export default Testimonials;
