import { MdStar } from "react-icons/md";
function Review({ review }) {
  return (
    <div className="review">
      <div>
        <div className="flex review-user">
          <img src="./../avatar.jpg" alt="avatar" />
          <h4>{review.user.username}</h4>
        </div>
        <div className="flex review-heading">
          <div>
            <MdStar
              className={
                review.rating >= 1 ? "review-star star" : "review-star"
              }
            />
            <MdStar
              className={
                review.rating >= 2 ? "review-star star" : "review-star"
              }
            />
            <MdStar
              className={
                review.rating >= 3 ? "review-star star" : "review-star"
              }
            />
            <MdStar
              className={
                review.rating >= 4 ? "review-star star" : "review-star"
              }
            />
            <MdStar
              className={
                review.rating >= 5 ? "review-star star" : "review-star"
              }
            />
          </div>
          <b>{review.title}</b>
        </div>
        {review.review}
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default Review;
