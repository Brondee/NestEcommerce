import React from "react";
import PaginationItem from "./PaginationItem";
import arrowLeft from "../../../assets/icons/arrow-left.svg";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import DotsBtn from "./DotsBtn";

interface IProps {
  numPages: number;
  curPage: number;
}

const Pagination: React.FC<IProps> = ({ numPages, curPage }) => {
  let numPagesArr = [];

  for (let i = 0; i < numPages; i++) {
    numPagesArr.push(i + 1);
  }
  if (curPage <= 3) {
    numPagesArr = numPagesArr.slice(0, 5);
  } else if (curPage <= 5) {
    numPagesArr = numPagesArr.slice(0, curPage + 2);
  } else if (numPages - curPage < 5) {
    numPagesArr = numPagesArr.slice(curPage - 3);
  } else {
    numPagesArr = numPagesArr.slice(curPage - 3, curPage + 2);
  }
  return (
    <div className="flex items-center mt-14">
      {curPage != 1 ? <PrevBtn pageNum={curPage} /> : ""}
      {curPage > 5 ? <PaginationItem pageNum={1} curPage={curPage} /> : ""}
      {curPage > 5 ? <DotsBtn /> : ""}
      {numPagesArr.map((page) => {
        return <PaginationItem pageNum={page} curPage={curPage} key={page} />;
      })}
      {numPages >= 7 && numPages - curPage >= 5 ? <DotsBtn /> : ""}
      {numPages >= 7 && numPages - curPage >= 5 ? (
        <PaginationItem pageNum={numPages} curPage={curPage} />
      ) : (
        ""
      )}
      {numPages >= 7 && numPages - curPage >= 5 ? (
        <NextBtn pageNum={curPage} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;
