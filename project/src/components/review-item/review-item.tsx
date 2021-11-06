import {Comment} from '../../types/types';
import {getRating, humanizeDate} from '../../utils';

type ReviewItemProps = {
  commentItem: Comment;
}

function ReviewItem(props: ReviewItemProps): JSX.Element {
  const {commentItem} = props;
  const {rating, comment, user, date} = commentItem;
  const currentDate = new Date(date);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getRating(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={currentDate.toISOString()}>{humanizeDate(currentDate)}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
