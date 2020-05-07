import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Theme, withStyles, createStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import routes from '../../routes/routes';
import styles from './Navbar.module.css';

const activeStyle = {
  color: '#f5963d',
  borderBottom: '3px solid #f5963d',
};

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -3,
      top: 13,
      padding: '0 4px',
    },
  }),
)(Badge);

const Navbar: React.FC = () => (
  <nav className={styles.container}>
    <Link to={routes.HOME_PAGE.path} className={styles.logo_link}>
      <h1 className={styles.logo}>Logo</h1>
    </Link>
    <div className={styles.navWrapper}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to={routes.HOME_PAGE.path}
            exact
            activeStyle={activeStyle}
            className={styles.navList_item}
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.CATALOGUE_PAGE.path}
            activeStyle={activeStyle}
            className={styles.navList_item}
          >
            Каталог
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.TERMS_PAGE.path}
            activeStyle={activeStyle}
            className={styles.navList_item}
          >
            Доставка и оплата
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.CONTACTS_PAGE.path}
            activeStyle={activeStyle}
            className={styles.navList_item}
          >
            Контакты
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.ARTICLES_PAGE.path}
            activeStyle={activeStyle}
            className={`${styles.navList_item} ${styles.articles}`}
          >
            Статьи
          </NavLink>
        </li>
      </ul>

      <Link to={routes.CART_PAGE.path}>
        <StyledBadge badgeContent={1} color="secondary">
          <ShoppingCartIcon style={{ fontSize: 40, color: '#00f8ae' }} />
        </StyledBadge>
      </Link>
    </div>
  </nav>
);

export default Navbar;
