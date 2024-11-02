import React from "react";

function Filter({ selectedCategory, onCategoryChange, search, onSearchChange }) {
  return (
    <div className="Filter">
      <label htmlFor="category">Filter by category:</label>
      <select id="category" value={selectedCategory} onChange={onCategoryChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>

      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        value={search} // Use the 'search' prop here
        onChange={onSearchChange}
        placeholder="Search items..."
      />
    </div>
  );
}

export default Filter;

