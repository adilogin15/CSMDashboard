import React from 'react';


export default class Header extends React.Component {
    
    render() {
        return (
            <div className="card">
                  <div className="card-content">
                    <p className="overall">{this.props.title}</p>
                    {this.props.children}
                  </div>
                </div>
  
        )
    }
}