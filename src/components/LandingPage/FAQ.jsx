/**
 * @description FAQ section for JustConnect
 */
import { faqs } from "../../data/LandingPageData"

const FAQ = () => {
  return (
    <section id="faq" className=" scroll-mt-24 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-section-title">
          Frequently As<span className="text-brand">ked Questions</span>
        </h2>
        <div
          className="h-1 w-16 bg-brand mx-auto mt-3 rounded-full mb-12"
          data-aos="fade-right"
          data-aos-delay="500"
        ></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 border border-orange-300 rounded-xl shadow hover:shadow-lg transition"
              data-aos="fade"
              data-aos-delay={idx * 150}
            >
              <h3 className="font-semibold text-md mb-2">{faq.question}</h3>
              <p className="text-gray-600 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
