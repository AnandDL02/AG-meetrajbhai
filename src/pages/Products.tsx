import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// ✅ Agro Commodities Images
import corianderImg from "../image/p13.jpg";
import cuminImg from "../image/p13.jpg";
import groundnutImg from "../image/p13.jpg";
import riceImg from "../image/p13.jpg";
import wheatImg from "../image/p13.jpg";
import maizeImg from "../image/p13.jpg";
import soybeanImg from "../image/p13.jpg";
import pearlMilletImg from "../image/p13.jpg";
import chickpeasImg from "../image/p13.jpg";

// ✅ Spices Images
import turmericImg from "../image/p13.jpg";
import chilliImg from "../image/p13.jpg";
import gingerImg from "../image/p13.jpg";
import fenugreekImg from "../image/p13.jpg";
import fennelImg from "../image/p13.jpg";
import mustardSeedImg from "../image/p13.jpg";

// ✅ Oils
import groundnutOilImg from "../image/p13.jpg";
import coconutOilImg from "../image/p13.jpg";
import sesameOilImg from "../image/p13.jpg";
import mustardOilImg from "../image/p13.jpg";
import castorOilImg from "../image/p13.jpg";

// ✅ Fruits
import mangoImg from "../image/p13.jpg";
import bananaImg from "../image/p13.jpg";
import pomegranateImg from "../image/p13.jpg";

// ✅ Vegetables
import onionImg from "../image/p13.jpg";
import tomatoImg from "../image/p13.jpg";

