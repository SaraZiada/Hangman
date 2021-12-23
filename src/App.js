import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff() {
    return(
        "Companies"
    );
  }

  getMorningGreeting() {
    return(
      "Good Morning"
    )
  }

  getEveningGreeting() {
    return(
      "Good Evening"
    )
  }

  showCompany(name, revenue) {
    return (
      <div class={name}>{name} makes {revenue} every year</div>
    )
  }

  getClassName(temperature) {
    
    if(temperature < 15){
      return ("freezing")
    }else if(temperature > 15 && temperature < 30){
      return ("fair")
    }else{
      return ("hell-scape")
    }
    
  }

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]
    let time = new Date().getHours();

    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
            <h1>Stuff method return: {this.getStuff()}</h1>
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            <h2>
            {{time}>12 ? this.getMorningGreeting() : this.getEveningGreeting()}
          </h2>
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {[<p>{this.getMorningGreeting()}</p>,<p>{this.getEveningGreeting()}</p>,<p>Some Text</p>]}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {companies.map(c => this.showCompany(c.name,c.revenue))}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {<div id='weatherBox' className={this.getClassName(10)}></div>}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
