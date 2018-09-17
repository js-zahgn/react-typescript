import { combineReducers } from 'redux';

const TotalDataList = (state: Array<any> = [], action: any) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'INIT_DATA_LIST':
      return action.data;
    default:
      return newState;
  }
};

export default combineReducers({
  TotalDataList
});