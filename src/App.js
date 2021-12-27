import React, { Component } from 'react';
import './App.css';
import Score from './Components/Score';
import Solution from './Components/Solution';
import Letters from './Components/Letters'
import EndGame from './Components/EndGame';

class App extends Component {

    constructor(){
      super()
      this.state ={
        score:100,
        solution:{
          secret:"CALM",
          hint:"Your ideal mood coding."
        },
        letterStatus : this.generateLetterStatuses()
      }
    }
    generateLetterStatuses() {
      let letterStatus = {}
      for (let i = 65; i <= 90; i++) {
        letterStatus[String.fromCharCode(i)] = false
      }
      return letterStatus
    }
    selectLetter = (letter) => {
      let temp = {...this.state.letterStatus}
      temp[letter] = true
      this.setState({letterStatus : temp})
      
      let newScore = this.state.score
      if (this.state.solution.secret.includes(letter)) {
        newScore += 5
      } else {
        newScore -= 20
      }
      this.setState({score: newScore})

    }
    checkEndGame = () => {
      if(this.state.score <= 0)
        return 0
      if(this.foundAllLetters())
        return 1
      return -1
    }

    foundAllLetters = ()=>{
      let flag = true
      Object.entries(this.state.solution.secret).forEach((key) => {
        if(this.state.letterStatus[key[1]]===false) 
          flag = false
      })
      return flag 
    }
  render() {
    let win = this.checkEndGame()
    return (
      <div>
        {(win >= 0) ? <EndGame win={win} solution={this.state.solution} /> 
        : <div>
          <Score score={this.state.score}/>
          <Solution solution={this.state.solution} letters={this.state.letterStatus} />
          <div>Available Letters</div>
          <Letters selectLetter={this.selectLetter} letters={this.state.letterStatus} />
        </div>
        }
        </div>

    )
  }
}

export default App;
