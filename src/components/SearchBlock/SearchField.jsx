import React from 'react'

function SearchField({ value, setValue, onFocus }) {
  console.log(value)
  return (
    <div>
      <input
        className="bg-[#ffffff]  outline-transparent w-[100%] h-[60px] flex items-center justify-start gap-[10px] pl-10 text-[#9EA2C6]"
        placeholder="Що шукаємо?"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={onFocus && onFocus}
      />
    </div>
  )
}

export default SearchField
