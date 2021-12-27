import React, { Component } from 'react';
class Score extends Component {
    render() {
        let name;
        let score = this.props.score
        if(score >= 80){
            name = "high-score"
        }else if(score >= 50){
            name = "medium-score"
        }else{
            name = "low-score"
        }
        return ( 
        <div className={name}>Score: {this.props.score}</div>
        );
    }
}
export default Score;