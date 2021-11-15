import {Offers} from '../../types/types';
import {State} from '../../types/state';
import {getOffers} from '../../store/data/selectors';
import {getAuthorizationStatus} from '../../store/authorization/selectors';
import {connect, ConnectedProps} from 'react-redux';
import {ThunkAppDispatch} from '../../types/action';
import {postFavoriteAction} from '../../store/api-actions';
import {AppRoute, AuthorizationStatus, Category} from '../../const';
import {useHistory} from 'react-router-dom';
import {PROPERTY_SIZE_BUTTON} from '../../const';

type FavoriteButtonProps = {
  isFavorite: boolean;
  id: number;
  offers: Offers | null;
  category: string;
}

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  favoritesHandler(id: number, favoriteStatus: number, offers: Offers | null, baseOffers: Offers, category: string) {
    dispatch(postFavoriteAction(id, favoriteStatus, offers, baseOffers, category));
  },
});

const mapStateToProps = (state: State) => ({
  baseOffers: getOffers(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FavoriteButtonProps;

function FavoriteButton (props: ConnectedComponentProps): JSX.Element {
  const {isFavorite, id, offers, baseOffers, authorizationStatus, category, favoritesHandler} = props;

  const history = useHistory();

  const onClickHandler = () => {
    if(authorizationStatus !== AuthorizationStatus.Auth){
      return history.push(AppRoute.SignIn);
    }
    favoritesHandler(id, Number(!isFavorite), offers, baseOffers, category);
  };

  const placeCard = `place-card__bookmark-button ${isFavorite? 'place-card__bookmark-button--active': ''} button`;
  const propertyCard = `property__bookmark-button ${isFavorite? 'property__bookmark-button--active' : ''} button`;
  const isRoom = category === Category.Room;

  return (
    <button onClick={() => onClickHandler()} className={isRoom? propertyCard: placeCard} type="button">
      <svg className={isRoom? 'property__bookmark-icon': 'place-card__bookmark-icon'} width={isRoom? PROPERTY_SIZE_BUTTON.width : 18} height={isRoom? PROPERTY_SIZE_BUTTON.height : 19}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}

export {FavoriteButton};
export default connector(FavoriteButton);
