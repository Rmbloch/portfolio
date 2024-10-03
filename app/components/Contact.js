import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="container mx-auto px-6 pt-4 pb-10">
      <div className="flex justify-center space-x-6">
        <a href="mailto:john@example.com" className="flex items-center text-white hover:text-blue-600 transition duration-300">
          <MdOutlineMailOutline className="mr-2" size={24} />
          Email
        </a>
        <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-blue-600 transition duration-300">
          <FaLinkedin className="mr-2" size={24} />
          LinkedIn
        </a>
        <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-blue-600 transition duration-300">
          <FaGithub className="mr-2" size={24} />
          GitHub
        </a>
      </div>
    </div>
  )
}