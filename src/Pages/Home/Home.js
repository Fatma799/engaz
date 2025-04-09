
import Logo from "../../assets/إنجاز.svg"
import BG from "../../assets/Home/image.svg"
import Lfbotton from "../../assets/Home/Group 51974.svg"
import Apple from "../../assets/Home/Vector.svg"
import PlayStore from "../../assets/Home/fi_888857.svg"
const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around  bg-cover   px-8 py-16 bg-gray-100"
    style={{ backgroundImage: `url(${BG})` }} 
    >
      
      
      <div className="mt-10 md:mt-0">
       
        <img
          src={Lfbotton}
          alt="Hero"
          className="w-72 h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="max-w-lg flex  items-end flex-col text-right ">
      <img
          src={Logo}
          alt="Hero"
          className="w-24 mb-2 "
        />
        <div className="text-white text-lg" >
        <p className=" text-[#3498DBF0]  mb-2">
        تطبيق إنجاز لخدمات الطباعة و الترجمة
        </p>
        <p className=" mb-2">
        يهدف الى توفير جميع الخدمات الخاصة بالطباعة و الترجمة        </p>
        <p className=" mb-6">
        وريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص..        </p>

        </div>
      
        
        <div className="flex space-x-4 flex-col justify-end  gap-4">
            <p className="text-white text-xl" >حمل تطبيقات الجوال</p>
            <div className="flex items-center justify-end gap-4" >
             <a a className="flex items-center gap-2 bg-[#1D1D1D] text-white px-4 py-1 h-12  ">
           
                <img
                src={Apple}
                alt="Hero"
                className="w-5 rounded-lg shadow-lg"
                />
                <div className="text-center" >
                    <p className="text-xs }" >
                    Download on the
                    </p>
                    <p className="font-bold text-xs" >
                    App Store
                    </p>
                </div>
             </a>
             <a a className="flex items-center gap-2 bg-[#1D1D1D] text-white px-4 py-2 h-12 ">
           
           <img
           src={PlayStore}
           alt="Hero"
           className="w-6 rounded-lg shadow-lg"
           />
           <div className="text-center" >
               <p className="text-sm" >
               Download on the
               </p>
               <p className="font-bold text-sm " >
               Play Store
               </p>
           </div>
        </a>
        </div>
            </div>
         
      </div>

    </section>
  );
};

export default Home;
