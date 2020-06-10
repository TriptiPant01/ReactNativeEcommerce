import {ADDTOCART} from './Actions';
import _ from 'lodash';

const INITIAL_VALUE = {
  selectedItemsList: {},
  selectedItems: {},
  totalCount: 0,
};

const newDataToDisplay = (state, action) => {
  const newValue = {...action.payload.item, count: action.payload.count};
  var groubBYCode = _.groupBy(state.selectedItemsList, 'code');

  const getCode = newValue['code'];

  if (!groubBYCode[getCode] || groubBYCode[getCode] == undefined) {
    return {...state.selectedItems, [getCode]: newValue};
  } else {
    return {...state.selectedItems, [getCode]: newValue};
  }
};
const newItemsList = (state, action) => {
  const newValue = {...action.payload.item, count: action.payload.count};

  var groubBYCode = _.groupBy(state.selectedItemsList, 'code');
  const getCode = newValue['code'];
  const idList = {...state.selectedItemsList, [getCode]: newValue.count};
  const idListnewId = Object.values(idList).reduce((i, a) => a + parseInt(i));
  return idList;
};

const calculatingTotalCount = (state, action) => {
  const newValue = {...action.payload.item, count: action.payload.count};

  var groubBYCode = _.groupBy(state.selectedItemsList, 'code');
  const getCode = newValue['code'];
  const idList = {...state.selectedItemsList, [getCode]: newValue.count};
  const idListnewId = Object.values(idList).reduce((i, a) => a + parseInt(i));
  return idListnewId;
};
export default function(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case ADDTOCART: {
      return {
        ...state,
        selectedItems: newDataToDisplay(state, action),
        selectedItemsList: newItemsList(state, action),
        totalCount: calculatingTotalCount(state, action),
      };
    }
    default:
      return state;
  }
}
