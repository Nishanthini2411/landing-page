import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

 function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">My Coding Portfolio</h1>
        <p className="text-lg text-gray-600 mt-2">Frontend Developer | React | JavaScript</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Home</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Hello! I am Niishanthini. I'm a passionate frontend developer who loves creating clean and interactive user interfaces. Welcome to my portfolio — here you’ll find my featured projects and more about me.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          I specialize in building responsive web applications using modern JavaScript frameworks like React. I'm always learning and love contributing to open-source. My background includes a mix of coding, UI/UX design, and performance optimization.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold text-gray-800">Portfolio Website</h3>
              <p className="text-gray-600">Built with React and Tailwind CSS to showcase my development work and resume.</p>
              <a href="#" className="text-blue-600 hover:underline">View on GitHub</a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold text-gray-800">Task Manager App</h3>
              <p className="text-gray-600">A to-do app with authentication and persistent data storage using Firebase.</p>
              <a href="#" className="text-blue-600 hover:underline">View Live Demo</a>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="text-center mt-16">
        <Button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Contact Me</Button>
      </div>
    </div>
  );
}

export default Portfolio;
