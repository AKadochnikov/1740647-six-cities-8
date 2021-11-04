import {Link} from 'react-router-dom';
import {ThunkAppDispatch} from '../../types/action';
import {AppRoute} from '../../const';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {logoutAction} from '../../store/api-actions';
import {getEmail} from '../../store/authorization/selectors';

const mapStateToProps = (state: State) => ({
  email: getEmail(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogout() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function Logged(props: ConnectedComponentProps): JSX.Element {
  const {email, onLogout}= props;

  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{email}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to={AppRoute.SignIn}>
          <span onClick={onLogout} className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}

export {Logged};
export default connector(Logged);
