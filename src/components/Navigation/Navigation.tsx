import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes';
import styles from './Navigation.module.css';

const activeStyle = {
  color: '#ffcc00',
  borderBottom: '3px solid #ffcc00',
};

const mobileActiveStyle = {
  color: '#ffcc00',
};

type NavigationPropTypes = {
  mobile?: boolean;
};

const Navigation = ({ mobile }: NavigationPropTypes): JSX.Element => (
  <nav>
    <ul className={mobile ? styles.navListMobile : styles.navList}>
      <li className={mobile ? styles.navListItemMobile : styles.navListItem}>
        <NavLink
          exact
          to={routes.CATALOGUE_PAGE.path}
          activeStyle={mobile ? mobileActiveStyle : activeStyle}
          className={mobile ? styles.navLinkMobile : styles.navLink}
        >
          Продукция
        </NavLink>
      </li>
      <li className={mobile ? styles.navListItemMobile : styles.navListItem}>
        <NavLink
          to={routes.TERMS_PAGE.path}
          activeStyle={mobile ? mobileActiveStyle : activeStyle}
          className={mobile ? styles.navLinkMobile : styles.navLink}
        >
          Доставка и оплата
        </NavLink>
      </li>
      <li className={mobile ? styles.navListItemMobile : styles.navListItem}>
        <NavLink
          to={routes.CONTACTS_PAGE.path}
          activeStyle={mobile ? mobileActiveStyle : activeStyle}
          className={mobile ? styles.navLinkMobile : styles.navLink}
        >
          Контакты
        </NavLink>
      </li>
      <li className={mobile ? styles.navListItemMobile : styles.navListItem}>
        <NavLink
          to={routes.ARTICLES_PAGE.path}
          activeStyle={mobile ? mobileActiveStyle : activeStyle}
          className={mobile ? styles.navLinkMobile : styles.navLink}
        >
          Статьи
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
