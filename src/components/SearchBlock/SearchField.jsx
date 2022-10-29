import React from 'react';

function SearchField({ value, setValue, onFocus }) {
  console.log(value);
  return (
    <div>
      <input
        className="flex  h-[60px] w-[100%] items-center justify-start gap-[10px] bg-[#ffffff] pl-10 text-[#9EA2C6] outline-transparent"
        placeholder="Що шукаємо?"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={onFocus && onFocus}
      />
    </div>
  );
}

export default SearchField;
