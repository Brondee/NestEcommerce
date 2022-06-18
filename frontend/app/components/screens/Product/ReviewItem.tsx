import React from "react";
import { IReviewForProduct } from "../../../shared/interfaces/products.interface";
import Avatar from "../../../assets/images/avatar.png";

interface IProps {
  review: IReviewForProduct;
}

const ReviewItem: React.FC<IProps> = ({ review }) => {
  const { id, text, createdAt, user } = review;
  return (
    <article
      className="w-7/12 px-14 py-12 border-6 border-black rounded-3xl 
    my-4"
    >
      <div className="w-6/12 flex justify-start items-center">
        <img src={Avatar.src} alt="avatar" />
        <p className="font-bold text-2xl ml-4">{user.name}</p>
        <p className="text-base font-bold ml-5">{createdAt}</p>
      </div>
      <p className="text-lg font-semibold font-openSans mt-7">{text}</p>
    </article>
  );
};

export default ReviewItem;
