import aboutImg from "../assets/IMG_4404.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = ({ isDarkMode }) => {
  return (
    <div id="about" className="border-b border-zinc-700 pb-4">
      <h1
        className={`mt-10 text-center text-4xl ${
          isDarkMode ? "text-neutral-900" : ""
        }`}
      >
        About
        <span className={`text-neutral-500 `}> Me</span>
      </h1>
      <div className="flex flex-wrap ">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          className="w-full"
        >
          <div className="flex justify-center">
            <p
              className={`mb-8 max-w-xl b-6 whitespace-pre-line ${
                isDarkMode ? "text-neutral-600 " : ""
              }`}
            >
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
