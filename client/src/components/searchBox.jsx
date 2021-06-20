import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        name="query"
        value={value}
        placeholder="Ticker or company name..."
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBox;
