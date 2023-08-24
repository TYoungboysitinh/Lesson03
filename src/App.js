import React, { Component } from 'react'
import ButtonHandle from './Component/ButtonHandle'
import FormInput from './Component/FormInput';
import FormSelect from './Component/FormSelect';
import FormControl from './Component/FormControl';
import ListKey from './Component/ListKey';
import ListStudent from './Component/ListStudent';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      company:"Devmaster",
      students:[
        {name:"Thái 1",age:"12"},
        {name:"Thái 2",age:"13"},
        {name:"Thái 3",age:"14"},
        {name:"Thái 4",age:"15"},
        {name:"Thái 5",age:"15"},
        {name:"Thái 6",age:"15"},
        {name:"Thái 7",age:"15"},
        {name:"Thái 8",age:"15"},
        {name:"Thái 9",age:"15"},
        {name:"Thái 10",age:"15"},
      ]
    }
  }
  handleChangeData = (data) =>{
    this.setState({
      company:data,
    })
  }
  handleSubmitForm = (data) =>{
    console.log('================');
    console.log("App :",data);
    console.log('================');
  }
  render() {
    return (
      <div className="container border mt-5">
          <h1>Demo - Event - {this.state.company} </h1>
          <ButtonHandle onChangeData={this.handleChangeData} />

          <div className="alert alert-success">
            <FormInput />
            <FormSelect />
            <FormControl onSubmit = {this.handleSubmitForm} />
          </div>

          <div>
            <ListKey />
            <ListStudent renderStudents={this.state.students} />
          </div>
      </div>
    )
  }
}