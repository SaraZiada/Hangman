import React, { Component } from 'react';
import Letter from './Letter';
class Letters extends Component {
    isSelected(letter){
        return this.props.letters[letter]
    }
    render(){
        return(
            <div>
                {Object.keys(this.props.letters).map((key) => <Letter key={key} letter={key} selectLetter={this.props.selectLetter} isSelected={this.isSelected(key)} />)}
            </div>
        );
    }
}
export default Letters;