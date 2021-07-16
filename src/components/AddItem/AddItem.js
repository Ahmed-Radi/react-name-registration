import React, { Component} from 'react';
import '../../index.css'
import './AddItem.css'
class AddItems extends Component {

    state = {
        name: '',
        age:''
    }
    handelChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault(); //stop refresh
        // console.log(this.state)
        if(e.target.name.value === '' && e.target.age.value === ''){
            return false;
        }else{
            this.props.addItem(this.state);
            this.setState({
                name: '',
                age:''
            })
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handelSubmit}>
                    <input type="text" placeholder="Enter Name" id="name" onChange={this.handelChange} value={this.state.name} />
                    <input type="number" placeholder="Enter Age" id="age" onChange={this.handelChange} value={this.state.age} />
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}

export default AddItems;