// need to bind events the this keyword works

import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: "GoodBye",
    });
    // message exist only in consructor and this is global
    // so when doing this.setState the intial message'doesnt
    // exist in global scope so undefined because your reasigning
    // to something that doesnt exist that is why you need to
    // bind event handler which can be done in multiple places
    //     console.log("Clicked Class bind", this)
  }

  // for bind without constructor
  // clickHandler = () => {
  //     this.setState({
  //                 message: 'GoodBye'
  //             })
  // }

  render() {
    return (
      <>
        <div> {this.state.message} </div>
        {/* this works but will generate a brand new event handler on each render ok for small apps not optimal as you sscale up */}
        {/* <button onClick = {this.clickHandler.bind(this)}> Click me binded</button> */}
        {/* ok but performance issues  but good for passing params*/}
        {/* <button onClick = {() => this.clickHandler() }> Click me binded</button>  */}
        {/* bind in consructor  or assign clickhandler as arrow func in class*/}
        <button onClick={this.clickHandler}> Click me binded</button>
      </>
    );
  }
}

export default EventBind;
