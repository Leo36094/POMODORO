import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

export const propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  checkedStatus: PropTypes.bool
};

export const defaultProps = {
  type: 'radio',
  size: 'large',
  checkedStatus: false
};

const Checkbox = props => {
  const { type, size, style, onClick, checkedStatus } = props;
  return (
    <label
      className={cx('checkbox-container')}
      data-checkbox-size={size}
      style={style}
    >
      <input
        className={cx('checkbox')}
        type="checkbox"
        checked={checkedStatus}
        onClick={() => onClick(checkedStatus)}
        readOnly
      />
      <span
        className={cx('checkbox-checkmark')}
        data-checkbox-type={type}
        data-checkbox-size={size}
      />
    </label>
  );
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
