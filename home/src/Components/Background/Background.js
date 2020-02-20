import React, { Component } from 'react';
import './Background.css';
import {getTransitionColour} from '../../Shared/Utils'
import {layers, layerColours} from '../../Shared/LayerColours';

function getLayerColour(time, layerName) {
    var endHour = 0;

    if(time.getHours() < 5) {
        endHour = 5;
    }
    else if(time.getHours() < 11) {
        endHour = 11;
    }
    else if(time.getHours() < 15) {
        endHour = 15;
    }
    else if(time.getHours() < 17) {
        endHour = 17;
    }
    else if(time.getHours() < 20) {
        endHour = 20;
    }
    else if(time.getHours()< 24){
        endHour = 24;
    }

    var colourInfo = layerColours[layerName][endHour];
    if(colourInfo.isTransitionHour) {
        var transition = colourInfo.transition
        return getTransitionColour(time, transition.startTime, transition.endTime, transition.startColour, transition.endColour);
    } else {
        // If not transition hour, transition is the colour
        return colourInfo.transition;
    }
}

class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date(),
            time: Date.now(),
            backgroundColor: getLayerColour(new Date(), layers.BACKGROUND)
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
            backgroundColor: getLayerColour(newTime, layers.BACKGROUND)
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