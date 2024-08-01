export default function FAQItem({ question, answer, isOpen, onClick }: any) {
  return (
    <div className="border border-black">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
      >
        <span className="font-semibold text-2xl">{question}</span>
        <span>{isOpen ? "▾" : "▸"}</span>
      </button>
      {isOpen && <div className="p-4 text-gray-600 font-medium">{answer}</div>}
    </div>
  );
}
