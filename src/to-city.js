import React, { Component } from 'react';
import cn from 'classnames';

class Tocity extends Component {
  handleToCity = (i) => {
    const { onChange, toCityList } = this.props;
    onChange(toCityList[i]);
  }

  render() {
    const { toCityList, toCity } = this.props;
    const index = toCityList.indexOf(toCity);
    return (
      <ul className="to-city">
        {
          toCityList.map((c, i) => (
            <li className={cn({active: index === i})} key={i.toString()} onClick={() => this.handleToCity(i)} >{c}</li>
          ))
        }
      </ul>
    );
  }
}

export default Tocity;
