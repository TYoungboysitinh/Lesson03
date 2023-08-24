import React, { Component } from 'react'

export default class FormInput extends Component {
    constructor(props){
        super(props);
        this.state={
            studentName: "Đinh Ngọc Thái"
        }
    }

    handleChange = (ev) => {
        this.setState({
            studentName:ev.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('================');
        console.log(this.state.studentName);
        console.log('================');
    }
  render() {
    return (
      <div>
        <h2>Xử lý dữ liệu với input</h2>
        <form>
            <label>Họ và tên :</label>
            <input value={this.state.studentName} onChange={this.handleChange} />
            <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
