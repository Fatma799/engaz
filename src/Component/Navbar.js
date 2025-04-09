

import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import Logo from "../assets/Navbar/إنجاز.svg";
import { Globe } from "lucide-react";


const navLinks = [
  { name: "الرئيسيه", path: "/home" },
  { name: "خدماتنا", path: "/services" },
  { name: "مميزاتنا", path: "/features" },
  { name: "شركاء نجاحنا", path: "/partners" },
  { name: "الأسئلة الشائعة", path: "/faq" },
  { name: "تواصل معنا", path: "/contact" },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(""); 
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex md:justify-around justify-between md:flex-row flex-row-reverse items-center px-8 py-4 bg-white shadow-md">
      
      <button className="hidden gap-2 justify-center bg-[#F0F9FF] text-blue-600 items-center md:flex px-4 py-2 rounded">
        En
        <Globe className="w-4 h-5 text-blue-600  cursor-pointer" />
      </button>

      <div className="flex gap-10">
        <div className="hidden md:flex flex-row-reverse gap-7">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={`text-lg transition-colors duration-300 ${
                activeLink === link.path ? "text-blue-600 font-bold" : "text-gray-600"
              } hover:text-blue-600`}
              onClick={() => setActiveLink(link.path)}
            >
              {link.name}
            </a>
          ))}
        </div>
        <img src={Logo} alt="Logo" className="h-11" />
      </div>
    
    <div className="flex md:hidden lg:hidden " >
   
       <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28}  />}
      </button>
      <button className=" md:hidden gap-2 justify-center items-center flex px-4 py-2 rounded">
        En
        <Globe className="w-4 h-5 text-blue-600 cursor-pointer" />
      </button>
    </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-6 flex flex-col items-center space-y-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={`text-lg transition-colors duration-300 ${
                activeLink === link.path ? "text-blue-600 font-bold" : "text-gray-600"
              } hover:text-blue-600`}
              onClick={() => {
                setActiveLink(link.path);
                setIsOpen(false);
              }}
            >
              {link.name}
              
            </a>
            
          ))}
      
       
        </div>
      )}
    </nav>
  );
};

export default Navbar;
