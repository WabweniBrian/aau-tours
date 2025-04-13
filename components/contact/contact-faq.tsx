import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactFaq() {
  const faqs = [
    {
      question: "How far in advance should I book my tour?",
      answer:
        "We recommend booking your tour at least 3-6 months in advance, especially for popular activities like gorilla trekking which require permits that can sell out quickly. However, we can sometimes accommodate last-minute bookings depending on availability.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards (Visa, MasterCard), bank transfers, and mobile money. A deposit of 30% is required to confirm your booking, with the balance due 60 days before your tour start date.",
    },
    {
      question: "Can you arrange custom or private tours?",
      answer:
        "We specialize in creating custom itineraries tailored to your interests, timeframe, and budget. Our team will work with you to design the perfect Ugandan experience, whether you're interested in wildlife, culture, adventure, or a mix of everything.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Our standard cancellation policy allows for a full refund (minus processing fees) for cancellations made 90 days or more before the tour start date. Cancellations made 60-89 days before receive a 70% refund, 30-59 days receive a 50% refund, and less than 30 days are non-refundable. We strongly recommend purchasing travel insurance to protect against unexpected cancellations.",
    },
    {
      question: "Do you offer airport transfers?",
      answer:
        "Yes, we provide complimentary airport transfers for all our multi-day tour packages. For day tours, airport transfers can be arranged at an additional cost. Please let us know your flight details when booking so we can coordinate your pickup.",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Still have questions? Our team is ready to assist you.</p>
          <p className="font-medium text-primary">Call us at: +256 (0) 414 123 456 or Email: info@aautours.com</p>
        </div>
      </div>
    </section>
  )
}
