// File: src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <h2 className="text-4xl font-bold text-gray-800 mb-2">Welcome!</h2>
      <p className="text-lg text-purple-500">I’m Kularasa Nishanthini, a passionate Front-End Developer.</p>
    </motion.div>
  );
};

export default Home;