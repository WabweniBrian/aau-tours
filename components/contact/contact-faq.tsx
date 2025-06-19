import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContactFaq() {
  const faqs = [
    {
      question: "How far in advance should I book my tour?",
      answer:
        "We recommend booking your tour at least 3-6 months in advance, especially for popular activities like gorilla trekking which require permits that can sell out quickly. However, we can sometimes accommodate last-minute bookings depending on availability.",
    },
    {
      question: "Can you arrange custom or private tours?",
      answer:
        "We specialize in creating custom itineraries tailored to your interests, timeframe, and budget. Our team will work with you to design the perfect Ugandan experience, whether you're interested in wildlife, culture, adventure, or a mix of everything.",
    },
    {
      question: "Do you offer airport transfers?",
      answer:
        "Yes, we provide complimentary airport transfers for all our multi-day tour packages. For day tours, airport transfers can be arranged at an additional cost. Please let us know your flight details when booking so we can coordinate your pickup.",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-semibold md:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 text-center">
          <p className="mb-4 text-gray-600">
            Still have questions? Our team is ready to assist you.
          </p>
          <p className="font-medium text-primary">
            Call us at: +256756555777 or Email: aautours.travel@aau.co.ug
          </p>
        </div>
      </div>
    </section>
  );
}
