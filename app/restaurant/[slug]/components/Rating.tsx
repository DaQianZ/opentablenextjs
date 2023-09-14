import { Review } from "@prisma/client";
import { calcultateReviewRatingAverage } from "../../../../public/utils/calculateReviewRatingAverage";
import Starts from "../../../components/Starts";

export default function Rating({ reviews }: { reviews: Review[] }) {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <Starts reviews={reviews} />
        <p className="text-reg ml-3">
          {calcultateReviewRatingAverage(reviews).toFixed(1)}
        </p>
      </div>
      <div>
        <p className="text-reg ml-4">
          {reviews.length} Review{reviews.length === 1 ? "" : "s"}
        </p>
      </div>
    </div>
  );
}
