import Image from "next/image";

export default function ContactHero() {
  return (
    <div className="relative h-[40vh] overflow-hidden md:h-[50vh]">
      <Image
        src="/images/safari-tours.jpg"
        alt="Contact AAU Tours and Travel"
        fill
        className="object-cover brightness-[0.7]"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Contact Us
        </h1>
        <p className="max-w-2xl text-lg text-white md:text-xl">
          Have questions or ready to plan your Ugandan adventure? Our team is
          here to help make your travel dreams a reality.
        </p>
      </div>
    </div>
  );
}
