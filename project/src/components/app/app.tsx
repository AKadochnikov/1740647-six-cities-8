import {connect, ConnectedProps} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Property from '../property/property';
import NotFound from '../404-not-found/404';
import PrivateRoute from '../private-route/private-route';
import {Offers} from '../../types/types';
import Loading from '../loading/loading';
import {isCheckedAuth} from '../../utils';
import {State} from '../../types/state';
import {getAuthorizationStatus} from '../../store/authorization/selectors';
import {getIsDataLoading} from '../../store/data/selectors';

type AppProps = {
  offers: Offers;
}

const mapStateToProps = (state: State) => ({
  authorizationStatus: getAuthorizationStatus(state),
  isDataLoaded: getIsDataLoading(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & AppProps;

function App (props: ConnectedComponentProps): JSX.Element {
  const {offers, isDataLoaded, authorizationStatus} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Loading/>
    );
  }

  return  (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main/>
        </Route>

        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => (
            <Favorites
              offers={offers}
            />)}
        >
        </PrivateRoute>

        <Route exact path={AppRoute.Room}>
          <Property/>
        </Route>

        <Route exact path={AppRoute.NotFound}>
          <NotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}
export {App};
export default connector(App);
