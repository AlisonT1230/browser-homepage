import React, { Component } from 'react';
import './Background.css';
import {getTransitionColour} from '../../Shared/Utils'
import {layers, layerColours, layerPaths} from '../../Shared/Layers';

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
        var date = new Date()
        this.state = {
            currentTime: date,
            time: Date.now(),
            backgroundColor: getLayerColour(date, layers.BACKGROUND),
            layerOneColor: getLayerColour(date, layers.ONE),
            layerTwoColor: getLayerColour(date, layers.TWO),
            layerThreeColor: getLayerColour(date, layers.THREE),
            layerFourColor: getLayerColour(date, layers.FOUR)
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
            backgroundColor: getLayerColour(newTime, layers.BACKGROUND),
            layerOneColor: getLayerColour(newTime, layers.ONE),
            layerTwoColor: getLayerColour(newTime, layers.TWO),
            layerThreeColor: getLayerColour(newTime, layers.THREE),
            layerFourColor: getLayerColour(newTime, layers.FOUR)
        }))
    }

    render() {
        return(
            <div className="Background" style={{backgroundColor: this.state.backgroundColor}}>
                <svg className="LayerOne" viewBox={layerPaths.one.viewBox} style={{fill: this.state.layerOneColor, zIndex:1}}>
                    <path d={layerPaths.one.path}></path>
                </svg>
                <svg className="LayerTwo" viewBox={layerPaths.two.viewBox} style={{fill: this.state.layerTwoColor, zIndex:2}}>
                    <path d={layerPaths.two.path}></path>
                </svg>
                <svg className="LayerThree" viewBox={layerPaths.three.viewBox} style={{fill: this.state.layerThreeColor, zIndex:3}}>
                    <path d={layerPaths.three.path}></path>
                </svg>
                <svg className="LayerFour" viewBox={layerPaths.four.viewBox} style={{fill: this.state.layerFourColor, zIndex:4}}>
                    <path d={layerPaths.four.path}></path>
                    <path d={layerPaths.four.path2}></path>
                </svg>
                <form>
                    <input id="testTime" type="text"></input>
                    <input type="button" value="Submit" onClick={e => this.updateTime(document.getElementById("testTime").value)}></input>
                </form>
            </div> 
        );
    }
}

export default Background;