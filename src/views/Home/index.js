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
import HomeNav from '../../components/common/HomeNav';

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

  let initialSeconds = useRef(5);

  const initialTodoList = [
    { task: 'FIRST THING TO DO TODAY', id: 1, checked: false },
    { task: 'Second THING TO DO TODAY', id: 2, checked: false },
    { task: 'Third THING TO DO TODAY', id: 3, checked: false },
  ];
  // countdown time / counting by seconds
  const [seconds, setSeconds] = useState(initialSeconds.current);
  const [fakeList, setFakeList] = useState(initialTodoList);
  // const [headerList, setHeaderList] = useState(fakeList.slice(0, 1));
  const [homeType, setHomeType] = useState('default');
  const [breakTime, setBreakTime] = useState(true);
  const [isReset, setIsReset] = useState(false);
  const [isActive, setIsActive] = useState(false);
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
    setTomatos([]);
    setIsActive(false);
  };
  const delayRemove = function(millisecond) {
    return new Promise((resolve, rejcet) => {
      setIsActive(false);
      setTimeout(resolve, millisecond);
    });
  };
  const handleCheck = e => {
    const completedTaskId = e.target.dataset.checkboxId;
    const updatedList = fakeList.map(item => {
      if (item.id === completedTaskId) item.checked = true;
      return item;
    });
    setFakeList(updatedList);
    delayRemove(500).then(() => {
      setFakeList(
        fakeList
          .filter(item => Number(item.id) !== Number(completedTaskId))
          .map(item => {
            item.checked = false;
            return item;
          })
      );
      setSeconds(initialSeconds.current);
      setIsReset(true);
      setTomatos([]);
    });
  };

  return (
    <div className={cx('home', className)} data-home-type={homeType}>
      <div className={cx('home-left')}>
        <div className={cx('home-input')}>
          <Input
            suffix={<i className="material-icons">add</i>}
            inputType={homeType}
          />
        </div>
        <div className={cx('home-list', 'home-timer-display')}>
          <List.Item
            key={fakeList.length > 0 ? fakeList[0].id : Math.random()}
            prefix={
              <Checkbox
                checkboxId={
                  fakeList.length > 0 ? fakeList[0].id : Math.random()
                }
                onChange={handleCheck}
                checkedStatus={fakeList.length > 0 ? fakeList[0].checked : true}
                className={cx('home-timer-checkbox', {
                  'home-timer__checkbox--disabled': fakeList.length < 1
                })}
                size="large"
                style={{ marginRight: '16px' }}
              />
            }>
            <List.Item.Meta
              title={
                <span style={{ fontSize: '24px' }}>
                  {fakeList.length > 0
                    ? fakeList[0].task
                    : 'Congrats! You completed all.'}
                </span>
              }
              description={tomatos.map((item, index) => (
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
                    <Checkbox
                      onChange={handleCheck}
                      checkboxId={item.id}
                      size="regular"
                      style={{ marginRight: '6px' }}
                    />
                  }
                  suffix={
                    <i
                      className={cx('material-icons')}
                      style={{ width: '24px' }}>
                      play_circle_outline
                    </i>
                  }>
                  {item.task}
                </List.Item>
              ))}
            </div>
          </List>
          {fakeList.length > 5 ? (
            <p className={cx('home-list__text')}>More</p>
          ) : (
            ''
          )}
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
      <HomeNav />
    </div>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
