import Link from "next/link";
import React from "react";

const LeftSide = ({ category, activeId }) => {
  return (
    <div className="list-none text-gray-400 space-y-3">
      {category.map((item) => (
        <li
          key={item.category_id}
          className={`${activeId === item.category_id && "bg-slate-200 p-3 text-gray-700 rounded-md"}`}
        >
          <Link href={`/category/${item.category_id}`} className="block">
            {item.category_name}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default LeftSide;
