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
   * 在原生事件，setTimeout, setInterval, addEventListener 中能够以同步的方式打印出最新值
   * 
   * 🟢🟢
   * <div onClick={this.handleClick}></div>
   * handleClick不是原生事件，
   * React并不是将click事件绑定到了div的真实DOM上，而是在document处监听了所有的事件，当事件发生并且冒泡到document处的时候，React将事件内容封装并交由真正的处理函数运行。这样的方式不仅仅减少了内存的消耗，还能在组件挂载销毁时统一订阅和移除事件。
   * 除此之外，冒泡到document上的事件也不是原生的浏览器事件，而是由react自己实现的合成事件（SyntheticEvent）。因此如果不想要是事件冒泡的话应该调用event.preventDefault()方法，而不是调用event.stopProppagation()方法。
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