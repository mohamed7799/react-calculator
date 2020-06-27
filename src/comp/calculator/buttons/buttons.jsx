import React from "react";
import "./buttons.scss";
export default function buttons(props) {
  return (
    <div className="buttons">
      <div onClick={props.clickedNum} className="btn num-js">
        9
      </div>
      <div onClick={props.clickedNum} className="btn num-js">
        8
      </div>
      <div onClick={props.clickedNum} className="btn num-js">
        7
      </div>
      <div onClick={props.clickedOp} className="btn op-js" id="add">
        +
      </div>
      <div onClick={props.clickedNum} className="btn num-js">
        6
      </div>
      <div onClick={props.clickedNum} className="btn num-js">
        5
      </div>
      <div onClick={props.clickedNum} className="btn num-js">
        4
      </div>
      <div onClick={props.clickedOp} className="btn op-js" id="sub">
        -
      </div>
      <div onClick={props.clickedNum} className="btn num-js">
        3
      </div>
      <div onClick={props.clickedNum} className="btn num-js">
        2
      </div>
      <div onClick={props.clickedNum} className="btn num-js">
        1
      </div>
      <div onClick={props.clickedOp} className="btn op-js" id="mul">
        *
      </div>
      <div onClick={props.clear} className="btn sp-js" id="clear-js">
        C
      </div>
      <div onClick={props.clickedNum} className="btn num-js">
        0
      </div>
      <div onClick={props.equal} className="btn sp-js" id="equal">
        =
      </div>
      <div onClick={props.clickedOp} className="btn op-js" id="div">
        /
      </div>
    </div>
  );
}
