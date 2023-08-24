import React, { Component } from 'react'

export default class FormSelect extends Component {
    constructor(props){
        super(props);
        this.state={
            thanhPho:''
        }
    }
    handleChange = (ev) => {
        this.setState({
            thanhPho:ev.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('================');
        console.log(this.state.thanhPho);
        console.log('================');
    }
  render() {
    return (
      <div className="my-2">
        <h2>Xử lý dữ liệu với Select :</h2>
        <form onChange={this.handleSubmit}>
            <select value={this.state.thanhPho} onChange={this.handleChange}>
                <option value={"HN1"}>Hà Nội 1</option> 
                <option value={"HN2"}>Hà Nội 2</option> 
                <option value={"HN3"}>Hà Nội 3</option> 
                <option value={"HN4"}>Hà Nội 4</option> 
            </select>
        </form>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}
