import * as React from "react";
import ReactDOM from "react-dom";
const styles = require("./style.scss");

export interface MyComponentProps {}

export default class MyComponent extends React.Component<MyComponentProps, {}> {
  render() {
    return (
      <div className={"test"}>
        <h1>Hello World!</h1>
        <p className="btn btn-primary">Foo to the barz</p>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("root"));
