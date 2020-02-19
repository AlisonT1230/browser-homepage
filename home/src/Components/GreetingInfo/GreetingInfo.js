import React, { Component } from 'react';
import './GreetingInfo.css';
import 'font-awesome/css/font-awesome.min.css'

function getCurrentTime() {
    var now = new Date();
    var hour = now.getHours();
    var amOrPm = "am";

    if(hour > 12) {
      hour -= 12;
      amOrPm = "pm";
    }
    
    return hour + ":" + now.getMinutes() + amOrPm;
}

class GreetingInfo extends Component {
    render() {
      return (
        <div className="GreetingInfo">
          <h1>Test Greeting</h1>
          <h2>It is {getCurrentTime()}.</h2>
          <div className="Location">
            <i className="fa fa-map-marker"></i>
            <p className="LocationName">Toronto</p>
          </div>
        </div>
      )
    }
}

export default GreetingInfo;