const initialState = {
  fromCity: '其他城市',
  fromMonth: '全部月份',
  toCity: '热门'
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  const { fromCity, fromMonth, toCity } = payload || {};
  switch (type) {
    case 'CHANGE_FROM_CITY':
      return {
        ...state,
        fromCity
      };
    case 'CHANGE_FROM_MONTH':
      return {
        ...state,
        fromMonth
      };
    case 'CHANGE_TO_CITY':
      return {
        ...state,
        toCity
      };
    default:
      return state;
  }
}