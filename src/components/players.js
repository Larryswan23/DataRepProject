import React, { Component } from 'react';
import Player from './player';

class Players extends Component
{
    render(){
        return this.props.team.map((clubman)=>{
            return <Player player={clubman} key={clubman._id} ReloadData={this.props.ReloadData}></Player>
        })
    }
}
export default Players;