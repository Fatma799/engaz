
import imge2 from "../../assets/Features/elements.svg";
import imge1 from "../../assets/Features/laptop-phone-sync.svg";

const Features = () => {
    const features = [
        {
            image: imge2,
            title: 'دعم متواصل علي مدار 24 / 7',
            description: 'وريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)',
            color: 'bg-[#28C1ED33]',
            imageBgColor: 'bg-[#112668]',
            titleColor: 'text-[#112668]',
        },
        {
            image: imge1,
            title: 'أفضل الأسعار',
            description: 'وريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)',
            color: 'bg-[#90C73E33]',
            imageBgColor: 'bg-[#409EDCF0]',
            titleColor: 'text-[#409EDCF0]',
        },
        {
            image: imge2,
            title: 'سهولة الإستخدام',
            description: 'وريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)',
            color: 'bg-[#28C1ED33]',
            imageBgColor: 'bg-[#112668]',
            titleColor: 'text-[#112668]',
        },
    ];

    return (
        <section className="py-12">
            <div className="text-center mb-10 px-4"> 
                <h2 className="text-3xl font-semibold mb-4">
                    مميزات <span className="text-[#409EDCF0]">إنجاز</span>
                </h2>
                <p className="text-[#1D1D1D] max-w-2xl mx-auto text-lg"> {/* استخدام max-w-2xl */}
                    وريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر
                </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 px-4"> 
                {features.map((feature, index) => (
                    <div key={index} className={`rounded-lg p-6 w-full max-w-sm ${feature.color}`}> 
                        <div className={`flex justify-center items-center rounded-full h-16 w-16 mb-4 mx-auto ${feature.imageBgColor}`}>
                            <img src={feature.image} alt={feature.title} className="w-8 h-8" />
                        </div>
                        <h3 className={`text-xl font-semibold mb-2 text-center ${feature.titleColor}`}>{feature.title}</h3>
                        <p className="text-gray-600 text-center">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;



