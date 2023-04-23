import React from 'react';

type State = {
  count: number
}

class State1 extends React.Component<Readonly<any>, State> {
  state = {
    count: 0
  }

  addCount1 = () => {
    // 🟢调用setstate 会触发render,即使没有真的改变state的值
    this.setState({
      count: 0
    })
  }

  addCount2 = () => {
    // 🔴state置为null不会出发render
    this.setState(null)
  }


  render() {
    console.log('render');
    return (
      <div>
        <p>count: {this.state.count}</p>
        <button onClick={this.addCount1}>add1</button>
        <button onClick={this.addCount2}>add2</button>
      </div>
    );
  }
}

export default State1;