import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import emailjs from "emailjs-com";
import "boxicons/css/boxicons.min.css";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <ResumeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Fullstack", "Back-end", "Front-end", "Mobile"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [typedElement]);
  const { setSection } = props;
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">Elim</h1>
      <motion.p
        className="text-5xl text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        I'm Developer
        <br />
        <span ref={typedElement} className="text-blue-600 px-1 italic "></span>
      </motion.p>
      <div className="flex space-x-4 mt-4">
        <motion.a
          href="https://github.com/elimf"
          className="google-plus p-1 bg-gray-800 rounded-full"
          target="_blank"
          whileHover={{ scale: 1.1 }}
        >
          <i className="bx bxl-github text-white"></i>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/elimflorvil/"
          target="_blank"
          className="linkedin p-1 bg-blue-500 rounded-full"
          whileHover={{ scale: 1.1 }}
        >
          <i className="bx bxl-linkedin text-white"></i>
        </motion.a>
      </div>
      <motion.button
        onClick={() => setSection(4)}
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button>
    </Section>
  );
};

const ResumeSection = () => {
  const educationData = [
    {
      title: "Preparation of the bachelor web security developer BAC + 3",
      institution: "Coding Factory of ESIEE-IT | Cergy (95)",
      date: "2023 - 2024",
    },
    {
      title: "BAC+2 Analyst Developer of computer applications",
      institution: "Coding Factory of ESIEE-IT | Cergy (95)",
      date: "2021 - 2023",
    },
    {
      title:
        "Preparation License Mathematics Computer Science Physics Engineering ",
      institution: "Cy Cergy Paris University | Cergy-Pontoise (95)",
      date: "2019 - 2021",
    },
    {
      title:
        "Scientific Baccalaureate option Computer Science and Digital Sciences",
      institution: "Jules Ferry High School | Conflans-Sainte-Honorine (78)",
      date: "2016 - 2019",
    },
  ];
  const experienceData = [
    {
      title: "Fullstack Developer at CeoVision (Apprenticeship)",
      company: "CeoVision",
      date: "September 2023 - ",
      responsibilities: [
        "Maintenance of the web platform",
        "Adding new features",
      ],
    },
    {
      title: "Fullstack Developer at Coop-ère (Apprenticeship)",
      company: "Coop-ère",
      date: "January 2022 - August 2023",
      responsibilities: [
        "Development of a cross-platform application",
        "Creation of an API in Symfony for a mobile application developed in Flutter",
      ],
    },
  ];
  return (
    <Section className="flex">
      <motion.div
        className="w-100 ml-2 md:ml-4 p-4 absolute right-0"
        whileInView={"visible"}
      >
        <h2 className="text-4xl font-bold text-gray-300">Education</h2>
        <div className=" space-y-4">
          {educationData.map((education, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-blue-500">
                {education.title}
              </h3>
              <p className="text-gray-300">{`${education.institution} - ${education.date}`}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Expérience professionnelle à droite */}
      <motion.div
        className="w-100 ml-2 md:ml-4 p-4 absolute left-0"
        whileInView={"visible"}
      >
        <h2 className="text-4xl font-bold text-gray-300">
          Professional Experience
        </h2>
        <div className="mt-8 space-y-4">
          {experienceData.map((experience, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-blue-500">
                {experience.title}
              </h3>
              <p className="text-gray-300">{`${experience.company}, ${experience.date}`}</p>
              <ul className="list-disc list-inside">
                {experience.responsibilities.map((responsibility, i) => (
                  <li className="text-gray-300" key={i}>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

const skills = [
  {
    title: "Git",
    level: 80,
  },
  {
    title: "Symfony",
    level: 80,
  },
  {
    title: "React / NextJS",
    level: 70,
  },
  {
    title: "NestJS",
    level: 50,
  },

  {
    title: "Flutter",
    level: 40,
  },
  {
    title: "Android",
    level: 40,
  },
  {
    title: "Vue",
    level: 40,
  },
  {
    title: "React Native",
    level: 30,
  },
  // {
  //   title: "Unity",
  //   level: 30,
  // },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-4xl font-bold text-white">Skills</h2>
        <div className=" mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-lg font-bold text-gray-100"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full my-24 gap-8 items-center justify-center">
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-5xl font-bold">Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.init("d4o_tC0lj5hA2nUfA");
    emailjs
      .send("service_c7zq8tq", "template_h2h9jpl", {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      })
      .then(
        (result) => {
          alert("Email sent successfully!");
          console.log("Email sent successfully:", result);
        },
        (error) => {
          alert("Error sending email. Please try again.");
        }
      );
    // Optionally, reset the form after submission
    e.target.reset();
  };
  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <form onSubmit={sendEmail}>
          <label
            htmlFor="name"
            className="font-medium text-gray-900 block mb-1"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            required
          />
          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            required
          />
          <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};
