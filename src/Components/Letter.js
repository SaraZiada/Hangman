import React, { Component } from 'react';
class Letter extends Component {
    selectLetter = () => {
        this.props.selectLetter(this.props.letter)
    }

    render(){

        return(
            (this.props.isSelected) 
            ? <span className="SelectedLetter">{this.props.letter}</span> 
            : <span className="NotSelectedLetter" onClick={this.selectLetter}>{this.props.letter}</span>
        );
    }
}
export default Letter;