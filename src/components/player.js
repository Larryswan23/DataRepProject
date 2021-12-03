import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// some comments
class Player extends Component {
    constructor(){
        super();
        this.DeletePlayer = this.DeletePlayer.bind(this);
    }

    DeletePlayer(){
        console.log('Delete: '+this.props.player._id);

        axios.delete('http://localhost:4000/api/players/'+this.props.player._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();

    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.player.Name}</Card.Header>
                    <Card.Body>
                        <blockquote> 
                            <p>Goals Scored</p>
                        {this.props.player.Goals}       
                            <footer>
                            <p>Passes Completed</p>
                                {this.props.player.Passes}
                            </footer>
                        </blockquote>
                    </Card.Body>
<Link to={"/update/" +this.props.player._id} className="btn btn-primary">Edit</Link>
<Button variant="danger" onClick={this.DeletePlayer}>Remove Player</Button>
                </Card>
            </div>
        );
    }
}
export default Player;