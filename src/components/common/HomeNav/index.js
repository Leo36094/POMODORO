import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classnames.bind(styles);

export const propTypes = {
  className: PropTypes.string
  // homeType: PropTypes.string
};

export const defaultProps = {
  // homeType: 'default'
};

const HomeNav = props => {
  return (
    <div className={cx('home-nav')}>
      <div className={cx('home-nav__icons')}>
        <i className={cx("material-icons", 'icon')}>toc</i>
        <i className={cx("material-icons", 'icon')}>insert_chart_outlined</i>
        <i className={cx("material-icons", 'icon')}>library_music</i>
      </div>
      <span className={cx('home-nav__text')}>POMODORO</span>
    </div>
  );
};

HomeNav.propTypes = propTypes;
export default HomeNav;
