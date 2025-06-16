import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Particles from '../components/Particles';
import Button from '../components/Button';
import { ArrowRightIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

const Home = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas>
          <Particles />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-blue-900/80 text-blue-200 font-medium shadow-lg text-sm">
            <span className="mr-2 text-yellow-400">★</span> Available for freelance projects
          </span>
        </motion.div>
        {/* Name & Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-extrabold text-center mb-2"
        >
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent block">
            Muhammad Ahsan
          </span>
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mt-2">
            Developer
          </span>
        </motion.h1>
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-2xl text-gray-300 text-center max-w-2xl mt-4 mb-10"
        >
          Crafting <span className="text-cyan-400 font-semibold">immersive digital experiences</span> with cutting-edge technology and <span className="text-blue-400 font-semibold">innovative design</span>
        </motion.p>
        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Button gradient as="a" href="#projects" icon={ArrowRightIcon}>
            View My Work
          </Button>
          <Button as="a" href="#contact" icon={ChatBubbleLeftRightIcon}>
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 