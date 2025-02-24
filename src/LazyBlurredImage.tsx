import { useState } from "react";
import LazyLoad from "react-lazyload";

interface LazyBlurredImageProps {
  src: string; // URL gambar
  alt: string; // Teks alternatif
  className?: string; // Tambahkan properti className (opsional)
}

function LazyBlurredImage({ src, alt }: LazyBlurredImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <LazyLoad height={200} offset={100}>
      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        {/* Placeholder Blur */}
        <img
          src="/assets/images/placeholder-blur.jpg"
          alt={alt}
          style={{
            filter: "blur(10px)",
            width: "100%",
            height: "auto",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />

        {/* Gambar Utama */}
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </LazyLoad>
  );
}

export default LazyBlurredImage;
