import React, { Component } from 'react'

class InputSearch extends Component {
  constructor(){
    super();
    this.state={
      name: '',
      quantity: 0,
      unitPrice: 0,
      value: ''
    };
    this.onSearch = this.onSearch.bind(this)
  }
  onSearch(e){
    this.props.onClick()
  }
  render() {
    return (
      <div>
        <input onChange = {this.onSearch}  />
        <h1>{this.state.value}</h1>
        <button>Search</button>
      </div>
    )
  }
}

export default InputSearch