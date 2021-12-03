import React, {Component} from 'react';
import Players from './players';
import axios from 'axios';

class Display extends Component {

    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    ReloadData(){
        axios.get('http://localhost:4000/api/players')
        .then((response)=>{
            this.setState({club: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/players')
        .then((response)=>{
            this.setState({club: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    state = {
        club: []            
    }
    render(){
        return(
        <div>
            <h1>Player Stats Database</h1>
            <Players team={this.state.club} ReloadData={this.ReloadData}></Players>
        </div>
        );
    }
}
export default Display;