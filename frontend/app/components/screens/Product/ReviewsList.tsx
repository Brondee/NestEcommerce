import React from "react";
import { IReviewForProduct } from "../../../shared/interfaces/products.interface";
import ReviewItem from "./ReviewItem";

interface IProps {
  reviews: IReviewForProduct[];
}

const ReviewsList: React.FC<IProps> = ({ reviews }) => {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      {reviews.length ? (
        reviews.map((review) => {
          return <ReviewItem key={review.id} review={review} />;
        })
      ) : (
        <h2 className="text-3xl font-bold mt-10">
          Еще никто не оставил отзывов(
        </h2>
      )}
    </div>
  );
};

export default ReviewsList;
