import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <h2 className="text-3xl font-bold text-purple-600 mb-4">Education</h2>
      <ul className="text-gray-700 space-y-2">
        <li>G.E.C Advanced Level (2021–2024)</li>
        <li>Basic Computer Skills – IAT Technologies in Don Bosco (2024–2025)</li>
        <li>Full Stack Development (2025–Present)</li>
      </ul>
    </motion.div>
  );
};

export default Education;