"use client";

import Image from "next/image";

import project1 from "../../../project1.jpg";
import project2 from "../../../project2.jpg";
import project3 from "../../../project3.jpg";
import project4 from "../../../project4.jpg";
import project5 from "../../../project5.jpg";
import project6 from "../../../project6.jpg";
import project7 from "../../../project7.jpg";
import project8 from "../../../project8.jpg";
import Link from "next/link";

const projects = [
  {
    
    srcs: project7,
    alt: "Crypto Website",
    title: "Crypto Website",
    description: "This crypto website is built with modern web technologies like HTML, CSS, and JavaScript to deliver a seamless and interactive user experience! 🌐.",
    link: "https://simple-website-crypto.netlify.app/"
  },
  {
    srcs: project2,
    alt: "OOP Project",
    title: "OOP Project",
    description: "This OOP (Object-Oriented Programming) project emphasizes coding best practices while providing an enjoyable user experience! 🎮🌟.",
    link: "https://github.com/khanzadigithubid/OOP-Project"
  },
  {
    srcs: project3,
    alt: "Trading Website",
    title: "Trading Website",
    description: "Our trading website is powered by React, offering a lightning-fast ⚡ and interactive platform for all your trading needs! Built with a focus on real-time data 📈.",
    link: "https://reacts-tradingwebsite.netlify.app/"
  },
  {
    srcs: project4,
    alt: "Shadcn ui Table Component",
    title: "Shadcn ui Table Component",
    description: "The ShadCN UI Table component is a beautifully styled, customizable table designed for modern web apps 📊.",
    link: "https://github.com/khanzadigithubid/Shadcn-ui-Table-Component"
  },
  {
    srcs: project5,
    alt: "Google Search App",
    title: "API Google Search App",
    description: "The Google Search API allows you to perform searches for web pages, images, and news, returning relevant results in real time. 📅🔍.",
    link: "https://github.com/khanzadigithubid/API-Google-Search-App"
  },
  {
    srcs: project6,
    alt: "Recipe Search App",
    title: "API Recipe Search App",
    description: "The Recipe Search API helps find delicious recipes from around the world! 🍽️🌍 With this API, developers can search by ingredients. 🥗🥘",
    link: "https://github.com/khanzadigithubid/API-Recipe-App"
  },
  {
    srcs: project1,
    alt: "Animal Website",
    title: "Animal Website",
    description: "The Animals Website is an interactive platform designed to celebrate the beauty and diversity of wildlife! 🐾🌿 Built with HTML, CSS, and JavaScript. 🦁🐘",
    link: "https://animalswebsite12.netlify.app/"
  },
  {
    srcs: project8,
    alt: "Weather App",
    title: "API Weather App",
    description: "The Weather API provides real-time weather data for locations around the globe! 🌍 With this API, you can add forecasts and weather alerts to your applications. 🌦️📲🌈.",
    link: "https://github.com/khanzadigithubid/API-Weather-Project"
  }
];

<Image
  src="/project3.jpg"
  alt="Trading Website"
  layout="fill"
  objectFit="cover"
/>

const Project = () => {
  return (
    <section className="text-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="flex justify-center items-center pb-14 text-5xl font-serif font-bold text-gray-900 hover:text-pink-600 animate-bounce hover:uppercase">
            <span className="text-purple-950 text-5xl hover:text-gray-900">Projects</span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-3xl text-pink-500 font-serif">
            Explore some of the amazing projects built with passion and creativity!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 lg:w-1/4 md:w-1/2"
              data-aos="flip-right" data-aos-duration="2000"
            >
              <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl relative">
                <div className="relative h-[200px] w-full overflow-hidden rounded-t-lg transition-transform transform hover:scale-110">
                  <Image
                    src={project.srcs}
                    alt={project.alt}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 transition-opacity hover:opacity-40"></div>
                </div>
                <div className="w-full p-4 bg-slate-500 h-[220px]">
                  <Link href={project.link}>
                    <h1 className="text-2xl font-serif text-bold text-gray-800 hover:uppercase hover:text-gray-900 transition-colors duration-300 cursor-pointer mb-3">
                      {project.title}
                    </h1>
                  </Link>
                  <p className="mb-4 text-white">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes backgroundAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        section {
          background: linear-gradient(270deg, #a8e0ff, #f9fbc1);
          background-size: 400% 400%;
          animation: backgroundAnimation 15s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Project;
