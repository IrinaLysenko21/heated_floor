import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '../routes/routes';
import Header from './Header/Header';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path={routes.CATALOGUE_PAGE.path}
          component={routes.CATALOGUE_PAGE.component}
        />
        <Route
          path={routes.CATEGORY_PAGE.path}
          component={routes.CATEGORY_PAGE.component}
        />
        <Route
          path={routes.TERMS_PAGE.path}
          component={routes.TERMS_PAGE.component}
        />
        <Route
          path={routes.CONTACTS_PAGE.path}
          component={routes.CONTACTS_PAGE.component}
        />
        <Route
          path={routes.ARTICLES_PAGE.path}
          component={routes.ARTICLES_PAGE.component}
        />
        <Route
          path={routes.CART_PAGE.path}
          component={routes.CART_PAGE.component}
        />
        <Redirect to={routes.CATALOGUE_PAGE.path} />
      </Switch>
    </div>
  );
};

export default App;
