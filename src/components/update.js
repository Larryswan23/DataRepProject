import React, {Component} from 'react';
import axios from 'axios';

class Update extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeGoals = this.onChangeGoals.bind(this);
        this.onChangePasses = this.onChangePasses.bind(this);
        this.state = {
            Name: '',
            Goals: '',
            Passes: ''
        }
    }
    componentDidMount(){
        axios.get('http://localhost:4000/api/players/'+ this.props.match.params.id)
        .then((response)=>{
            this.setState({
                Name:response.data.Name,
                Goals:response.data.Goals,
                Passes:response.data.Passes,
                _id:response.data._id
            })
        })
        .catch();
    }

    handleSubmit(event) {
        console.log("Name: " +this.state.Name+
        " Goals: " + this.state.Goals +
        "Passes: " + this.state.Passes);

        const NewPlayer = {
            Name: this.state.Name,
            Goals: this.state.Goals,
            Passes: this.state.Passes
        }

        axios.put('http://localhost:4000/api/players/' + this.state._id, NewPlayer)
        .then((response)=>{console.log(response)})
        .catch();
        

        event.preventDefault();
        this.setState({
            Name:'',
            Goals:'',
            Passes:''
        });
    }

    onChangeName(event) {
        this.setState({
            Name: event.target.value
        })
    }
    onChangeGoals(event) {
        this.setState({
            Goals: event.target.value
        })
    }
    onChangePasses(event){
        this.setState({
            Passes: event.target.value
        })
    }
    render(){
        return(
        <div>
             <h1>Update Players details Below.</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Add Full Player Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Goals scored: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Goals}
                            onChange={this.onChangeGoals}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Passes completed: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Passes}
                            onChange={this.onChangePasses}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Edit Player "
                            className="btn btn-primary"></input>
                    </div>
                </form>
        </div>
        );
    }
}
export default Update;