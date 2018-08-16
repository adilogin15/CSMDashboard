import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidenav">
          <a href="#cd">CD</a>
          <a href="#dashboard">Dashboard</a>
        </div>

        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-md-12">

                <div className="card">
                  <div className="card-content">
                    <p className="overall">FY19 Overall usage (28%)</p>
                    <input type="range" className="slider1" min="0" max="100" step="1" />
                  </div>
                </div>

                <div className="card">
                  <div className="card-content container">
                    <p className="overallc2">Contract Type Overall usage</p>
                    <div className="row">
                      <div className="col-md-3 ib1">
                        <p className="overall">Metered (28%)</p>
                        <input type="range" className="slider2" min="0" max="100" step="1" />
                      </div>
                      <div className="col-md-3 ib2">
                        <p className="overall">UC Flex Annually (28%)</p>
                        <input type="range" className="slider2" min="0" max="100" step="1" />
                      </div>
                      <div className="col-md-3 ib3">
                        <p className="overall">UC Flex Monthly (28%)</p>
                        <input type="range" className="slider2" min="0" max="100" step="1" />
                      </div>
                      <div className="col-md-3 ib4">
                        <p className="overall">UC PAYG (28%)</p>
                        <input type="range" className="slider2" min="0" max="100" step="1" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-content container">
                    <p className="overallc2">TBD</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          
        </div>   
      </div>
    );
  }
}

export default App;
