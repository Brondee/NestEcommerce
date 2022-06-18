import React from "react";
import Link from "next/link";

interface IProps {
  value: string;
  link: string;
}

const PinkLinkBtn: React.FC<IProps> = ({ value, link }) => {
  return (
    <Link href={link}>
      <a
        className="bg-dullPink rounded-3xl border-4 border-black text-2xl font-bold
        px-16 py-5 cursor-pointer hover:bg-dullBlue transition-colors"
      >
        {value}
      </a>
    </Link>
  );
};
export default PinkLinkBtn;
