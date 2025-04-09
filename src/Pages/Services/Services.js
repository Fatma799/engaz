

import service1 from "../../assets/Services/image.svg";
import service2 from "../../assets/Services/image (2).svg";
import CustomTitle from "../../Hooks/CustomTitle.js";

const services = [
    {
        id: 1,
        image: service1,
        title: "ترجمة",
        description: "هذا النص هو نص بديل يمكن ان يستبدل بنص أخر في نفس المساحة",
    },
    {
        id: 2,
        image: service2,
        title: "طباعة",
        description: "هذا النص هو نص بديل يمكن ان يستبدل بنص أخر في نفس المساحة",
    },
];

const Services = () => {
    return (
        <section className="py-16 ">
            <div className="container mx-auto text-center px-4"> 
                <CustomTitle title="خدماتنا" />
                <div className="flex flex-wrap justify-center gap-8"> 
                    {services.map((service) => (
                        <div key={service.id} className="bg-white rounded-xl shadow-md text-center  max-w-sm w-80 "> 
                            <img src={service.image} alt={service.title} className="w-full object-cover rounded-xl" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-end text-gray-800 mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
