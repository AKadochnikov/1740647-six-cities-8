import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {memo} from 'react';
import {ThunkAppDispatch} from '../../types/action';
import {changeCity} from '../../store/actions';
import {getRandomCity} from '../../utils';
import {connect, ConnectedProps} from 'react-redux';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onClick(){
    dispatch(changeCity(getRandomCity()));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function NotLogged(props: ConnectedComponentProps): JSX.Element {
  const {onClick} = props;
  return (
    <li className="header__nav-item user">
      <Link onClick={onClick} className="header__nav-link header__nav-link--profile" to={AppRoute.SignIn} >
        <div className="header__avatar-wrapper user__avatar-wrapper"/>
        <span className="header__login">Sign in</span>
      </Link>
    </li>
  );
}

export default connector(memo(NotLogged));

