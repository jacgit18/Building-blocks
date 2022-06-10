import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
// passing methods as props

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paramName: "parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  // step 1 define method
  greetParent(childName) {
    alert(`Hello ${this.state.paramName} from ${childName}`);
  }

  render() {
    return (
      <>
        {/*step 2 adds greetHandler to props with value of greetParent method*/}
        <ChildComponent greetHandler={this.greetParent} />
      </>
    );
  }
}

export default ParentComponent;
