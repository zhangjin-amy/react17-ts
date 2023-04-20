import React from 'react';

type State = {
  count: number
}

/**
 * setState callback回调函数中可以拿到最新的state值
 */

class State2 extends React.Component<Readonly<any>, State> {
  state = {
    count: 0
  }

  addCount1 = () => {
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count); // 1
    })
   
  }

  addCount2 = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }), () => {
      console.log(this.state.count); // 1
    });
  }

  render() {
    return (
      <div>
        <p>count: {this.state.count}</p>
        <button onClick={this.addCount1}>add1</button>
        <button onClick={this.addCount2}>add2</button>
      </div>
    );
  }
}

export default State2;