const MapSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto px-4 container">
        <h2 className="mb-8 font-bold text-3xl text-center">Lokasi Kami</h2>
        <p className="mb-12 text-gray-600 text-center">
          Temukan dealer GenOne Honda terdekat dengan mudah!
        </p>
        <div className="shadow-md rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.268137893839!2d106.84496987561535!3d-6.228336393759795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f38a4c8a58e5%3A0x3cb2b42323cf1d13!2sHONDA%20TDM%20SAHARJO%20TEBET%20(Dealer%20Motor%20Honda)!5e0!3m2!1sid!2sid!4v1740046920385!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Dealer GenOne Honda"
            className="rounded-lg w-full h-[450px] md:h-[550px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
