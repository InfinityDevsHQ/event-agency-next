"use client";

import { faqs1, faqs2 } from "@/constants";
import React, { useState } from "react";
import FAQItem from "./featured/faq-item";

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
    <div className="px-4 py-8 md:py-16 lg:py-28 container mx-auto">
      <h2 className="text-5xl font-bold mb-4">General Information</h2>

      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
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
