import React, { Component } from "react";
import Display from "./display/display";
import Buttons from "./buttons/buttons";
import "./calculator.scss";
export default class calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shownValue: 0,
      currentOperation: "",
      firstValue: 0,
      onhold: false,
      opDone: false,
      middleOp: false,
    };
  }
  add = (x, y) => {
    return x + y;
  };
  sub = (x, y) => {
    return x - y;
  };
  mul = (x, y) => {
    return x * y;
  };
  div = (x, y) => {
    return x / y;
  };

  clear = () => {
    this.setState({
      shownValue: 0,
      currentOperation: "",
      firstValue: 0,
      onhold: false,
      opDone: false,
      middleOp: false,
    });
  };
  percentage = () => {
    this.setState((prvState) => {
      return { shownValue: (prvState.shownValue /= 100) };
    });
  };
  equal = () => {
    if (this.state.firstValue !== 0) {
      this.setState((prvState) => {
        let temp = this.state.currentOperation;
        return {
          shownValue: this[`${temp}`](
            prvState.firstValue,
            Number(prvState.shownValue)
          ),
          onhold: false,
          opDone: true,
        };
      });
    }
  };

  clickedNum = (e) => {
    let temp = e.target.innerText;

    if (
      this.state.shownValue === 0 ||
      this.state.opDone ||
      this.state.middleOp
    ) {
      this.setState({
        shownValue: Number(temp),
        opDone: false,
        middleOp: false,
      });
    } else {
      this.setState((prvState) => {
        return { shownValue: Number(prvState.shownValue + temp) };
      });
    }
  };

  clickedOp = (e) => {
    if (!this.state.onhold) {
      let temp = Number(this.state.shownValue);
      this.setState({
        firstValue: temp,
        currentOperation: `${e.target.id}`,
      });
    }
    this.setState({ onhold: true, middleOp: true });
  };

  render() {
    console.log(this.state);
    return (
      <div className="calculator">
        <Display value={this.state.shownValue}></Display>
        <Buttons
          clickedNum={this.clickedNum}
          clickedOp={this.clickedOp}
          equal={this.equal}
          clear={this.clear}
        ></Buttons>
      </div>
    );
  }
}
