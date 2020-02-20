import React, { Component } from 'react';
import './GreetingInfo.css';
import 'font-awesome/css/font-awesome.min.css'

const greetings = { MORNING: "Good morning.", AFTERNOON: "Good afternoon.", EVENING: "Good evening." };

function getCurrentTime() {
	var now = new Date();
	var hour = now.getHours();
	var amOrPm = "am";

	if (hour > 12) {
		hour -= 12;
		amOrPm = "pm";
	}

	if(now.getMinutes() < 10) {
		return hour + ":0" + now.getMinutes() + amOrPm;	
	}

	return hour + ":" + now.getMinutes() + amOrPm;
}

function getGreeting() {
	var now = new Date();
	var hour = now.getHours();

	if (hour < 5) {
		return greetings.EVENING;
	}
	else if (hour < 13) {
		return greetings.MORNING;
	}
	else if(hour < 18) {
		return greetings.AFTERNOON;
	}
	else{
		return greetings.EVENING;
	}
}

class GreetingInfo extends Component {
	render() {
		return (
			<div className="GreetingInfo">
				<h1>{getGreeting()}</h1>
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