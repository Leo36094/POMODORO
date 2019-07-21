import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classnames.bind(styles);

export const propTypes = {
  isActive: PropTypes.bool,
  isReset: PropTypes.bool,
  seconds: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  toggleTimer: PropTypes.func,
  resetTimer: PropTypes.func,
  initialSeconds: PropTypes.number,
  timerType: PropTypes.string,
  className: PropTypes.string,
};
export const defaultProps = {
  isActive: true
};

const TimerSVG = props => {
  const {
    isActive,
    isReset,
    seconds: propSeconds,
    toggleTimer,
    resetTimer,
    initialSeconds,
    timerType,
    className
  } = props;
  const [intervalDegree, setIntervalDegree] = useState(0);
  const [radius, setRadius] = useState(75)
  const eachDegree = (360 - 57) / Number(initialSeconds);
  useEffect(() => {
    let interval = null;
    // Reset 時 重置 svg
    if(window.innerWidth > 500) setRadius(260)
    if (isReset) {
      setIntervalDegree(0);
    }
    // 清除 interval 的情境
    if (isActive) {
      if (propSeconds < 1) {
        setIntervalDegree(0);
        clearInterval(interval);
        return;
      }
      interval = setInterval(() => {
        setIntervalDegree(intervalDegree => intervalDegree + eachDegree);
      }, 10000);
    } else if (!isActive && propSeconds !== 0) {
      clearInterval(interval);
    } else clearInterval(interval);
    return () => clearInterval(interval);
  }, [
    eachDegree,
    intervalDegree,
    isActive,
    isReset,
    propSeconds,
    setIntervalDegree,
    radius
  ]);

  return (
    <div
      className={cx('timer-svg', className)}
      data-is-playing={isActive}
      data-timer-type={timerType}
    >
      <div className={cx('timer-svg__inner')}>
        <svg
          // width="540"
          // height="540"
          className={cx('timer-svg__animation', { active: isActive })}
        >
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            style={
              isActive ? { strokeDashoffset: `${57 + intervalDegree}%` } : {}
            }
          />
        </svg>
        <div className={cx('play-icon')}>
          <i className={cx('material-icons')} onClick={toggleTimer}>
            {isActive ? 'pause_circle_filled' : 'play_circle_filled_white'}
          </i>
        </div>
        <span className={cx('timer-svg__reset')} onClick={resetTimer} />
      </div>
    </div>
  );
};

TimerSVG.propTypes = propTypes;
TimerSVG.defaultProps = defaultProps;

export default TimerSVG;
