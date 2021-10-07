import {Switch, Route, BrowserRouter} from 'react-router-dom';
import AppRoute from '../../const';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Property from '../property/property';
import NotFound from '../404-not-found/404';

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
        <Route exact path={AppRoute.Favorites}>
          <Favorites />
        </Route>
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
