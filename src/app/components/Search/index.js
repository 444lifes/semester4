"use client"

import { useRef } from "react";

export default function Search({ onSearch }) {
  const searchRef = useRef();

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    onSearch(keyword);
  };

  return (
    <div className="max-w-2xl mx-auto mb-8">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          placeholder="Cari laptop gaming... (contoh: ASUS, RTX 5090)"
          className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
          ref={searchRef}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span></span>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}
