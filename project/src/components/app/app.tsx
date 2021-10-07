import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Property from '../property/property';
import NotFound from '../404-not-found/404';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  countStay: number;
}

function App ({countStay}: AppProps): JSX.Element {
  return  (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main countStay={countStay} />
        </Route>

        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>

        <Route exact path={AppRoute.Room}>
          <Property />
        </Route>

        <Route>
          <NotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
