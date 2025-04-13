export default function ContactMap() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center text-2xl font-semibold md:text-3xl">
          Find Us
        </h2>
        <div className="h-[400px] overflow-hidden rounded-lg shadow-md md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.538440336977!2d32.5656!3d0.3476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb204f1b3e4d%3A0x4b6183c6d7a59c0!2sKampala!5e0!3m2!1sen!2sug!4v1713000000000!5m2!1sen!2sug"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kampala Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
