import React, { Component } from 'react'

export default class FormControl extends Component {
    constructor(props){
        super(props);
        this.state={
            studentName:'',
            thanhPho:''
        }
    }
    handleChange = (ev) =>{
        ev.preventDefault();
        let name=ev.target.name
        let value=ev.target.value
        this.setState({
            [name]:value
        })
      }
      handleSubmit = (event) => {
        event.preventDefault();
        console.log('================');
        console.log(this.state);
        console.log('================');

        this.props.onSubmit(this.state);
    }
  render() {
    return (
      <div className="alert alert-primary">
        <form>
            <label>Họ và tên :</label>
            <input name='studentName' value={this.state.studentName} onChange={this.handleChange}  />
            <button onClick={this.handleSubmit}>Submit</button>
            <hr />
            <label>Thành phố :</label>
            <select name='thanhPho' value={this.state.thanhPho} onChange={this.handleChange} >
                <option value={"HN1"}>Hà Nội 1</option> 
                <option value={"HN2"}>Hà Nội 2</option> 
                <option value={"HN3"}>Hà Nội 3</option> 
                <option value={"HN4"}>Hà Nội 4</option> 
            </select>
            <hr />
        </form>
      </div>
    )
  }
}
