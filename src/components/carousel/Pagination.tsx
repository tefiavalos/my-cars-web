"use client";

export default function Pagination({
  totalPages,
  currentPage,
  scrollToPage,
}: {
  totalPages: number;
  currentPage: number;
  scrollToPage: (index: number) => void;
}) {
  return (
    <div className="flex justify-center mt-4 gap-2">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          className={`w-3 h-3 rounded-full transition-colors duration-300 ${
            currentPage === index ? "bg-gray-900 scale-110" : "bg-gray-400"
          }`}
          onClick={() => scrollToPage(index)}
        />
      ))}
    </div>
  );
}
