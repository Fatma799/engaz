


import Logo from "../assets/Navbar/إنجاز.svg";

const navLinks = [
    { name: "الرئيسيه", path: "/home" },
    { name: "خدماتنا", path: "/services" },
    { name: "مميزاتنا", path: "/features" },
    { name: "شركاء نجاحنا", path: "/partners" },
    { name: "الأسئلة الشائعة", path: "/faq" },
    { name: "تواصل معنا", path: "/contact" },
];

const Footer = () => {
    return (
        <nav className="flex flex-col md:flex-row-reverse md:justify-around items-center px-8 py-4 bg-[#FAFAFA] shadow-md"> {/* تعديل هنا */}
           
           <img src={Logo} alt="Logo" className="h-11 md:hidden " />

            <div className="flex flex-col md:flex-row  items-center gap-10"> 
                <div className="flex flex-col md:flex-row-reverse items-center gap-4"> 
                    {navLinks.map((link) => (
                        <a
                            key={link.path}
                            href={link.path}
                            className="text-lg text-gray-600 hover:text-blue-600"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                <img src={Logo} alt="Logo" className="h-11  hidden md:block " />

            </div>

            <button className=" gap-2 justify-center font-bold text-[#3498DBF0] items-center px-4 py-2 rounded mt-4"> {/* تعديل هنا */}
                جميع الحقوق محفوظة لتطبيق إنجاز
            </button>
        </nav>
    );
};

export default Footer; 
