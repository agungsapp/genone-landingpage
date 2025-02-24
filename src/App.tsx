import React, { useEffect, useState } from "react";
import {
  PhoneCall,
  Star,
  Shield,
  Clock,
  CheckCircle2,
  MapIcon as MessageCircleMore,
} from "lucide-react";
import { BiLogoWhatsapp } from "react-icons/bi";
import HeroImage from "./assets/images/hero.webp";
import BgGradient from "./assets/images/bg-gradient.webp";
import Cloud from "./assets/images/cloud.webp";
import CloudTop from "./assets/images/cloud-top.webp";
import Genone from "./assets/images/genone.webp";
import Honda from "./assets/images/honda.webp";
// motor
import Beat from "./assets/motors/1.webp";
import Vario from "./assets/motors/2.webp";
import Adv from "./assets/motors/3.webp";
import Scoopy from "./assets/motors/4.webp";
import TestimonialsSection from "./TestimonialsSection";
import QnASection from "./QnASection";
import MapSection from "./MapSection";
import LazyBlurredImage from "./LazyBlurredImage";




const motorcycles = [
  {
    name: "BEAT DELUXE SMARTKEY",
    color: "HIJAU",
    image: Beat,
    price: "Dp. 400 Ribuan",
    description:
      "Motor matic terlaris dengan desain sporty dan fitur smart key untuk kenyamanan berkendara.",
  },
  {
    name: "VARIO 160 CBS",
    color: "MERAH",
    image: Vario,
    price: "Dp. 1,5 Juta'an",
    description:
      "Tampil lebih gagah dengan mesin 160cc dan fitur keselamatan CBS yang handal.",
  },
  {
    name: "ADV 160",
    color: "PUTIH",
    image: Adv,
    price: "Dp. 2 Juta'an",
    description:
      "Adventure scooter dengan performa tinggi, cocok untuk petualangan harian Anda.",
  },
  {
    name: "SCOOPY PRESTIGE",
    color: "PUTIH",
    image: Scoopy,
    price: "Dp. 1 Juta'an",
    description:
      "Bergaya retro modern dengan kenyamanan maksimal untuk pengendara stylish.",
  },
];

const testimonials = [
  {
    name: "Andi",
    location: "Jakarta",
    text: "Proses pembeliannya mudah banget, dari rumah saja bisa dapat motor impian!",
    image: Beat, // Ganti dengan path foto penyerahan motor
  },
  {
    name: "Maya",
    location: "Depok",
    text: "Diskonnya gila-gilaan, recommended banget GenOne Honda!",
    image: Vario, // Ganti dengan path foto penyerahan motor
  },
];

