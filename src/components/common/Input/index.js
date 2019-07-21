import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

// Components

// Style
import styles from './style.module.scss';

// Variables / Functions
const cx = classnames.bind(styles);

export const propTypes = {
  placeholder: PropTypes.string,
  inputSize: PropTypes.string,
  inputType: PropTypes.string,
  suffix: PropTypes.node,
  width: PropTypes.string,
  onKeyDown: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export const defaultProps = {
  placeholder: 'ADD A NEW Mission…',
  inputSize: 'regular',
  onKeyDown: () => ''
};

function Input(props) {
  const {
    placeholder,
    inputSize,
    inputType,
    suffix,
    width,
    onKeyDown,
    onChange,
    value,
    ...restProps
  } = props;

  return (
    <div
      className={cx('input-container')}
      style={{ width }}
      data-input-type={inputType}
    >
      <input
        className={cx('input')}
        type="text"
        value={value}
        data-input-size={inputSize}
        placeholder={placeholder}
        onKeyDown={event => onKeyDown(event)}
        onChange={event => onChange(event)}
        {...restProps}
      />
      <div className={cx('input__suffix')}>{suffix}</div>
    </div>
  );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
