import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props) {
        super(props);

        this.state ={
          username: '',
          comment: '',
          topic: ''   

        }

    }

    handleUserChange = (event) =>{
        this.setState({
            username: event.target.value
        })
        console.log(event.target.value)

    }

    handleCommentChange = (event) =>{
        this.setState({
            comment: event.target.value
        })

    }
    

    
    handleTopicChange = (event) =>{
        this.setState({
            topic: event.target.value
        })

    }

    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault();
    }
    

    render() {
        return (
            
            <form onSubmit={this.handleSubmit}>
            <>
                <label>Username</label>
                <input type='text' value={this.state.username} onChange={this.handleUserChange} />
            </>
            <>
                <label>Comments</label>
                <textarea value={this.state.comment} onChange={this.handleCommentChange} />
            </>
            <>
                <label>Topics</label>
                <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value='react'> React</option>
                    <option value='angular'> Angular</option>
                    <option value='vue'> Vue</option>

                </select>
            </>
            <button type='submit'> Submit</button>
            </form>
        );
    }
}





