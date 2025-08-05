import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <h2 className="text-3xl font-bold text-purple-600 mb-4">Projects</h2>
      <ul className="list-disc ml-6 space-y-2 text-gray-700">
        <li>Arithmetic Operations App with input validation</li>
        <li>Quiz App (HTML, CSS, JavaScript)</li>
        <li>Chat App (HTML, CSS, JavaScript)</li>
        <li>Calculator App (HTML, CSS, JavaScript)</li>
      </ul>
    </motion.div>
  );
};

export default Projects;