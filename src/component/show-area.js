import React, { Component } from 'react';

class ShowArea extends Component {
  render() {
    const { routesData } = this.props;
    console.log(routesData[0]);
    return (
      <div className="show-area">
        <ul className="routes-left">
          {
            routesData.slice(0, 8).map((rd, i) => (
              <li key={i.toString()}>
                <span className="route">{rd.ffrom} <i /> {rd.fto}</span>
                <span className="time">{rd.dtime.split('-').slice(1).join('.')}</span>
                <span className="price"><span className="rmb">¥</span>{rd.price}</span>
              </li>
            ))
          }
        </ul>
        <div className="line" />
        <ul className="routes-left">
          {
            routesData.slice(8).map((rd, i) => (
              <li key={0 + i.toString()}>
                <span className="route">{rd.ffrom} <i /> {rd.fto}</span>
                <span className="time">{rd.dtime.split('-').slice(1).join('.')}</span>
                <span className="price"><span className="rmb">¥</span>{rd.price}</span>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default ShowArea;
