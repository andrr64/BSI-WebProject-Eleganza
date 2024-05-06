import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform your search action here
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="flex items-center w-full max-w-sm bg-gray-200 rounded-md px-4 py-2">
      <input
        type="text"
        className="flex-grow outline-none bg-transparent"
        placeholder="Cari disini ..."
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
      <button
        type="button"
        className="px-3 py-2 bg-gray-300 hover:bg-gray-400 rounded-md"
        onClick={handleSearchSubmit}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-5.19-5.19a2.63 2.63 0 0 0-1.85-2.81A2.63 2.63 0 0 0 12.17 8l-5.5-5.5a2.63 2.63 0 0 0-2.81-1.85A2.63 2.63 0 0 0 6.25 3l9.92 9.92a2.63 2.63 0 0 1 1.85 2.81l5.5 5.5a2.63 2.63 0 0 1 2.81 1.85zM15 11a3.5 3.5 0 0 1 0 7 3.5 3.5 0 0 1 -7 0 3.5 3.5 0 0 1 0-7z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
