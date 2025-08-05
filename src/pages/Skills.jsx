import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <h2 className="text-3xl font-bold text-purple-600 mb-4">Technical Skills</h2>
      <ul className="grid grid-cols-2 gap-4 text-gray-700">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
        <li>MySQL</li>
        <li>Microsoft Office</li>
      </ul>
      <h3 className="text-xl mt-6 text-purple-500">Soft Skills</h3>
      <ul className="flex flex-wrap gap-3 mt-2 text-sm text-gray-700">
        <li className="bg-gray-200 px-3 py-1 rounded-full">Teamwork</li>
        <li className="bg-gray-200 px-3 py-1 rounded-full">Time Management</li>
        <li className="bg-gray-200 px-3 py-1 rounded-full">Communication</li>
        <li className="bg-gray-200 px-3 py-1 rounded-full">Hardworking</li>
      </ul>
    </motion.div>
  );
};

export default Skills;
