import React, { Component } from 'react'

export default class ListKey extends Component {
    constructor(props){
        super(props);
        this.state = {
            arr:[12,23,34,45,56,67,78,89]
        }
    }
  render() {
    let elementNum = this.state.arr.map((item,index) => {
        return<>
         <li key={index}>{item}</li>
        </>
    })
    return (
      <div>
        <h2>List Map</h2>
        <hr />
        <ul>
            {elementNum}
        </ul>
      </div>
    )
  }
}
