import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css"




const Journey = () => {

    const journeyData = [
        { year: "2020 - The Beginning", text: "Established with a focus on IT staffing and solutions, aiming to deliver efficient and reliable services.", image: "./images/man1.jpg" },
        { year: "2021 - Building Momentum", text: "Introduced contract-based hiring models and strengthened partnerships with freelancers.", image: "./images/man2.jpg" },
        { year: "2022 - Expanding Horizons", text: "Broadened operations to cover non-IT sectors and introduced payroll outsourcing solutions.", image: "./images/man3.jpg" },
        { year: "2023 - Achieving Milestones", text: "Reached 100+ clients across IT and non-IT industries, building lasting partnerships.", image: "./images/man4.jpg" },
      
    ];

    return (

        <section className="sec-margin container ">
              <div className=" align-item-center" data-aos="fade-up">
                    <h2 className="section-head">Our Journey</h2>
                    <p className="section-para"></p>
                </div>

               
      <Swiper
        modules={[Pagination]}
        // slidesPerView={3}
        breakpoints={{
            0: {
              slidesPerView: 1,
            },
            300: {
              slidesPerView: 2,
            },
            894: {
              slidesPerView: 3,
            }
          }}
        spaceBetween={20}
        pagination={{ clickable: true }}
        loop={true}
      >
        {journeyData.map((journey, index) => (
          <SwiperSlide key={index}>
            <div className="journey-card " data-aos="fade-up">
                <div className="journey-img">
                <img src={journey.image} alt={`Journey ${journey.year}`} />

                </div>
                <hr />
              <div className="journey-content">
                <h3 className="journey-year">{journey.year}</h3>
                <p className="journey-text">{journey.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

        </section>

    );




}

export default Journey;