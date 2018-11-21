import React, { Component } from 'react'

class Form extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            quantity: 0,
            unitPrice: 0,
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onNameChange = this.onNameChange.bind(this)
        this.onQuantityChange = this.onQuantityChange.bind(this)
        this.onUnitPriceChange = this.onUnitPriceChange.bind(this)
    }

    onNameChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    onQuantityChange(event) {
        this.setState({
            quantity: event.target.value
        })
    }

    onUnitPriceChange(event) {
        this.setState({
            unitPrice: event.target.value
        })
    }

    onSubmit() {
        this.props.onSubmit(this.state)
    }

  render() {
    return (
      <div>
        <label>Name</label>
        <input onChange={this.onNameChange} value={this.state.name} />
        <br/>
        <label>Quantity</label>
        <input onChange={this.onQuantityChange} value={this.state.quantity} />
        <br/>
        <label>UnitPrice</label>
        <input onChange={this.onUnitPriceChange} value={this.state.unitPrice} />
        <br/>
        <button onClick={this.onSubmit}>Add</button>
      </div>
    )
  }
}
export default Form;