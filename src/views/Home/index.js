import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './style.module.scss';

// components
import HomeNav from '../../components/HomeNav';
import CountdownTimer from '../../components/common/CountdownTimer';
import TimerSvg from '../../components/common/TimerSvg';
import Input from '../../components/common/Input';
import List from '../../components/common/List';
import Checkbox from '../../components/common/Checkbox';
import Tomatos from '../../components/common/Tomatos';
import beeperAudio from '../../assets/audio/Beeper_Emergency_Call.mp3'

const cx = classnames.bind(styles);

export const propTypes = {
  className: PropTypes.string
};

const Home = props => {
  const { className } = props;
  const enterCode = 13;
  const escCode = 27;
  const audio = new Audio(beeperAudio);
  let workSeonds = 1500;
  let breakSeonds = 300;
  let initialSeconds = useRef(workSeonds);
  let breakTime = useRef(false);

  const initialTodoList = [
    { task: 'FIRST THING TO DO TODAY', id: 1, checked: false },
    { task: 'Second THING TO DO TODAY', id: 2, checked: false },
    { task: 'Third THING TO DO TODAY', id: 3, checked: false }
  ];

  // countdown time / counting by seconds
  const [seconds, setSeconds] = useState(initialSeconds.current);
  const [fakeList, setFakeList] = useState(initialTodoList);
  const [navIcons, setNavIcons] = useState([
    { type: 'toc', isActive: true },
    { type: 'insert_chart_outlined', isActive: false },
    { type: 'library_music', isActive: false }
    // { type: 'bug_report', isActive: false }
  ]);
  const [homeType, setHomeType] = useState('default');
  const [isReset, setIsReset] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [tomatos, setTomatos] = useState([1]);
  const [todoValue, setTodoValue] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(fakeList[0].task);

  useEffect(() => {
    let interval = null;
    // 區隔休息時間和工作時間
    if (seconds < 1) {
      audio.play();
      breakTime.current = !breakTime.current;
      if (breakTime.current) {
        initialSeconds.current = breakSeonds;
        setHomeType('primary');
        setSeconds(initialSeconds.current);
        setTomatos([...tomatos, 1]);
        document.querySelector('body').dataset.homeType = 'primary';
      } else {
        initialSeconds.current = workSeonds;
        setHomeType('default');
        setSeconds(initialSeconds.current);
        document.querySelector('body').dataset.homeType = 'default';
      }
    }
    // 啟動時要觸發倒數
    if (isActive) {
      if (seconds < 1) {
        setIsActive(false);
        clearInterval(interval);
        return;
      }
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [audio, breakSeonds, isActive, seconds, tomatos, workSeonds]);

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
    // 進行完變更 check 狀態後，下方進行動畫將完成事項移除。
    delayRemove(500).then(() => {
      const unfinishedList = fakeList
        .filter(item => Number(item.id) !== Number(completedTaskId))
        .map(item => {
          item.checked = false;
          return item;
        });
      setFakeList(unfinishedList);
      setEditValue(unfinishedList[0].task);
      setIsEdit(false);
      setSeconds(initialSeconds.current);
      setIsReset(true);
      setTomatos([]);
    });
  };
  const handleNavgiation = (event, icon) => {
    const newIconStaus = navIcons.map(item => {
      item.isActive = false;
      if (item.type === icon) item.isActive = true;
      return item;
    });
    setNavIcons(newIconStaus);
  };
  const changeTask = task => {
    const newOrderList = fakeList.filter(list => list.id !== task.id);
    setFakeList([task, ...newOrderList]);
    resetTimer()
  };
  const addTodo = event => {
    const newTodo = {
      task: event.target.value,
      id: Math.random(),
      checked: false
    };
    setTodoValue(event.target.value);
    if (event.keyCode === enterCode) {
      setFakeList([...fakeList, newTodo]);
      setTodoValue('');
    }
  };
  const editTodo = event => {
    const editItem = {
      task: event.target.value,
      id: fakeList[0].id,
      checked: false
    };
    if (event.keyCode === escCode) setIsEdit(false);
    if (event.keyCode === enterCode) {
      if (!event.target.value) return;
      const editedList = fakeList.filter(item => item.id !== editItem.id);
      setFakeList([editItem, ...editedList]);
      setIsEdit(false);
      setEditValue(fakeList[0].task);
    }
  };

  return (
    <div className={cx('home', className)} data-home-type={homeType}>
      <div className={cx('home-left')}>
        <div className={cx('home-input')}>
          <Input
            suffix={
              <i
                className="material-icons"
                onClick={() => {
                  setFakeList([
                    ...fakeList,
                    { task: todoValue, id: Math.random(), checked: false }
                  ]);
                  setTodoValue('');
                }}
              >
                add
              </i>
            }
            inputType={homeType}
            onKeyDown={event => addTodo(event)}
            value={todoValue}
            onChange={event => setTodoValue(event.target.value)}
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
            }
          >
            <List.Item.Meta
              title={
                // 依據是否為編輯狀態顯示 input 或是 span
                <span
                  className={cx('home-list__title')}
                  onDoubleClick={() => {
                    if (fakeList.length < 1) return;
                    setIsEdit(true);
                  }}
                >
                  {!isEdit ? (
                    fakeList.length > 0 ? (
                      fakeList[0].task
                    ) : (
                      'Congrats! You completed all.'
                    )
                  ) : (
                    <Input
                      placeholder="編輯待辦事項"
                      value={editValue}
                      onChange={event => setEditValue(event.target.value)}
                      onKeyDown={editTodo}
                      inputSize="small"
                      type="text"
                    />
                  )}
                </span>
              }
              description={
                <Tomatos
                  tomatos={tomatos}
                  initialSeconds={initialSeconds.current}
                  isActive={isActive && !breakTime.current}
                  // breakTime={breakTime.current}
                />
              }
            />
          </List.Item>

          <CountdownTimer
            className={cx('home-countdown-timer')}
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
                      className={cx('material-icons', 'home-list__icon')}
                      style={{ width: '24px' }}
                      onClick={() => changeTask(item)}
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
          {fakeList.length > 5 ? (
            <p className={cx('home-list__text')}>More</p>
          ) : (
            ''
          )}
        </div>
        <TimerSvg
          className={cx('home-mobile-timer')}
          seconds={seconds}
          initialSeconds={initialSeconds.current}
          isActive={isActive}
          isReset={isReset}
          toggleTimer={toggleTimer}
          resetTimer={resetTimer}
          timerType={homeType}
        />
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
      <HomeNav className={cx('home-nav')} navIcons={navIcons} handleNavgiation={handleNavgiation} />
    </div>
  );
};

Home.propTypes = propTypes;

export default Home;
