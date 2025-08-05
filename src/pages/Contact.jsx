import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <h2 className="text-3xl font-bold text-purple-600 mb-4">Contact</h2>
      <p className="text-gray-700">
        📍 No: 154, Jeyanthinagar, Kilinochchi <br />
        📞 +94 774791109 <br />
        📧 nishanishanthini189@gmail.com
      </p>
    </motion.div>
  );
};

export default Contact;
