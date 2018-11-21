import React, { Component } from 'react'

class DataTable extends Component {
    constructor(){
        super();
        this.onRemove = this.onRemove.bind(this)
    }
    onRemove(){
        this.props.onClick();
    }
  render() {
    return (
      <div>
        <table style={{width: '100%', border: '1px solid black'}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>UnitPrice</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {this.props.data.map((item,index) => <tr key={item.name} style={{border: '1px solid black'}}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.unitPrice}</td>
                    <td>
                        <button onClick={this.onRemove}>Remove</button>
                    </td>
                </tr>)}
            </tbody>
        </table>
      </div>
    )
  }
}
export default  DataTable