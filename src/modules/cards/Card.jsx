import React from "react";

export default function Card({children,className}) {
  return (
    <article className={`'container bg-white rounded-2xl p-5' ${className} border border-gray-300 `}>
        {children}
    </article>
  );
}
