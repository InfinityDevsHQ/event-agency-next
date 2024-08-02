import ChevronLogo from "@/components/svgs/chevron-svg";

export default function FAQItem({ question, answer, isOpen, onClick }: any) {
  return (
    <div className="border border-black">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full p-2.5 md:p-4 text-left focus:outline-none"
      >
        <span className="font-semibold text-lg md:text-2xl">{question}</span>
        <span>
          {isOpen ? <ChevronLogo className="rotate-180" /> : <ChevronLogo />}
        </span>
      </button>
      {isOpen && (
        <div className="p-4 text-gray-600 font-medium text-sm md:text-base border-t border-black">
          {answer}
        </div>
      )}
    </div>
  );
}
