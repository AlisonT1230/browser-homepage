import React, { Component } from 'react';
import './Background.css';
import {getTransitionColour} from '../../Shared/Utils'

function getBackgroundColour(time) {
    if(time.getHours() < 5) {
        return "#281f34ff";
    }
    else if(time.getHours() < 11) {
        return getTransitionColour(time, 5, 11, {r:40,g:31,b:52}, {r:198,g:222,b:255})
    }
    else if(time.getHours() < 15) {
        return "#c6deffff";
    }
    else if(time.getHours() < 17) {
        return getTransitionColour(time, 15, 17, {r:198,g:222,b:255}, {r:255,g:196,b:139})
    }
    else if(time.getHours() < 20) {
       return getTransitionColour(time, 17, 20, {r:255,g:196,b:139}, {r:40,g:31,b:52})
    }
    else {
        return "#281f34ff";
    }
}

class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date(),
            time: Date.now(),
            backgroundColor: getBackgroundColour(new Date())
        };
    }

    componentDidMount () {
        var now = Date.now();
        this.interval = setInterval(() => 
            this.setState({
                time: now
            }), 5000
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateTime(time) {
        var newTime = this.state.currentTime;
        newTime.setHours(time.substr(0, time.indexOf(":")), time.substr(time.indexOf(":") + 1));
        this.setState(state => ({
            currentTime: newTime,
            backgroundColor: getBackgroundColour(newTime)
        }))
    }

    render() {
        return(
            <div className="Background" style={{backgroundColor: this.state.backgroundColor}}>
                <form>
                    <input id="testTime" type="text"></input>
                    <input type="button" value="Submit" onClick={e => this.updateTime(document.getElementById("testTime").value)}></input>
                </form>
            </div>
        );
    }
}

export default Background;