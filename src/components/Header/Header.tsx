import React from 'react';
import Media from 'react-media';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { Theme, withStyles, createStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Navigation from '../../components/Navigation/Navigation';
import routes from '../../routes/routes';
import config from '../../config/config';
import styles from './Header.module.css';
import logo from '../../assets/img/logo_white.png';
import { NONAME } from 'dns';

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '0',
    left: '0',
    padding: '70px 15px',
    width: '70%',
    height: '100%',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: 0,
  },
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

const Header: React.FC = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Media queries={config.GLOBAL_MEDIA_QUERIES}>
      {matches => (
        <div className={styles.container}>
          {(matches.extra_small || matches.small || matches.medium) && (
            <button
              className={styles.menuBtn}
              type="button"
              onClick={openModal}
            >
              <DehazeIcon className={styles.burgerIcon} fontSize="large" />
            </button>
          )}
          {modalIsOpen && (
            <Modal
              isOpen={modalIsOpen}
              // onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={modalStyles}
              contentLabel="Example Modal"
            >
              <Navigation mobile />
            </Modal>
          )}
          <Link to={routes.CATALOGUE_PAGE.path} className={styles.logo_link}>
            <img src={logo} alt="logo" width="100px" />
          </Link>
          <div className={styles.navWrapper}>
            {(matches.large || matches.extra_large) && <Navigation />}
            <Link className={styles.cartLink} to={routes.CART_PAGE.path}>
              <StyledBadge badgeContent={1} color="secondary">
                <ShoppingCartIcon style={{ fontSize: 40, color: '#00f8ae' }} />
              </StyledBadge>
            </Link>
          </div>
        </div>
      )}
    </Media>
  );
};

export default Header;
