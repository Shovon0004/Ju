import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import Typewriter from "react-typewriter-effect";
import thImage from "../../assets/shirt/th.jpg";

// Data for Pie Chart
const priceComparison = [
  { name: "Our Product", value: 80, color: "#4CAF50" }, // Green
  { name: "Other Companies", value: 150, color: "#F44336" }, // Red
];

// Reasons why the user should use our website
const reasons = [
  { title: "No Middlemen", img: thImage, desc: "We sell directly from manufacturers, eliminating extra costs." },
  { title: "Transparent Pricing", img: "/images/transparent-pricing.jpg", desc: "Every product is priced at its real making cost, no hidden fees." },
  { title: "Quality Assurance", img: "/images/quality.jpg", desc: "We ensure every product meets high-quality standards before selling." },
];

export default function Feature() {
  return (
    <div className="p-12 space-y-16 bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen flex flex-col items-center">
      
      {/* Typing Animation for Heading */}
      <h2 className="text-4xl font-extrabold text-gray-900 text-center">
        <Typewriter text="Why You Use Our Website" cursorColor="black" typeSpeed={70} eraseSpeed={50} />
      </h2>

      {/* Price Comparison Section */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10"
      >
        {/* Pie Chart */}
        <div className="p-10 shadow-2xl rounded-3xl bg-white transform hover:scale-105 transition-transform duration-500 w-full md:w-1/2">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900">Price Comparison</h2>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={priceComparison}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={130}
                fill="#8884d8"
                label
              >
                {priceComparison.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Image and Text Section */}
        <div className="p-10 shadow-2xl rounded-3xl bg-white transform hover:scale-105 transition-transform duration-500 md:h-1/2 w-full md:w-1/2">
  {/* Image Container */}
  <div className="relative">
    <img src={thImage} alt="Our Product" className="w-full h-full object-cover rounded-xl" />
    {/* Text Overlay */}
    <div className="absolute inset-0  items-center justify-center bg-black bg-opacity-50 rounded-xl">
      <h3 className="text-2xl font-bold text-white">Why Choose Us?</h3>
    </div>
  </div>

  
</div>

      </motion.div>

      {/* Why We Are Different Section */}
      <motion.div className="grid md:grid-cols-3 gap-10 max-w-6xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        {reasons.map((reason, index) => (
          <motion.div key={index} whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }} className="shadow-xl rounded-3xl overflow-hidden bg-white transform hover:shadow-2xl transition-shadow duration-300">
            <motion.img src={reason.img} alt={reason.title} className="w-full h-48 object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} />
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-700 text-lg">{reason.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
