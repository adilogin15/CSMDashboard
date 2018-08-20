import React, { Component } from 'react';
import ProgressBar from "bootstrap-progress-bar";

class Progress extends React.Component {
    render() {
      return (
        <div>
          <span class={this.props.classMin}>{this.props.minval}</span>
        <ProgressBar width={this.props.width} active message={this.props.val}></ProgressBar>
         <span class={this.props.classMax}>{this.props.Maxval}</span>
        </div>
      );
    }
  }
  
  export default Progress;
  

  