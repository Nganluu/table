import React, { Component } from 'react';
import './App.css';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {input : ''};
    this.inputTextSearch = React.createRef();

    this.search = this.search.bind(this)
  }

  search() {
    this.setState(() => ({
      input: this.inputTextSearch.current.value
    }))
  }

  render(){
    return(
      <div>
        <input ref={this.inputTextSearch} id={'textSearch'} type="search"/>
        <button onClick={this.search}>search</button><br/>
        <h1>{this.state.input}</h1>

        <table style={{width: '100%', border: '1px solid black'}}>
          <thead>
            <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Search;
