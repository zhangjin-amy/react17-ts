import React from 'react';

type State = {
  count: number
}

/**
 * 批量修改未生效
 */
class State4 extends React.Component<Readonly<any>, State> {
  state = {
    count: 0
  }

  ref3 = React.createRef<HTMLButtonElement>();

  // 批量修改不生效
  addCount1 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
    });
    console.log('addCount1 count:', this.state.count); // 0
  }

  addCount2 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      });
      // 在setTimeout内部打印，结果是最新的值
      console.log('setTimeout addCount2 count:', this.state.count); // 1
    });
    
  }

  componentDidMount(): void {
    this.ref3.current?.addEventListener('click', () => {
      this.setState({
        count: this.state.count + 1
      })
      console.log('ref3 addEventListener count:', this.state.count); // 1
    });
  }

  /**
   * 在合成事件，setTimeout, setInterval, addEventListener 中能够以同步的方式打印出最新值
   *
   */


  render() {
    return (
      <div>
        <p>count: {this.state.count}</p>
        <button onClick={this.addCount1}>add1</button>
        <button onClick={this.addCount2}>add2</button>
        <button ref={this.ref3}>add3</button>
      </div>
    );
  }
}

export default State4;