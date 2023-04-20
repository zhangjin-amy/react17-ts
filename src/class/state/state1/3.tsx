import React from 'react';

type State = {
  count: number
}

/**
 * 批量修改未生效
 */
class State3 extends React.Component<Readonly<any>, State> {
  state = {
    count: 0
  }

  // 批量修改不生效
  addCount1 = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count); // 0
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count); // 0

    // 页面显示的count为1
  }


  // 函数更新时，批量更新生效了
  addCount2 = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
    console.log(this.state.count); // 0
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
    console.log(this.state.count); // 0
    // 页面显示的count为2

  }

  // 在setTimeout中的批量更新也生效了
  addCount3 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count); // 1
      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count); // 2
    })
  }






  render() {
    return (
      <div>
        <p>count: {this.state.count}</p>
        <button onClick={this.addCount1}>add1</button>
        <button onClick={this.addCount2}>add2</button>
        <button onClick={this.addCount3}>add3</button>
      </div>
    );
  }
}

export default State3;