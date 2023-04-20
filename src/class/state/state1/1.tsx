import React from 'react';

type State = {
  count: number
}

class State1 extends React.Component<Readonly<any>, State> {
  state = {
    count: 0
  }

  addCount1 = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count); // 0
  }


  addCount2 = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));

    console.log(this.state.count); // 0
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

export default State1;