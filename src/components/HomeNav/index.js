import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classnames.bind(styles);

export const propTypes = {
  className: PropTypes.string,
  navIcons: PropTypes.array,
  handleNavgiation: PropTypes.func
};

const HomeNav = props => {
  const { navIcons, handleNavgiation } = props;
  return (
    <div className={cx('home-nav')}>
      <div className={cx('home-nav__icons')}>
        {navIcons.map((icon, index) => (
          <i
            className={cx('material-icons', 'icon', {
              'icon--active': icon.isActive
            })}
            key={index}
            onClick={e => handleNavgiation(e, icon.type)}
          >
            {icon.type}
          </i>
        ))}
      </div>
      <span className={cx('home-nav__text')}>POMODORO</span>
    </div>
  );
};

HomeNav.propTypes = propTypes;
export default HomeNav;
