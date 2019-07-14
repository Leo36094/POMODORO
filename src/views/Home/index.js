import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.module.scss';

// components
import CountdownTimer from '../../components/common/CountdownTimer';
import TimerSvg from '../../components/common/TimerSvg';
import Input from '../../components/common/Input';
import List from '../../components/common/List';
import Checkbox from '../../components/common/Checkbox';
import HomeNav from '../../components/common/HomeNav'

const cx = classnames.bind(styles);

export const propTypes = {
  className: PropTypes.string
  // homeType: PropTypes.string
};

export const defaultProps = {
  // homeType: 'default'
};

const Home = props => {
  const { className } = props;

  let initialSeconds = useRef(100);

  const initialTodoList = [
    { task: 'FIRST THING TO DO TODAY', id: 1 },
    { task: 'Second THING TO DO TODAY', id: 2 },
    { task: 'Third THING TO DO TODAY', id: 3 },
    { task: 'Fourth THING TO DO TODAY', id: 4 },
    { task: 'Third THING TO DO TODAY', id: 5 },
    { task: 'Fourth THING TO DO TODAY', id: 6 }
  ];
  // countdown time / counting by seconds
  const [seconds, setSeconds] = useState(initialSeconds.current);
  const [fakeList, setFakeList] = useState(initialTodoList);
  const [homeType, setHomeType] = useState('default');
  const [breakTime, setBreakTime] = useState(true);
  const [isReset, setIsReset] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [checkStatus, setCheckStatus] = useState(false);
  const [tomatos, setTomatos] = useState([]);

  useEffect(() => {
    let interval = null;
    if (seconds < 1) {
      setBreakTime(!breakTime);
      if (breakTime) {
        initialSeconds.current = 10;
        setHomeType('primary');
        setSeconds(initialSeconds.current);
        setTomatos([...tomatos, 1]);
        document.querySelector('body').dataset.homeType = 'primary';
      } else {
        initialSeconds.current = 5;
        setHomeType('default');
        setSeconds(initialSeconds.current);
        document.querySelector('body').dataset.homeType = 'default';
      }
    }
    if (isActive) {
      if (seconds < 1) {
        setIsActive(false);
        // setBreakTime(!breakTime);
        clearInterval(interval);
        return;
      }
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [breakTime, isActive, seconds, tomatos]);

  const toggleTimer = () => {
    setIsActive(!isActive);
    setIsReset(false);
  };

  const resetTimer = () => {
    setSeconds(initialSeconds.current);
    setIsReset(true);
    setTomatos([])
    setIsActive(false);
  };

  const handleCheck = () => {
    setCheckStatus(!checkStatus);
    setFakeList(fakeList.slice(1));
    setCheckStatus(false);
  };

  return (
    <div className={cx('home', className)} data-home-type={homeType}>
      <div className={cx('home-left')}>
        <div className={cx('home-input')}>
          <Input suffix={<i className="material-icons">add</i>} inputType={homeType} />
        </div>
        <div className={cx('home-list', 'home-timer-display')}>
          <List.Item
            prefix={
              <Checkbox
                onClick={handleCheck}
                checkedStatus={checkStatus}
                className={cx('home-timer-checkbox')}
                size="large"
                style={{ marginRight: '16px' }}
              />
            }
          >
            <List.Item.Meta
              title={
                <span style={{ fontSize: '24px' }}>
                  {fakeList.length > 1
                    ? fakeList[0].task
                    : 'Congrats! You completed all.'}
                </span>
              }
              description={tomatos.map((item,index) => (
                <i className={cx('material-icons', 'home-dot')} key={index}>
                  fiber_manual_record
                </i>
              ))}
            />
          </List.Item>
          <CountdownTimer
            startTimeInSeconds={seconds}
            toggleTimer={toggleTimer}
            textType={homeType}
            reset={resetTimer}
          />
        </div>
        <div className={cx('home-list')}>
          <List>
            <div className={cx('home-list-container')}>
              {fakeList.slice(1).map(item => (
                <List.Item
                  hasBorder
                  key={item.id}
                  prefix={
                    <i
                      className="material-icons"
                      style={{ marginRight: '8px' }}
                    >
                      radio_button_unchecked
                    </i>
                  }
                  suffix={
                    <i
                      className={cx('material-icons')}
                      style={{ width: '24px' }}
                    >
                      play_circle_outline
                    </i>
                  }
                >
                  {item.task}
                </List.Item>
              ))}
            </div>
          </List>
          <p className={cx('home-list__text')}>More</p>
        </div>
      </div>
      <div className={cx('home-right')}>
        <TimerSvg
          seconds={seconds}
          initialSeconds={initialSeconds.current}
          isActive={isActive}
          isReset={isReset}
          toggleTimer={toggleTimer}
          resetTimer={resetTimer}
          timerType={homeType}
        />
      </div>
      <HomeNav/>
    </div>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
