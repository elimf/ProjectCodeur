import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "Instagram",
    url: "https://elimf.alwaysdata.net/",
    image: "img/portfolio/insta.png",
    tags: ["Php"],
    description: "Recreating the Atmos Awwwards website with React Three Fiber",
  },
  {
    title: "Calculator",
    url: "https://codingcalcul.netlify.app",
    image: "img/portfolio/calculatrice.png",
    tags: ["Js"],
    description: "Learn how to bake a 3D model with Blender and use it in r3f",
  },
  {
    title: "Rock Paper Scissor",
    url: "hhttps://rockpaperscissorf.netlify.app/",
    image: "img/portfolio/pfc.png",
    description: "Learn how to use ReadyPlayerMe to create a 3D avatar",
  },
  {
    title: "Etch a sketch",
    url: "https://bejewelled-gumdrop-64f48c.netlify.app",
    image: "img/portfolio/etch.png",
    description: "Use React Three Fiber to create a 3D game",
  },
  {
    title: "Coop-ere",
    url: "https://coopere-asso.org/",
    image: "img/project/MASCOTTE_info.svg",
    tags: ["Flutter", "Symfony"],
    description: "Create a loading screen for your r3f projects",
  },
  {
    title: "Sneakers Addicts",
    url: "https://sneakersaddicts.netlify.app",
    image: "img/portfolio/sacai.png",

    description: "Use React Three Fiber to create a 3D game",
  },
  {
    title: "Coding Shop",
    url: "https://codingshop.netlify.app",
    image: "img/portfolio/shop.png",
    description: "Create a loading screen for your r3f projects",
  },
  {
    title: "Suika Game",
    url: "https://friendly-truffle-f08f3a.netlify.app/",
    image: "img/portfolio/watermelon.png",
    description: "Create a loading screen for your r3f projects",
  },
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[3.2, 3]} />
        <meshBasicMaterial color="black" transparent opacity={0.2} />
      </mesh>
      <Image
        scale={[1.8, 1, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.6}
        zoom={0.9}
        transparent={true}
      />
      <Text
        maxWidth={3}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, -0.3, 0]}
        color={highlighted ? "yellow" : "white"}
      >
        {project.title.toUpperCase()}
      </Text>
      {project.tags && (
        <group position={[-1, -0.8, 0]}>
          {project.tags.map((tag, index) => (
            <Text
              key={index}
              fontSize={0.15}
              position-y={-0.2 * index} // Ajustez la position verticale
            >
              {tag}
            </Text>
          ))}
        </group>
      )}
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 3 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 3, -3]}
          animate={{
            x: 0 + (index - currentProject) * 5.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};
