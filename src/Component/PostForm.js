import React, { Component } from "react";
import axios from "axios";
class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
      topic: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
		alert(`${this.state.topic}`)

      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <>
            <label>User</label>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
          </>

          <>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </>

          <>
            <label>Body</label>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </>

          <>
            <label>Topics</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
              <option value="react"> React</option>
              <option value="angular"> Angular</option>
              <option value="vue"> Vue</option>
            </select>
          </>

          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default PostForm;
