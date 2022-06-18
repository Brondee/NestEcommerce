import Link from "next/link";
import React from "react";
import arrowLeft from "../../../assets/icons/arrow-left.svg";

interface IProps {
  pageNum: number;
}

const PrevBtn: React.FC<IProps> = ({ pageNum }) => {
  return (
    <Link href={`http://localhost:3000/shop/${pageNum - 1}`}>
      <a
        className="text-lg font-bold rounded-full px-3 py-3 bg-dullBlue 
      hover:bg-dullPink transition-colors mr-5"
      >
        <img src={arrowLeft.src} alt="Next btn" className="w-7" />
      </a>
    </Link>
  );
};

export default PrevBtn;
