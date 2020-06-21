import CataloguePage from '../pages/CataloguePage/CataloguePage';
import CategoryPage from '../pages/CategoryPage/CategoryPage';
import TermsPage from '../pages/TermsPage/TermsPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import ArticlesPage from '../pages/ArticlesPage/ArticlesPage';
import CartPage from '../pages/CartPage/CartPage';

export default {
  CATALOGUE_PAGE: {
    path: '/',
    component: CataloguePage,
  },
  CATEGORY_PAGE: {
    path: '/catalogue/:categoryName',
    component: CategoryPage,
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
