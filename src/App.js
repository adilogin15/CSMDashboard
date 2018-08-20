import React, { Component } from 'react';
import './App.css';
import Header from "./component/header";
import Container from "./component/card";
import Card from "./component/card";
import ProgressBar from "./component/rangeSlider";
import BarChart from "./component/barChart";
import PieChart from "./component/pieChart";
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <div className="main">
      <Container>
                <Card title="FY19 Overall usage (10%)">
                    <ProgressBar minPercentage='10%' minval="0" width="10%" val="40M" Maxval="100M" maxPercentage='100%' label="40%" classMin="minProgress" classMax="maxProgress" />
                </Card>
                <div className="CTO">
                  <Card title="Contract Type Overall usage">
                  
                      <div className="row">
                        <div className="col-md-3 ib1">
                          <p className="overall cluster">Metered (28%)</p>
                          <ProgressBar minPercentage='10%' minval="0" width="50%" val="40M" Maxval="100M" maxPercentage='100%' label="40%" classMin="minProgress" classMax="maxProgress" />
                
                        </div>
                        <div className="col-md-3 ib2">
                          <p className="overall cluster">UC Flex Annually (28%)</p>
                          <ProgressBar minPercentage='10%' minval="0" width="10%" val="40M" Maxval="100M" maxPercentage='100%' label="40%" classMin="minProgress" classMax="maxProgress" />
                
                        </div>
                        <div className="col-md-3 ib3">
                          <p className="overall cluster">UC Flex Monthly (28%)</p>
                          <ProgressBar minPercentage='10%' minval="0" width="10%" val="40M" Maxval="100M" maxPercentage='100%' label="40%" classMin="minProgress" classMax="maxProgress" />
                
                        </div>
                        <div className="col-md-3 ib4">
                          <p className="overall cluster">UC PAYG (28%)</p>
                          <ProgressBar minPercentage='10%' minval="0" width="10%" val="40M" Maxval="100M" maxPercentage='100%' label="40%" classMin="minProgress" classMax="maxProgress" />
                        </div>
                      </div>
                  </Card>
              </div>

               <Card title="TBD">
               <div className="btn-group pull-left">
                <button type="button" class="btn btn-default">Quater</button>
                <button type="button" class="btn btn-default">Month</button>
                <button type="button" class="btn btn-default">Week</button>
              </div>
               <BarChart/>
               <PieChart/>
                </Card>

              
              </Container>
          
        </div>   
      </div>
    );
  }
}

export default App;
