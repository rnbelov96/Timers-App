import { uuid } from 'uuidv4';
import {
  CREATETIMER,
  UPDATECURRENTDATE,
  DELETETIMER,
} from '../actions/actionsTypes';

const initialState = {
  timers: [
    {
      name: 'New Year in',
      endDate: 1609448400000,
      id: uuid(),
    },
  ],
  currentDate: Date.now(),
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATETIMER:
      return {
        ...state,
        timers: [
          ...state.timers,
          {
            name: action.payload.name,
            endDate: action.payload.endDate,
            id: uuid(),
          },
        ],
      };

    case UPDATECURRENTDATE:
      return {
        ...state,
        currentDate: Date.now(),
      };

    case DELETETIMER:
      return {
        ...state,
        timers: state.timers.filter(el => el.id !== action.payload),
      };

    default:
      return state;
  }
}
