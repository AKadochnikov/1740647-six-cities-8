import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Property from '../property/property';
import NotFound from '../404-not-found/404';
import PrivateRoute from '../private-route/private-route';
import {offer} from '../../types/types';

type AppProps = {
  offers: offer[];
}

function App ({offers}: AppProps): JSX.Element {
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
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>

        <Route exact path={AppRoute.Room}>
          <Property
            offers={offers}
          />
        </Route>

        <Route>
          <NotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
