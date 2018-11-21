import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InputSearch from "./components/inputSearch"
import DataTable from "./components/dataTable"
import Form from "./components/form"

class Main extends React.Component{
    constructor() {
        super();
        this.state = {
            data: [{
                name: 'Computer',
                quantity: 1,
                unitPrice: 1000
            },{
                name: 'Mouse',
                quantity: 2,
                unitPrice: 500
            }],
            value: ''
        }

        this.onAdd = this.onAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleSearch = this.handleSearch.bind(this)
    }

    onAdd(values) {
        const data = this.state.data;
        data.push(values)
        this.setState({
            data: data
        })
    }
    handleRemove(index){
        const data = this.state.data;
        data.splice(index,1);
        this.setState({data: data})
    }
   
    handleSearch(e){
        const data = this.state.data;
        this.setState({value: e.target.value});
        data.filter(e => {return this.state.value});
        this.setState({
            data: data
        })
    }
    render(){
        return(
            <>
                <h1>Table</h1>
                <InputSearch onClick={event=>{this.handleSearch()}} value = {this.state.value}/>
                <Form onSubmit={this.onAdd}/>
                <DataTable onClick = {event=>{this.handleRemove()}}  data={this.state.data} />
            </>
        )
    }
}
ReactDOM.render(<Main />, document.getElementById('root'));
