import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

// import images here
import slide1 from "../../src/assets/home/slide1.jpg";
import slide2 from "../../src/assets/home/slide2.jpg";
import slide3 from "../../src/assets/home/slide3.jpg";
import slide4 from "../../src/assets/home/slide4.jpg";
import slide5 from "../../src/assets/home/slide5.jpg";
import SectionTitle from "./Shared Pages/SectionTitle";

const Category = () => {
  return (
    <div className="w-5/6 mx-auto my-5">
      <SectionTitle subheading="From 11:00am to 10:00pm" heading="ORDER ONLINE"/>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-xl uppercase text-center -mt-12 font-bold text-white">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-xl uppercase text-center -mt-16 font-bold text-white">Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-xl uppercase text-center -mt-16 font-bold text-white">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-xl uppercase text-center -mt-16 font-bold text-white">Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-xl uppercase text-center -mt-16 font-bold text-white">Salad</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
