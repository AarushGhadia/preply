import { useState } from "react";

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      onSearch(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search city..."
        className="flex-1 px-4 py-2.5 bg-white/70 backdrop-blur-sm rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 shadow-sm"
      />
      <button
        type="submit"
        className="px-5 py-2.5 bg-blue-500 text-white text-sm font-medium rounded-full hover:bg-blue-600 shadow-sm"
      >
        Go
      </button>
    </form>
  );
}

export default SearchBar;
