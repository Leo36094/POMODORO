import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classnames.bind(styles);

export const propTypes = {
  startTimeInSeconds: PropTypes.number,
  textType: PropTypes.string,
}

const CountdownTimer = props => {
  const { startTimeInSeconds, textType } = props;
  const displayminutes = Math.floor(startTimeInSeconds / 60);
  const displaySeconds = Math.floor(startTimeInSeconds % 60);

  const formatTime = time => {
    if (time < 10) return `0${time}`;
    else return time;
  };

  return (
    <div className={cx('countdown-timer')} data-countdown-type={textType}>
      <div className={cx('countdown-timer__display')}>
        {formatTime(displayminutes)}:{formatTime(displaySeconds)}
      </div>
    </div>
  );
};

CountdownTimer.propTypes = propTypes;

export default CountdownTimer;
