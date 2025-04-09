

import scren1 from "../../assets/AppEngaz/Group.svg";
import scren2 from "../../assets/AppEngaz/Frame (2).svg";
import scren3 from "../../assets/AppEngaz/Frame (3).svg";
import scren4 from "../../assets/AppEngaz/Frame (4).svg";
import scren5 from "../../assets/AppEngaz/Frame (5).svg";
import scren6 from "../../assets/AppEngaz/Frame.svg";
import scren7 from "../../assets/AppEngaz/Group2.svg";
import CustomTitle from "../../Hooks/CustomTitle";

const AppEngaz = () => {
    const images = [scren3, scren2, scren4, scren1, scren5, scren6, scren7];

    return (
        <section className="h-auto bg-no-repeat p-11 bg-app bg-white">
            <CustomTitle title={"تطبيق انجاز"} className="mt-11" />
            <div className="flex flex-wrap  items-center md:flex-nowrap md:flex-row gap-4 w-[90%] mx-auto">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`rounded-lg p-2 w-full ${index === 3  ? 'md:w-[40%]' : 'md:w-[35%] md:hover:w-[40%]'}`} // تعديل هنا
                    >
                        <img src={image} alt={`Screen ${index + 1}`} className="text-lg bg-transparent flex mb-2 w-full" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AppEngaz;