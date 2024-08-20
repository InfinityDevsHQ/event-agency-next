"use client";

import { useState } from "react";
import FAQItem from "./featured/faq-item";
import { faqs1, faqs2 } from "@/constants";

const GeneralInformation = () => {
  const [openIndex1, setOpenIndex1] = useState<number | null>(0);
  const [openIndex2, setOpenIndex2] = useState<number | null>(null);

  const handleClick1 = (index: number) => {
    setOpenIndex1(index === openIndex1 ? null : index);
  };

  const handleClick2 = (index: number) => {
    setOpenIndex2(index === openIndex2 ? null : index);
  };

  return (
    <div className="px-4 py-12 md:px-12 md:py-24">
      <h2 className="text-4xl md:text-5xl font-bold mb-5">
        General Information
      </h2>

      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-2 md:gap-4 lg:gap-5">
          <div>
            {faqs1.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex1}
                onClick={() => handleClick1(index)}
              />
            ))}
          </div>
          <div>
            {faqs2.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex2}
                onClick={() => handleClick2(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
