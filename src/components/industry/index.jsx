import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import "./index.css"




const Industry = () => {

    const industryData = [
        {title: "Technology",  image: "./images/slash.png" },
        {title: "Retail",  image: "./images/comp.png" },
        {title: "Finance", image: "./images/computer.png" },
        {title: "Pharma & Helthcare", image: "./images/man4.jpg" },
        {title: "Industrial", image: "./images/man4.jpg" },
        {title: "Consumer", image: "./images/man4.jpg" },
        {title: "Automobile", image: "./images/man4.jpg" },
      
    ];

    return (

        <section className="sec-margin container  ">
              <div className=" align-item-center" data-aos="fade-up">
                    <h2 className="section-head text-4xl font-bold">Industry Specializations</h2>
                    <p className="text-gray-600 text-xl font-medium	 font-noto mb-4">"Driving innovation and excellence across industries, empowering growth, and shaping the future."</p>
                </div>

               
      <Swiper
        modules={[ Autoplay]}
        // slidesPerView={3}
        breakpoints={{
            0: {
              slidesPerView: 1,
            },
        
            894: {
              slidesPerView: 3,
            }
          }}
        spaceBetween={20}
        loop={true}
        autoplay={{delay: 3000}}
      >
        {industryData.map((ind, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center " >
                <div className="w-220  p-8 rounded-full bg-c">
                <img src={ind.image} alt={`Journey ${ind.title}`} className="size-36" />

                </div>
                <h3 className="mt4 text-sky-800 text-xl2 font-semibold title-poppin">{ind.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

        </section>

    );




}

export default Industry;