import React, { useEffect, useState } from "react";

interface IProps {
  numToShow: number;
  setNumToShow: React.Dispatch<React.SetStateAction<number>>;
  reviewsLength: number;
}

const LoadMoreBtn: React.FC<IProps> = ({
  numToShow,
  setNumToShow,
  reviewsLength,
}) => {
  const [isShown, setIsShown] = useState<boolean>(true);

  useEffect(() => {
    if (numToShow >= reviewsLength) {
      setIsShown(false);
    }
  }, []);

  const loadMore = () => {
    setNumToShow(numToShow + numToShow);
    if (numToShow >= reviewsLength - 1) {
      setIsShown(false);
    }
  };

  return (
    <button
      className={
        isShown
          ? "font-semibold text-xl py-4 px-10 rounded-2xl border-4 border-black bg-dullPink mt-10 cursor-pointer hover:bg-dullBlue transition-colors"
          : "hidden"
      }
      onClick={loadMore}
    >
      Показать еще
    </button>
  );
};

export default LoadMoreBtn;
