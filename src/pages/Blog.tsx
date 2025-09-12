import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, Phone } from "lucide-react";
import heroImg1 from "../image/Premium Spices.jpg";
import heroImg2 from "../image/ap16.jpg";
import author1 from "../image/meetrajbhai.jpg.jpg";
import author2 from "../image/meetrajbhai.jpg.jpg";
import author3 from "../image/meetrajbhai.jpg.jpg";
import author4 from "../image/export-manejar.jpg";

const BlogPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Blog 1 – Groundnut Export Tips */}
      <section className="mb-20">
        {/* Hero */}
        <img
          src={heroImg1}
          alt="Groundnut Export"
          className="w-full h-80 object-cover rounded-xl shadow"
        />
        <h1 className="text-3xl md:text-4xl font-bold mt-6">
          Groundnut Export Tips: How to Choose the Best Quality for Global Buyers
        </h1>

        {/* Author */}
        <div className="flex items-center gap-4 my-6">
          <img src={author1} alt="Author" className="w-16 h-16 rounded-full border" />
          <div>
            <h3 className="font-semibold">Meetraj Piprotar</h3>
            <p className="text-sm text-gray-600">
              Founder & CEO of Shree Hari International. Exporting coriander,
              cumin, groundnuts worldwide.
            </p>
            <div className="flex gap-3 mt-2 text-gray-600">
              <a href="#"><Linkedin size={18} /></a>
              <a href="#"><Instagram size={18} /></a>
              <a href="mailto:info@shreehariinternational.in"><Mail size={18} /></a>
              <a href="tel:+919099934142"><Phone size={18} /></a>
            </div>
          </div>
        </div>

        {/* Date */}
        <p className="text-sm text-gray-500 mb-6">
          Published: 09 September 2025 | Last Updated: 09 September 2025
        </p>

        {/* Tags */}
        <div className="mb-6">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm mr-2">
            Agriculture Export
          </span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            Import-Export Knowledge
          </span>
        </div>

        {/* Content */}
        <div className="prose max-w-none">
          <h2>Why Groundnut Export is Booming?</h2>
          <p>
            India is one of the top exporters with strong demand from Southeast Asia,
            Middle East, and Europe.
          </p>

          <h2>How to Identify Premium Groundnuts?</h2>
          <ul>
            <li>Size & Shape: Bold kernels preferred</li>
            <li>Moisture Content: Below 8%</li>
            <li>Color: Uniform & natural</li>
            <li>Aflatoxin Free: Tested before shipping</li>
          </ul>

          {/* Table */}
          <table className="w-full border mt-4">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Parameter</th>
                <th className="border px-4 py-2">Premium Grade</th>
                <th className="border px-4 py-2">Low Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Moisture Level</td>
                <td className="border px-4 py-2">&lt;8%</td>
                <td className="border px-4 py-2">&gt;12%</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Kernel Size</td>
                <td className="border px-4 py-2">Bold (38/42)</td>
                <td className="border px-4 py-2">Small</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Color</td>
                <td className="border px-4 py-2">Natural</td>
                <td className="border px-4 py-2">Dull</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Aflatoxin Report</td>
                <td className="border px-4 py-2">Certified</td>
                <td className="border px-4 py-2">Not Tested</td>
              </tr>
            </tbody>
          </table>

          <h2>Export Process Step-by-Step</h2>
          <ol>
            <li>Sourcing from farmers</li>
            <li>Sorting & cleaning (sortex machine)</li>
            <li>Quality testing & certification</li>
            <li>Packaging & labeling</li>
            <li>Documentation & shipment</li>
          </ol>

          <h2>Top Countries Importing Groundnuts</h2>
          <p>Vietnam, Indonesia, UAE, Netherlands, Egypt</p>

          <h2>Why Choose Shree Hari International?</h2>
          <ul>
            <li>40+ years expertise</li>
            <li>Premium sorting & packaging</li>
            <li>Timely delivery worldwide</li>
            <li>Custom branding option</li>
          </ul>
        </div>
      </section>

      {/* Blog 2 – Seeds Purchase & Quality Check */}
      <section>
        {/* Hero */}
        <img
          src={heroImg2}
          alt="Seeds Quality"
          className="w-full h-80 object-cover rounded-xl shadow"
        />
        <h1 className="text-3xl md:text-4xl font-bold mt-6">
          How to Purchase Seeds & Check Quality – Expert Advice
        </h1>

        {/* Authors */}
        <div className="flex flex-wrap gap-6 my-6">
          {[{img:author2,name:"Raju Bhai Kotecha",role:"Market & Export Expert"},
            {img:author3,name:"Nileshbhai Piprotar",role:"Purchase Manager & Director"},
            {img:author4,name:"Chirag",role:"Quality Control Specialist"}]
            .map((auth,idx)=>(
              <div key={idx} className="flex items-center gap-3">
                <img src={auth.img} alt={auth.name} className="w-14 h-14 rounded-full border"/>
                <div>
                  <h3 className="font-semibold">{auth.name}</h3>
                  <p className="text-sm text-gray-600">{auth.role}</p>
                </div>
              </div>
          ))}
        </div>

        {/* Date */}
        <p className="text-sm text-gray-500 mb-6">
          Published: 09 September 2025 | Updated: 09 September 2025
        </p>

        {/* Content */}
        <div className="prose max-w-none">
          <h2>1️⃣ Supplier & Seller Selection</h2>
          <p>Choose trusted suppliers, check ISO/FSSAI certificates. Prefer direct farmers.</p>
          <blockquote>Raju Bhai: “Always buy from certified and reliable suppliers.”</blockquote>

          <h2>2️⃣ Physical Appearance Check</h2>
          <p>Seeds must be uniform, clean, without broken grains or stones.</p>

          <h2>3️⃣ Color & Aroma</h2>
          <p>Fresh, natural color with strong aroma.</p>

          <h2>4️⃣ Moisture & Dryness</h2>
          <p>Ideal moisture 8–10% for safe storage.</p>

          <h2>5️⃣ Germination & Purity Test</h2>
          <p>Target 85–90% germination. Lab testing recommended.</p>
          <blockquote>Nileshbhai: “Always perform lab testing before bulk purchase.”</blockquote>

          <h2>6️⃣ Packaging</h2>
          <p>Airtight, moisture-proof bags with proper labeling.</p>

          <h2>7️⃣ Storage & Transport</h2>
          <p>Dry, ventilated areas. Avoid sunlight exposure.</p>

          <h2>8️⃣ Price & Negotiation</h2>
          <p>Don’t fall for very cheap seeds; check market rates first.</p>

          <h2>9️⃣ Expert Advice Summary</h2>
          <blockquote>Chirag: “Purchase a small test batch first, then bulk order.”</blockquote>
        </div>

        {/* Contact CTA */}
        <div className="bg-green-50 text-center mt-12 p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-3">🔗 Contact Our Experts</h2>
          <p className="mb-4">For guidance and bulk purchase, connect directly:</p>
          <p>📞 +91 9099934142 (Nileshbhai Piprotar)</p>
          <p>✉️ info@shreehariinternational.in</p>
          <div className="flex justify-center mt-4">
            <button className="bg-green-600 text-white px-6 py-2 rounded">
              Chat with Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
