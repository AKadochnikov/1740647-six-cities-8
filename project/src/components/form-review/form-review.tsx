import {useState, ChangeEvent, FormEvent, useRef, MouseEvent} from 'react';
import {ThunkAppDispatch} from '../../types/action';
import {postCommentAction} from '../../store/api-actions';
import {connect, ConnectedProps} from 'react-redux';
import {PostComment} from '../../types/types';

const MIN_CHARACTERS = 50;

type FormReviewProps = {
  id: number;
}

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(postData: PostComment) {
    dispatch(postCommentAction(postData));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux & FormReviewProps;

function FormReview(props: ConnectedComponentProps):JSX.Element {
  const {id, onSubmit} = props;
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleRatingChange = (evt: MouseEvent<HTMLInputElement>) => {
    const value = Number(evt.currentTarget.value);
    setRating(value);
  };

  const handleTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit({
      comment: comment,
      rating: rating,
      id: id,
    });
    setRating(0);
    setComment('');
    formRef.current?.reset();
  };

  const isDisabled = comment.length < MIN_CHARACTERS || !rating;

  return (
    <form
      className="reviews__form form" action="#" method="post"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input onClick={handleRatingChange} className="form__rating-input visually-hidden" name="rating" defaultValue={5} id="5-stars" type="radio" />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input onClick={handleRatingChange} className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input onClick={handleRatingChange} className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input onClick={handleRatingChange} className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input onClick={handleRatingChange} className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea
        onChange={handleTextAreaChange}
        className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={''}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default connector(FormReview);
