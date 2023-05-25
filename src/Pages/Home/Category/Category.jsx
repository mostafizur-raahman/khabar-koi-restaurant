import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";

// import required modules

import slide1 from "./../../../assets/home/slide1.jpg";
import slide2 from "./../../../assets/home/slide2.jpg";
import slide3 from "./../../../assets/home/slide3.jpg";
import slide4 from "./../../../assets/home/slide4.jpg";
import slide5 from "./../../../assets/home/slide5.jpg";
import { Pagination } from "swiper";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
       subHeading={"From 11 am to 10 pm."}
       heading={"Order Online"}
      >
      </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h1 className="text-4xl uppercase text-center -mt-40 text-white shadow-md">
            salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h1 className="text-4xl uppercase text-center -mt-40 text-white shadow-md">
            Pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h1 className="text-4xl uppercase text-center -mt-40 text-white shadow-md">
            ssoup
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h1 className="text-4xl uppercase text-center -mt-40 text-white shadow-md">
            desert
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h1 className="text-4xl uppercase text-center -mt-40 text-white shadow-md">
            Abro salad
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
