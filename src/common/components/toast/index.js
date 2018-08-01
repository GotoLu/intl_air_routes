import React, { Component } from 'react';
import cn from 'classnames';

import './index.less';

class Toast extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      offset: Toast.MIDDLE,
      show: false,
      display: ''
    };
  }

  TOP = 'top';
  MIDDLE = 'middle';
  BOTTOM = 'buttom';
  SHORT = 800;
  LONG = 1500;

  show(message, duration, offset) {
    this.setState({ display: 'block' }, () => {
      setTimeout(() => {
        this.setState({ message, offset, show: true }, () => {
          setTimeout(() => this.hide(), duration + 300);
        });
      }, 0);
    });
  }

  hide() {
    this.setState({ show: false }, () => {
      setTimeout(() => this.setState({ display: 'none' }), 300);
    });
  }

  render() {
    const {
      message, offset, show, display
    } = this.state;
    const clz = cn('toast', offset, { show });
    const style = display ? { display } : null;
    return (
      <div className={clz} style={style}>
        {message}
      </div>
    );
  }
}

Toast.TOP = 'top';
Toast.MIDDLE = 'middle';
Toast.BOTTOM = 'buttom';
Toast.SHORT = 800;
Toast.LONG = 1500;

export default Toast;
