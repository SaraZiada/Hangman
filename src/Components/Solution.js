import React, { Component } from 'react';
import Letter from './Letter';
class Solution extends Component {

    generateSecret(secret){
        let arr =[]
        for(let i=0;i<secret.length;i++){
            this.props.letters[secret[i]] ?
                arr.push(<Letter key={i}letter={secret[i]} isSelected={true} />) :
                arr.push(<Letter key={i} letter="_ " isSelected={false} />)
        }
        return arr;
    }
    render(){
        return(
            <div>
                {this.generateSecret(this.props.solution.secret)}
                <div>
                    <em>{this.props.solution.hint}</em>
                </div>
            </div>
        );
    }
}
export default Solution;