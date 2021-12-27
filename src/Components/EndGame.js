import React, { Component } from 'react';
class EndGame extends Component {
    render(){
        return(
            <div>
               {this.props.win === 1 ? "Congratiolation" : "Alas! the word was:" + this.props.solution.secret}
            </div>
        );
    }
}
export default EndGame;