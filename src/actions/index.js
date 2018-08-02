import { paramsMap } from '../constants';

// 异步action，getState可以获取reducer的fromCity等变量
const getRoutesList = () => (dispatch, getState) => {
  const { fromCity, fromMonth, toCity } = getState();
  const hostname = 'http://localhost:5000';
  const url = `${hostname}?from=${fromCity}&to=${paramsMap[toCity]}&month=${paramsMap[fromMonth]}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      dispatch({type: 'GET_ROUTES_DATA', payload: {routesData: data.data}});
    })
    .catch(err => console.log(err));
};

// 同步action
const changeFromCity = city => ({ type: 'CHANGE_FROM_CITY', payload: {fromCity: city} });
const changeFromMonth = month => ({ type: 'CHANGE_FROM_MONTH', payload: {fromMonth: month} });
const changeToCity = city => ({ type: 'CHANGE_TO_CITY', payload: {toCity: city} });

export { getRoutesList, changeFromCity, changeFromMonth, changeToCity };
