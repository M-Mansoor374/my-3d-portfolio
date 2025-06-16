import { motion } from 'framer-motion';

const Button = ({ children, icon: Icon, gradient = false, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg
        ${gradient ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-5 h-5 ml-2" />}
    </motion.button>
  );
};

export default Button; 