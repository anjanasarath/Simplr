import { combineReducers } from 'redux';
import reducer1 from './reducer1';

const aws = combineReducers({
  "red1": reducer1,
    "red2": reducer1,
      "red3": reducer1,
        "red4": reducer1,
          "red5": reducer1,
            "red6": reducer1
});

export default aws;
