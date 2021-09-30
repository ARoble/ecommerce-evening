import { MdStar } from "react-icons/md";
import { useState } from "react";
import { toast } from "react-toastify";
import { createReview } from "../Services/API";

function ReviewForm({ productId }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("");

  function saveReview() {
    //code
    createReview({
      title,
      rating,
      review,
      user: "612d09a74ddc9e02faee2c3c",
      product: productId,
    })
      .then(() => toast.success("Thanks for the review"))
      .catch((e) => console.log(e));
  }

  return (
    <div className="review-form">
      <h3>Add a new review</h3>
      <div className="flex add-review">
        <input
          type="text"
          Placeholder="Review Title"
          className="input"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
          <MdStar
            className={rating >= 1 ? "review-star star" : "review-star"}
            onClick={() => setRating(1)}
          />
          <MdStar
            className={rating >= 2 ? "review-star star" : "review-star"}
            onClick={() => setRating(2)}
          />
          <MdStar
            className={rating >= 3 ? "review-star star" : "review-star"}
            onClick={() => setRating(3)}
          />
          <MdStar
            className={rating >= 4 ? "review-star star" : "review-star"}
            onClick={() => setRating(4)}
          />
          <MdStar
            className={rating >= 5 ? "review-star star" : "review-star"}
            onClick={() => setRating(5)}
          />
        </div>
        <textarea
          placeholder="Review"
          rows="4"
          onChange={(e) => setReview(e.target.value)}
        />
        <button className="btn-review hover" onClick={() => saveReview()}>
          Submit Review
        </button>
      </div>
    </div>
  );
}

export default ReviewForm;