function App() {
  const [salesPhone, setSalesPhone] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Ambil parameter dinamis dari URL
        const params = new URLSearchParams(window.location.search);
        const username = params.get("sales");

        // let apiUrl = `http://localhost:8000/api/get-sales/${
        let apiUrl = `https://genone.co.id/api/get-sales/${
          username || "m-yusuf-sofiyawan"
        }`; // Gunakan ID default jika tidak ada parameter

        // Fetch data dari API
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch sales data");
        }

        const data = await response.json();
        if (data.nomor) {
          setSalesPhone(data.nomor); // Simpan nomor WhatsApp
        }
      } catch (error) {
        console.error("Error fetching sales data:", error);
      } finally {
        setLoading(false); // Tandai bahwa data sudah selesai dimuat
      }
    };

    fetchData();
  }, []);

  const handleWhatsAppClick = () => {
    if (salesPhone) {
      window.open(
        `https://wa.me/${salesPhone}?text=Halo,%20saya%20tertarik%20dengan%20promo%20motor%20Honda`,
        "_blank"
      );
    } else {
      alert("Nomor WhatsApp tidak tersedia.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-50">
      {/* Sticky Navbar */}
      <nav className="top-0 z-50 sticky bg-white shadow-md px-14 py-1">
        <div className="flex justify-between items-center mx-auto container">
          <img src={Genone} alt="GenOne Honda Logo" className="w-28 md:w-40" />
          <img src={Honda} alt="Honda Logo" className="w-28 md:w-40" />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden text-white">
        {/* Background Image */}
        <div
          className="z-0 absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BgGradient})`,
          }}
        ></div>

        {/* Cloud 1 (Bottom Right) */}
        <div className="right-0 bottom-0 z-10 absolute opacity-60 w-[400px] h-auto">
          <img src={Cloud} alt="Cloud" className="w-full h-auto" />
        </div>

        {/* for desktop only */}
        <div className="hidden md:block bottom-0 left-0 z-10 absolute w-[200px] h-auto scale-x-[-1] transform">
          <img src={Cloud} alt="Cloud Flipped" className="w-full h-auto" />
        </div>

        {/* for mobile view only */}
        <div className="md:hidden block top-0 left-0 z-10 absolute w-[200px] h-auto scale-[0.7] -translate-x-[20%] -translate-y-[20%] transform">
          <img src={CloudTop} alt="Cloud Flipped" className="w-full h-auto" />
        </div>

        {/* Content Container */}
        <div className="z-20 relative flex md:flex-row flex-col justify-between items-center mx-auto px-4 py-16 md:py-24 container">
          {/* Left Side: Text Content */}
          <div className="mb-8 md:mb-0 md:p-16 px-10 py-1 w-full md:w-2/3">
            {/* Main Title */}
            <h1 className="mb-6 font-poppins font-bold text-4xl md:text-6xl leading-tight tracking-wide">
              Beli Motor Honda <br />
              <span className="text-yellow-400">Impianmu Tanpa Ribet !</span>
            </h1>
            {/* Subtitle */}
            <p className="mb-8 font-poppins font-medium text-sm md:text-xl">
              Pesan motor Honda favoritmu tanpa harus keluar rumah.{" "}
              <br className="hidden md:block" />
              Nikmati layanan terbaik hanya di GenOne Honda!
            </p>
            {/* Call-to-Action Button */}
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 shadow-lg px-8 py-2 md:py-4 border-4 border-white md:border-[5px] rounded-full w-full md:w-auto font-poppins font-semibold text-white text-xs md:text-lg hover:scale-105 transition-all transform"
            >
              <BiLogoWhatsapp size={24} />
              <span className="hidden md:block">
                Klik di Sini untuk Diskon Spesial dan{" "}
                <br className="md:hidden block" /> Pesan Sekarang!
              </span>
              <span className="md:hidden block">Pesan Sekarang!</span>
            </button>
          </div>

          {/* Right Side: Floating Motor Image */}
          <div className="flex justify-center w-full md:w-1/3">
            <img
              src={HeroImage}
              alt="Motor Honda Beat"
              className="rounded-lg w-full md:w-[500px] h-auto rotate-3 hover:rotate-0 transition-transform duration-300 transform"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="z-10 relative md:mt-[-8rem] py-16">
        <div className="mx-auto px-4 container">
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-4 bg-white hover:bg-gray-50 shadow-lg p-6 rounded-2xl transition-all">
              <div className="bg-red-100 p-3 rounded-full">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="mb-2 font-bold text-lg">
                  Terpercaya dan Praktis
                </h3>
                <p className="text-gray-600">
                  Proses pembelian yang aman dan terpercaya
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white hover:bg-gray-50 shadow-lg p-6 rounded-2xl transition-all">
              <div className="bg-red-100 p-3 rounded-full">
                <Star className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="mb-2 font-bold text-lg">Diskon Hingga 20%</h3>
                <p className="text-gray-600">
                  Dapatkan penawaran terbaik untuk motor impian Anda
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white hover:bg-gray-50 shadow-lg p-6 rounded-2xl transition-all">
              <div className="bg-red-100 p-3 rounded-full">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="mb-2 font-bold text-lg">Proses Cepat</h3>
                <p className="text-gray-600">
                  Cukup 1 klik untuk konsultasi via WhatsApp
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white hover:bg-gray-50 shadow-lg p-6 rounded-2xl transition-all">
              <div className="bg-red-100 p-3 rounded-full">
                <CheckCircle2 className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="mb-2 font-bold text-lg">Garansi ACC 99%</h3>
                <p className="text-gray-600">
                  Proses kredit mudah dan cepat disetujui
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section with Zig-zag Layout */}
      <div className="md:py-16">
        <div className="mx-auto px-4 container">
          <div className="flex justify-center mb-12 md:mb-20">
            <div
              className="flex bg-no-repeat p-3 rounded-xl w-fit"
              style={{
                backgroundImage: `url(${BgGradient})`,
                backgroundSize: "cover",
                backgroundPosition: "left",
                boxShadow: "9px 14px 14px -7px rgba(0,0,0,0.47)",
              }}
            >
              <h2 className="font-poppins font-semibold text-white text-2xl text-center">
                Rekomendasi Motor Terbaik
              </h2>
            </div>
          </div>
          <div className="space-y-24 mx-auto max-w-6xl">
            {motorcycles.map((motor, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-16`}
              >
                {/* Gambar Motor */}
                <div className="w-full md:w-1/2">
                  <div className="group relative">
                    {/* Gunakan LazyBlurredImage di sini */}
                    <LazyBlurredImage src={motor.image} alt={motor.name} />
                    <div className="absolute inset-0 bg-gradient-to-t rounded-2xl"></div>
                  </div>
                </div>

                {/* Detail Motor */}
                <div className="space-y-6 w-full md:w-1/2">
                  <div className="space-y-4">
                    <h3 className="font-bold text-3xl">{motor.name}</h3>
                    <p className="text-gray-600 text-lg">{motor.description}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600">
                        Warna: {motor.color}
                      </span>
                      <span className="font-bold text-red-600 text-2xl">
                        {motor.price}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full font-bold text-white text-base md:text-lg hover:scale-105 transition-all transform"
                  >
                    <BiLogoWhatsapp size={24} />
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Garansi ACC Section */}
      <div className="bg-white py-16">
        <div className="mx-auto px-4 container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="bg-red-50 p-8 border border-red-100 rounded-2xl">
              <CheckCircle2 className="mx-auto mb-4 w-16 h-16 text-red-600" />
              <h2 className="mb-4 font-bold text-3xl">Garansi ACC 99%</h2>
              <p className="mb-6 text-gray-600 text-lg">
                Proses pengajuan kredit yang mudah dan hampir pasti disetujui.
                Kami membantu Anda mendapatkan motor impian dengan cara
                termudah!
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full font-bold text-white text-base md:text-lg hover:scale-105 transition-all transform"
              >
                <BiLogoWhatsapp size={24} />
                Ajukan Kredit Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* QnA */}
      <QnASection />

      {/* maps section */}
      <MapSection />

      {/* Sticky WA button */}
      <div className="right-4 bottom-4 z-20 fixed">
        <button
          onClick={handleWhatsAppClick}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 shadow-lg px-4 py-3 rounded-full font-bold text-white hover:scale-105 transition-all"
        >
          <BiLogoWhatsapp size={35} />
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto px-4 container">
          <div className="mb-8 text-center">
            <h3 className="mb-2 font-bold text-2xl">GenOne Honda</h3>
            <p className="text-gray-400">Dealer Motor Honda Terpercaya</p>
          </div>
          <div className="flex justify-center items-center gap-6 mb-8">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <PhoneCall size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <MessageCircleMore size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm text-center">
            © 2024 GenOne Honda. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
