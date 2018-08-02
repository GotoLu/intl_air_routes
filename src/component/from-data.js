import React, { Component } from 'react';
import cn from 'classnames';

class FromData extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }

  handlEnter = () => {
    this.setState({
      show: true
    });
  }

  handleLeave = () => {
    this.setState({
      show: false
    });
  }

  handleSelect = (i) => {
    const { onChange, fromDataList } = this.props;
    this.setState({
      show: false
    });
    onChange(fromDataList[i]);
  }

  render() {
    const { fromData, fromDataList } = this.props;
    const { show } = this.state;
    return (
      <div
        className={cn({'form': true, 'show-border': show})}
        onMouseEnter={this.handlEnter}
        onMouseLeave={this.handleLeave}
      >
        {fromData}
        <i className={cn({'iconfont triangle-down': true, rotate: show })} />
        <ul className={cn({show: show})}>
          {
            fromDataList.map((li, i) => (
              <li key={i} onClick={() => this.handleSelect(i)}>{li}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default FromData;
