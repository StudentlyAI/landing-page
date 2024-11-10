import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is StudentlyAI?',
    answer: 'StudentlyAI is an AI-powered learning assistant that helps students improve their academic performance through personalised study plans, intelligent tutoring, and comprehensive analytics.'
  },
  {
    question: 'How does the AI personalisation work?',
    answer: 'Our AI analyses your learning style, academic goals, and performance data to create tailored study plans and recommendations that adapt to your needs.'
  },
  {
    question: 'Is StudentlyAI available 24/7?',
    answer: 'Yes! Our AI assistant is available around the clock to help you with your studies, answer questions, and provide support whenever you need it.'
  },
  {
    question: 'What subjects does StudentlyAI cover?',
    answer: 'StudentlyAI supports all academic subjects including mathematics, sciences, humanities, and languages.'
  },
  {
    question: 'How much does StudentlyAI cost?',
    answer: 'Pricing details will be announced when we launch. Join our waitlist to be the first to know about our pricing plans and early-bird discounts.'
  }
];

export default function FAQ() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Find answers to common questions about StudentlyAI.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
