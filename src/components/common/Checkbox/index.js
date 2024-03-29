import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

export const propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
  checkboxId: PropTypes.number
};

export const defaultProps = {
  type: 'radio',
  size: 'large',
  checkedStatus: false
};


const Checkbox = props => {
  const { type, size, style, className, onChange, checkboxId, checkboxStatus } = props;
  return (
    <label
      className={cx('checkbox-container', className)}
      data-checkbox-size={size}
      style={style}
    >
      <input
        className={cx('checkbox')}
        type="checkbox"
        data-checkbox-id={checkboxId}
        onChange={(e) => onChange(e)}
        readOnly
        checked={checkboxStatus}
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
