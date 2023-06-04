import SectionTitle from "./Shared Pages/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { useEffect, useState } from "react";

// star ratings
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section>
      <SectionTitle
        subheading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      />
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
        
              <div className="m-16 flex flex-col items-center">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly className="text-center mb-12" />
                <FaQuoteLeft className="text-5xl" />
                <p className="text-center my-2">{review.details}</p>
                <h4 className="font-semibold">{review.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
