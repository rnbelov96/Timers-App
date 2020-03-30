import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  inputChange,
  createTimer,
  clearInput,
  updateCurrentDate,
} from '../redux/actions/actions';

function Inputs({
  nameInputValue,
  dateInputValue,
  timeInputValue,
  onChange,
  onStart,
  updateDate,
}) {
  useEffect(() => {
    setInterval(() => {
      updateDate();
    }, 1000);
  }, []);
  const createDate = (date, time) => {
    const endDate = new Date(date);
    const timeArr = time.split(':');
    endDate.setHours(+timeArr[0]);
    endDate.setMinutes(+timeArr[1]);
    return endDate;
  };

  return (
    <form
      className="inputs"
      onSubmit={e => {
        e.preventDefault();
        onStart({
          name: nameInputValue,
          endDate: createDate(dateInputValue, timeInputValue),
        });
      }}
    >
      <input
        className="inputs__name form-control"
        placeholder="Enter a countdown timer's name..."
        type="text"
        name="name"
        required
        onChange={e => {
          onChange({
            inputName: e.target.getAttribute('name'),
            value: e.target.value,
          });
        }}
        value={nameInputValue}
      />
      <div className="inputs__dateGroup">
        <input
          className="inputs__date"
          type="date"
          name="date"
          required
          onChange={e => {
            onChange({
              inputName: e.target.getAttribute('name'),
              value: e.target.value,
            });
          }}
          value={dateInputValue}
        />
        <input
          className="inputs__time"
          type="time"
          name="time"
          required
          onChange={e => {
            onChange({
              inputName: e.target.getAttribute('name'),
              value: e.target.value,
            });
          }}
          value={timeInputValue}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Start
      </button>
    </form>
  );
}

Inputs.propTypes = {
  nameInputValue: PropTypes.string.isRequired,
  dateInputValue: PropTypes.string.isRequired,
  timeInputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onStart: PropTypes.func.isRequired,
  updateDate: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    nameInputValue: state.inputsReducer.nameInputValue,
    dateInputValue: state.inputsReducer.dateInputValue,
    timeInputValue: state.inputsReducer.timeInputValue,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: data => dispatch(inputChange(data)),
    onStart: data => {
      dispatch(createTimer(data));
      dispatch(clearInput());
    },
    updateDate: () => dispatch(updateCurrentDate()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);
