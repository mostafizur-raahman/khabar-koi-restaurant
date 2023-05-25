import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
            });
    }, []);
    // console.log(reviews);
    return (
        <section className="mx-20">
            <SectionTitle
                subHeading="what our client says"
                heading="Testimonials"
            ></SectionTitle>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center p-10 mx-10 space-y-3">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <p className="text-3xl text-yellow-400 font-bold">
                                {review.name}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonial;
