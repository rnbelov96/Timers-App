import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTimer } from '../redux/actions/actions';

function formatDate(time) {
  return time < 10 ? `0${time}` : time;
}

function Timers({ timers, currentDate, onDelete }) {
  return (
    <div className="timers">
      {timers.map(el => {
        let timesLeft = el.endDate - currentDate;
        if (timesLeft > 0) {
          const daysLeft = formatDate(
            Math.floor(timesLeft / (1000 * 60 * 60 * 24)),
          );
          timesLeft -= daysLeft * (1000 * 60 * 60 * 24);
          const hoursLeft = formatDate(
            Math.floor(timesLeft / (1000 * 60 * 60)),
          );
          timesLeft -= hoursLeft * (1000 * 60 * 60);
          const minutesLeft = formatDate(Math.floor(timesLeft / (1000 * 60)));
          timesLeft -= minutesLeft * (1000 * 60);
          const secondsLeft = formatDate(Math.floor(timesLeft / 1000));
          return (
            <div key={el.id} className="timers__item">
              <div className="timers__timerName">{el.name}</div>
              <div className="timers__countdown">
                <div className="timers__countdownDigits">{`${daysLeft}:${hoursLeft}:${minutesLeft}:${secondsLeft}`}</div>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(el.id)}
                  type="button"
                >
                  Удалить
                </button>
              </div>
            </div>
          );
        }
        return (
          <div key={el.id} className="timers__item">
            <div className="timers__timerName">{el.name}</div>
            <div className="timers__countdown">
              <div className="timers__complete-text">Done</div>
              <button className="btn btn-danger" onClick={() => onDelete(el.id)} type="button">
                Удалить
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Timers.propTypes = {
  timers: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentDate: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    timers: state.timersReducer.timers,
    currentDate: state.timersReducer.currentDate,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDelete: id => dispatch(deleteTimer(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timers);
