import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { Star } from "lucide-react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import BgGradient from "./assets/images/bg-gradient.webp";
import LazyBlurredImage from "./LazyBlurredImage"; // Import komponen LazyBlurredImage
import Satu from "./assets/testi/1.webp";
import Dua from "./assets/testi/2.webp";
import Tiga from "./assets/testi/3.webp";
import Empat from "./assets/testi/4.webp";

// Sample data for testimonials with images
const testimonials = [
  {
    name: "Andi",
    location: "Jakarta",
    text: "Proses pembeliannya mudah, dari rumah saja bisa dapat motor impian!",
    image: Satu,
    motor: "Honda Beat Deluxe",
  },
  {
    name: "Maya",
    location: "Depok",
    text: "Diskonnya gila-gilaan, recommended banget GenOne Honda!",
    image: Dua,
    motor: "Honda Genio",
  },
  {
    name: "Budi",
    location: "Bekasi",
    text: "Pelayanan cepat dan ramah, motor langsung dikirim ke rumah!",
    image: Tiga,
    motor: "Honda Beat Deluxe",
  },
  {
    name: "Agus",
    location: "Tangerang",
    text: "Puas banget belanja di sini, harga terjangkau dan kualitas terjamin!",
    image: Empat,
    motor: "Honda Scoopy",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto px-4 container">
        <h2 className="mb-12 font-bold text-3xl text-center">
          Testimoni Pelanggan
        </h2>
        {/* Swiper Slider */}
        <Swiper
          spaceBetween={40}
          slidesPerView={1} // Default untuk mobile
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          modules={[Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="relative py-12 mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex flex-col bg-white shadow-md border border-gray-200 rounded-xl"
                style={{ minHeight: "400px" }}
              >
                {/* Image Section */}
                <div className="rounded-t-xl overflow-hidden">
                  {/* Gunakan LazyBlurredImage di sini */}
                  <LazyBlurredImage
                    src={testimonial.image}
                    alt={`${testimonial.name}'s testimonial`}
                    className="w-full h-48 object-cover" // Tetapkan tinggi gambar
                  />
                </div>
                <div
                  style={{
                    backgroundImage: `url(${BgGradient})`,
                    backgroundSize: "cover",
                    backgroundPosition: "left",
                  }}
                  className="p-2 rounded-lg scale-[1.02]"
                >
                  <h3 className="py-[10px] font-poppins font-bold text-white text-center">
                    {testimonial.motor}
                  </h3>
                </div>
                {/* Content Section */}
                <div className="flex-grow p-7 h-full text-center">
                  <div className="flex justify-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="fill-current w-5 h-5 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mb-4 min-h-20 font-poppins text-gray-600 text-start">{`"${testimonial.text}"`}</p>
                  <p className="font-poppins font-bold text-gray-800 text-start">
                    {testimonial.name}, {testimonial.location}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Custom Arrow Styling */}
          <button
            type="button"
            className="top-1/2 left-4 z-10 absolute bg-white shadow-md p-2 rounded-full focus:outline-none text-gray-600 hover:text-orange-500 -translate-y-1/2 swiper-button-prev-custom"
          >
            <BiChevronLeft size={20} />
          </button>
          <button
            type="button"
            className="top-1/2 right-4 z-10 absolute bg-white shadow-md p-2 rounded-full focus:outline-none text-gray-600 hover:text-orange-500 -translate-y-1/2 swiper-button-next-custom"
          >
            <BiChevronRight size={20} />
          </button>
        </Swiper>
      </div>
      {/* Responsive Styling */}
      <style>{`
        @media (max-width: 768px) {
          .mySwiper img {
            object-fit: contain !important;
            height: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;
