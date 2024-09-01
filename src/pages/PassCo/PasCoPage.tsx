import React, { useState } from "react";

// Sample data with images and years
const books = [
  {
    id: 1,
    title: "Book One",
    category: "Core",
    year: 2022,
    pdf: "link_to_pdf_1",
    image: "link_to_image_1.jpg",
  },
  {
    id: 2,
    title: "Book Two",
    category: "Elective",
    year: 2023,
    pdf: "link_to_pdf_2",
    image: "link_to_image_2.jpg",
  },
  {
    id: 3,
    title: "Book Three",
    category: "Core",
    year: 2022,
    pdf: "link_to_pdf_3",
    image: "link_to_image_3.jpg",
  },
  {
    id: 4,
    title: "Book Four",
    category: "Elective",
    year: 2023,
    pdf: "link_to_pdf_4",
    image: "link_to_image_4.jpg",
  },
  {
    id: 5,
    title: "Book Five",
    category: "Core",
    year: 2022,
    pdf: "link_to_pdf_5",
    image: "link_to_image_5.jpg",
  },
  {
    id: 6,
    title: "Book Six",
    category: "Elective",
    year: 2023,
    pdf: "link_to_pdf_6",
    image: "link_to_image_6.jpg",
  },
  // Add more books as needed
];

function PasCoPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    const matchesYear =
      selectedYear === "All" || book.year.toString() === selectedYear;

    return matchesSearch && matchesCategory && matchesYear;
  });

  return (
    <div className="w-full h-full flex flex-col items-center bg-gray-50 p-4">
      <h1 className="self-start text-2xl font-inter font-bold mb-4 text-gray-800">
        Past Questions
      </h1>

      <div className="flex flex-col sm:flex-row md:flex-row items-center mb-4 space-y-2 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Search elective/core"
          className="p-3 w-full md:w-96 rounded-lg border border-gray-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="p-2 rounded-lg border border-gray-300"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Core">Core</option>
          <option value="Elective">Elective</option>
        </select>

        <select
          className="p-2 rounded-lg border border-gray-300"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="All">All Years</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          {/* Add more years as needed */}
        </select>
      </div>

      <div className="w-full max-w-6xl h-[calc(100vh-200px)] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="flex flex-col bg-white rounded-lg h-44 shadow-md border border-gray-200 p-4"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/800px-PDF_file_icon.svg.png"
              alt={book.title}
              className="w-full h-auto max-h-20 object-contain rounded mb-2"
            />

            <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
            <div className="flex space-x-4">
              <a href={book.pdf} className="text-gray-700 hover:underline">
                Download PDF
              </a>
              <a href={book.pdf} className="text-gray-700 hover:underline">
                Practice
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PasCoPage;
