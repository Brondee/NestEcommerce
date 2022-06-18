import Link from "next/link";
import React from "react";
import arrowRight from "../../../assets/icons/arrow-right.svg";

interface IProps {
  pageNum: number;
}

const NextBtn: React.FC<IProps> = ({ pageNum }) => {
  return (
    <Link href={`http://localhost:3000/shop/${pageNum + 1}`}>
      <a
        className="text-lg font-bold rounded-full px-3 py-3 bg-dullBlue 
      hover:bg-dullPink transition-colors ml-5"
      >
        <img src={arrowRight.src} alt="Next btn" className="w-7" />
      </a>
    </Link>
  );
};

export default NextBtn;
