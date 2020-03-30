import {
  CREATETIMER,
  INPUTCHANGE,
  CLEARINPUTS,
  UPDATECURRENTDATE,
  DELETETIMER,
} from './actionsTypes';

export function createTimer(data) {
  return {
    type: CREATETIMER,
    payload: data,
  };
}

export function inputChange(changeData) {
  return {
    type: INPUTCHANGE,
    payload: changeData,
  };
}

export function clearInput() {
  return {
    type: CLEARINPUTS,
  };
}

export function updateCurrentDate() {
  return {
    type: UPDATECURRENTDATE,
  };
}

export function deleteTimer(id) {
  return {
    type: DELETETIMER,
    payload: id,
  };
}
