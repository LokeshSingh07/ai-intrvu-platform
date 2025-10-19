
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does the AI interview analysis work?",
      answer: "Our AI uses advanced natural language processing and machine learning algorithms to analyze verbal responses, communication patterns, and technical competency. It evaluates factors like problem-solving approach, clarity of explanation, and domain expertise while maintaining objectivity and reducing human bias."
    },
    {
      question: "Is the AI interview platform suitable for all types of roles?",
      answer: "Yes! Our platform is highly customizable and works for technical roles (engineering, data science), business roles (sales, marketing), creative positions, and leadership roles. You can create custom question sets and evaluation criteria tailored to any position."
    },
    {
      question: "How do you ensure the AI assessment is fair and unbiased?",
      answer: "We've trained our AI models on diverse datasets and continuously monitor for bias. The system focuses on job-relevant skills and competencies rather than personal characteristics. We also provide transparency reports showing how decisions are made and regular bias audits."
    },
    {
      question: "What kind of support do you provide during implementation?",
      answer: "We provide comprehensive onboarding including setup assistance, team training, best practices workshops, and dedicated customer success support. Enterprise customers get a dedicated account manager and customized training programs."
    },
    {
      question: "How quickly can we see results after implementation?",
      answer: "Most customers see immediate improvements in interview consistency and candidate experience. Measurable results like reduced time-to-hire and improved quality of hire typically become apparent within 30-60 days of implementation."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our AI interview platform. 
            Can&apos;t find what you&apos;re looking for? Contact our support team.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
