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
          className={`w-3 h-2 rounded-full transition-colors duration-300 ${
            currentPage === index ? "bg-[#4A4A4A] opacity-50 w-[39px]" : "bg-[#C5C5C5] opacity-50"
          }`}
          onClick={() => scrollToPage(index)}
        />
      ))}
    </div>
  );
}
