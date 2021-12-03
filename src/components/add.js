import React, { Component } from 'react';
import axios from 'axios';

class Add extends Component {
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
    handleSubmit(event) {
        console.log("Name: " + this.state.Name +
            "Goals: " + this.state.Goals +
            "Passes: " + this.state.Passes);

        const NewPlayer = {
            Name: this.state.Name,
            Goals: this.state.Goals,
            Passes: this.state.Passes
        }
        axios.post('http://localhost:4000/api/players', NewPlayer)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err);
            })

        event.preventDefault();
        this.setState({
            Title: '',
            Goals: '',
            Passes: ''
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
    onChangePasses(event) {
        this.setState({
            Passes: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>Add new Players details Below.</h1>
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
                        <input type="submit" value="Add Player "
                            className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Add;