const productCategories = [
  {
    title: "Agro Commodities",
    description: "Premium quality agro commodities directly sourced from trusted farmers.",
    products: [
      {
        name: "Coriander Seeds",
        image: corianderImg,
        grades: ["Eagle Grade", "Scooter Grade"],
        moq: "5 MT",
        countries: "UAE, Saudi Arabia, Malaysia, USA",
        description: "Fresh and natural coriander seeds, widely used in culinary and medicinal applications."
      },
      {
        name: "Cumin Seeds",
        image: cuminImg,
        grades: ["Singapore Quality", "Europe Quality"],
        moq: "5 MT",
        countries: "Vietnam, Sri Lanka, UAE, Germany",
        description: "High aroma cumin seeds, ideal for global food industries."
      },
      {
        name: "Groundnut Kernels",
        image: groundnutImg,
        grades: ["Java (G/20, TJ/37)", "Bold"],
        moq: "10 MT",
        countries: "Indonesia, Philippines, UAE",
        description: "Superior quality groundnut kernels rich in protein and healthy fats."
      },
      {
        name: "Rice",
        image: riceImg,
        grades: ["Basmati", "Non-Basmati"],
        moq: "25 MT",
        countries: "Middle East, Africa, USA",
        description: "Premium long grain aromatic rice varieties."
      },
      {
        name: "Wheat",
        image: wheatImg,
        grades: ["Mill Quality"],
        moq: "50 MT",
        countries: "Bangladesh, Nepal, Africa",
        description: "High quality wheat for flour and bakery products."
      },
      {
        name: "Maize (Corn)",
        image: maizeImg,
        grades: ["Export Quality"],
        moq: "20 MT",
        countries: "Vietnam, UAE, Oman",
        description: "Non-GMO yellow maize rich in nutrients."
      },
      {
        name: "Soybean",
        image: soybeanImg,
        grades: ["Premium Quality"],
        moq: "20 MT",
        countries: "China, UAE, Europe",
        description: "Nutrient rich soybeans used in oil and protein production."
      },
      {
        name: "Pearl Millet (Bajra)",
        image: pearlMilletImg,
        grades: ["Premium Quality"],
        moq: "20 MT",
        countries: "Middle East, Africa",
        description: "High fiber millet widely consumed in Asia & Africa."
      },
      {
        name: "Chickpeas",
        image: chickpeasImg,
        grades: ["Kabuli Chickpeas", "Desi Chickpeas"],
        moq: "10 MT",
        countries: "Turkey, UAE, Bangladesh",
        description: "Protein rich chickpeas for culinary and food processing."
      },
    ],
  },
  {
    title: "Spices (Whole & Powdered)",
    description: "Aromatic spices with authentic flavors and natural goodness.",
    products: [
      { name: "Turmeric", image: turmericImg, moq: "5 MT", countries: "USA, UAE, Europe", description: "Pure turmeric with high curcumin content." },
      { name: "Red Chilli", image: chilliImg, moq: "5 MT", countries: "Vietnam, China, UAE", description: "High quality whole red chillies." },
      { name: "Dry Ginger", image: gingerImg, moq: "5 MT", countries: "UK, UAE, Africa", description: "Sun-dried ginger roots for spice & pharma." },
      { name: "Fenugreek Seeds", image: fenugreekImg, moq: "5 MT", countries: "USA, UAE, Malaysia", description: "Rich in aroma, widely used in pickles & curries." },
      { name: "Fennel Seeds", image: fennelImg, moq: "5 MT", countries: "Middle East, Sri Lanka", description: "Sweet aromatic fennel seeds." },
      { name: "Mustard Seeds", image: mustardSeedImg, moq: "5 MT", countries: "Africa, UAE, Bangladesh", description: "Fresh whole mustard seeds." },
    ],
  },
  {
    title: "Cold Pressed Oils",
    description: "Traditional wood-pressed oils retaining natural nutrients and flavor.",
    products: [
      { name: "Groundnut Oil", image: groundnutOilImg, moq: "5 MT", countries: "UAE, Saudi Arabia, Africa", description: "Rich in natural antioxidants and healthy fats." },
      { name: "Coconut Oil", image: coconutOilImg, moq: "5 MT", countries: "USA, UAE, Sri Lanka", description: "Cold pressed coconut oil with natural aroma." },
      { name: "Sesame Oil", image: sesameOilImg, moq: "5 MT", countries: "Vietnam, UAE, Japan", description: "Rich in minerals and flavor." },
      { name: "Mustard Oil", image: mustardOilImg, moq: "5 MT", countries: "Bangladesh, Nepal, UAE", description: "Traditional mustard oil with strong aroma." },
      { name: "Castor Oil", image: castorOilImg, moq: "5 MT", countries: "China, USA, UAE", description: "Medicinal and industrial grade castor oil." },
    ],
  },
  {
    title: "Fresh Fruits",
    description: "Farm-fresh fruits carefully selected for export markets.",
    products: [
      { name: "Mango (Kesar / Alphonso)", image: mangoImg, moq: "5 MT", countries: "UAE, USA, Europe", description: "Premium export quality Indian mangoes." },
      { name: "Banana", image: bananaImg, moq: "10 MT", countries: "Middle East, Sri Lanka", description: "Fresh Cavendish bananas for export." },
      { name: "Pomegranate", image: pomegranateImg, moq: "5 MT", countries: "UAE, Saudi Arabia, UK", description: "Bright red juicy pomegranates." },
    ],
  },
  {
    title: "Vegetables",
    description: "Fresh vegetables directly sourced from farms.",
    products: [
      { name: "Onion", image: onionImg, moq: "20 MT", countries: "Bangladesh, Sri Lanka, UAE", description: "Fresh red onions with long shelf life." },
      { name: "Tomato", image: tomatoImg, moq: "10 MT", countries: "UAE, Maldives, Oman", description: "Farm fresh tomatoes for daily use." },
    ],
  },
];

const Products = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-900 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Our Products
          </h1>
          <p className="text-lg md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Premium quality agro commodities, spices, oils, fruits and vegetables — trusted worldwide.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      {productCategories.map((category, index) => (
        <section
          key={index}
          className={`py-20 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="container mx-auto px-4">
            {/* Category Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{category.title}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{category.description}</p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {category.products.map((product, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                >
                  {/* Product Image */}
                  <div className="h-56 w-full overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>

                    {product.grades && (
                      <div className="mb-3">
                        <span className="font-semibold text-gray-700">Grades:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {product.grades.map((grade, gIdx) => (
                            <span
                              key={gIdx}
                              className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {grade}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                    <p className="text-sm text-gray-500">
                      <strong>MOQ:</strong> {product.moq}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      <strong>Exported To:</strong> {product.countries}
                    </p>

                    <Link
                      to="/contact"
                      className="mt-auto w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Place Your Order?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today for competitive pricing, samples, and detailed product specifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Get Quote Now
            </Link>
            <a
              href="mailto:info@shreehariinternational.in"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              info@shreehariinternational.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
