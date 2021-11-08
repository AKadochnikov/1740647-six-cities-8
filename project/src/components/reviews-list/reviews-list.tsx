import {Comments} from '../../types/types';
import ReviewItem from '../review-item/review-item';
import {COMMENTS_LIMIT, START} from '../../const';

type ReviewsListProps = {
  comments: Comments
}

function ReviewsList (props: ReviewsListProps): JSX.Element {
  const {comments} = props;
  let readyComments = comments;
  if (comments.length > COMMENTS_LIMIT) {
    const count = comments.length - COMMENTS_LIMIT;
    readyComments = comments.splice(START, count);
  }
  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {readyComments.map((comment) => (
          <ReviewItem key={comment.id} commentItem={comment}/>
        ))}
      </ul>
    </>
  );
}

export default ReviewsList;
