import {connect, ConnectedProps} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Property from '../property/property';
import NotFound from '../404-not-found/404';
import PrivateRoute from '../private-route/private-route';
import Loading from '../loading/loading';
import {State} from '../../types/state';
import {getIsDataLoading} from '../../store/data/selectors';

const mapStateToProps = (state: State) => ({
  isDataLoaded: getIsDataLoading(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function App (props: ConnectedComponentProps): JSX.Element {
  const {isDataLoaded} = props;

  return  (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          {isDataLoaded? <Main/> :<Loading/> }
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>
        <PrivateRoute exact path={AppRoute.Favorites} render={() => (<Favorites/>)}>
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <Property/>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export {App};
export default connector(App);
