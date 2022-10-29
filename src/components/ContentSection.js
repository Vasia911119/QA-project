import React from 'react';

export default function ContentSection({ children }) {
  return (
    <div className="mx-auto flex flex-col items-center smOnly:px-3 mdOnly:py-14 mdOnly:px-11 xl:px-40 xl:py-10">
      {children}
    </div>
  );
}
