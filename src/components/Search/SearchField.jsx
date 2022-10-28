import React from 'react';

function SearchField({ value, setValue, onFocus }) {

    console.log(value);
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={onFocus && onFocus}
      />
      </div> 
  );
}

export default SearchField;