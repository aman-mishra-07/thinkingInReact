import React from "react";

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form className="space-y-2">
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
        className="p-2 border rounded block text-black outline-none"
      />
      <label>
        <input type="checkbox" value={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)}/> Only show products in
        stock
      </label>
    </form>
  );
}

export default SearchBar;
