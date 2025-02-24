import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Bagaimana cara memesan motor di GenOne Honda?",
    answer:
      "Anda dapat memesan motor dengan mengklik tombol 'Pesan Sekarang' di halaman produk atau menghubungi kami melalui WhatsApp untuk konsultasi langsung.",
  },
  {
    question: "Apakah ada diskon untuk pembelian motor?",
    answer:
      "Ya, kami menawarkan diskon hingga 20% untuk beberapa model motor tertentu. Silakan cek detail promosi di halaman utama atau hubungi kami untuk informasi lebih lanjut.",
  },
  {
    question: "Proses pengajuan kredit seperti apa?",
    answer:
      "Proses pengajuan kredit sangat mudah! Cukup ajukan permohonan melalui WhatsApp, dan tim kami akan membantu Anda sepanjang proses hingga persetujuan kredit.",
  },
  {
    question: "Apakah motor bisa dikirim ke alamat saya?",
    answer:
      "Tentu! Kami menyediakan layanan pengiriman ke seluruh wilayah Indonesia. Pastikan Anda memberikan alamat yang lengkap saat pemesanan.",
  },
];

const QnASection = () => {
  // Tetapkan tipe state sebagai number | null
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto px-4 container">
        <h2 className="mb-8 font-bold text-3xl text-center">Pertanyaan Umum</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-sm p-4 border border-gray-200 rounded-lg"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <p className="font-semibold text-lg">{faq.question}</p>
                <ChevronDown
                  className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              <p
                className={`mt-2 text-gray-600 ${
                  activeIndex === index ? "" : "hidden"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QnASection;
