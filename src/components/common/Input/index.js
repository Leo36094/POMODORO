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
  width: PropTypes.string
};

export const defaultProps = {
  placeholder: 'ADD A NEW Mission…',
  inputSize: 'regular',
};

function Input(props) {
  const { placeholder, inputSize, inputType, suffix, width } = props;

  return (
    <div className={cx('input-container')} style={{width}} data-input-type={inputType}>
      <input
        className={cx('input')}
        type="text"
        data-input-size={inputSize}

        placeholder={placeholder}
      />
      <div className={cx('input__suffix')}>{suffix}</div>
    </div>
  );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
