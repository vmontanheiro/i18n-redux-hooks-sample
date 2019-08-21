import { handleActions } from 'redux-actions';
import { getBrowserLanguage } from '../../services/utils';
import { RESET_APP_STORE, SET_APP } from '../actions';

const initialState = {
  language: getBrowserLanguage(),
  timezoneSTR: `UTC`,
};

const App = handleActions(
  {
    [RESET_APP_STORE]: () => initialState,
    [SET_APP]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  initialState,
);

export default App;
