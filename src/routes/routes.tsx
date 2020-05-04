import HomePage from '../pages/HomePage/HomePage';
import CataloguePage from '../pages/CataloguePage/CataloguePage';
import TermsPage from '../pages/TermsPage/TermsPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import ArticlesPage from '../pages/ArticlesPage/ArticlesPage';
import CartPage from '../pages/CartPage/CartPage';

export default {
  HOME_PAGE: {
    path: '/',
    component: HomePage,
  },
  CATALOGUE_PAGE: {
    path: '/catalogue',
    component: CataloguePage,
  },
  TERMS_PAGE: {
    path: '/terms',
    component: TermsPage,
  },
  CONTACTS_PAGE: {
    path: '/contacts',
    component: ContactsPage,
  },
  ARTICLES_PAGE: {
    path: '/articles',
    component: ArticlesPage,
  },
  CART_PAGE: {
    path: '/cart',
    component: CartPage,
  },
};
