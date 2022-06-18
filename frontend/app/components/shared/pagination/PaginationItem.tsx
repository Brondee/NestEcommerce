import Link from "next/link";
import React from "react";

interface IProps {
  pageNum: number;
  curPage: number;
}

const PaginationItem: React.FC<IProps> = ({ pageNum, curPage }) => {
  return (
    <Link href={`http://localhost:3000/shop/${pageNum}`}>
      <a
        className={`text-lg font-bold rounded-full px-5 py-3 
      hover:bg-dullPink transition-colors mx-1 ${
        curPage === pageNum ? "bg-dullPink" : "bg-dullBlue"
      }`}
      >
        {pageNum}
      </a>
    </Link>
  );
};

export default PaginationItem;
