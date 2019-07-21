import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classnames.bind(styles);

export const propTypes = {
  className: PropTypes.string,
  tomatos: PropTypes.array,
  isActive: PropTypes.bool,
  initialSeconds: PropTypes.number,
};

function Tomatos(props) {
  const { className, tomatos, isActive, initialSeconds } = props;

  const [intervalDegree, setIntervalDegree] = useState(0);
  // 38 會滿一個圈
  const eachDegree = Number(38) / Number(initialSeconds);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setIntervalDegree(intervalDegree + eachDegree);
      }, 1000);
    } else {
      setIntervalDegree(0);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [eachDegree, intervalDegree, isActive]);

  return (
    <div className={cx('tomatos', className)}>
      {tomatos.map((tomato, index) => (
        <i key={index} className={cx('material-icons', 'tomatos__finished')}>
          fiber_manual_record
        </i>
      ))}
      {isActive ? (
        <div className={cx('tomatos__outer')}>
          <svg width="10" height="10" className={cx('tomatos__animation')}>
            <circle
              cx="50%"
              cy="50%"
              r="6"
              className={cx('tomatos__in-progress')}
              style={
                isActive ? { strokeDasharray: `${intervalDegree}, 100` } : {}
              }
            />
          </svg>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Tomatos;
