import React, { Component } from 'react';
import './RainLayer.css';
import { rainGraphics } from './RainGraphics';

class RainLayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            layerId: props.layerId,
            isRaining: props.isRaining,
            rainLocation: rainGraphics[props.layerId]
        }
    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = rainGraphics[this.state.layerId];

        img.onload = () => {};

        this.interval = setInterval(() => {
            var x = window.innerWidth * Math.random();
            
            try{
                ctx.drawImage(img, x, 10);
            }catch (e) {
                console.log(this.state.layerId + ": " + e);
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return(
            <div className={["RainLayer", "RainLayer_" + this.state.layerId].join(' ')}>
                <canvas 
                    width={window.innerWidth}
                    height={window.innerHeight}
                    ref="canvas"
                    className={["RainLayer_" + this.state.layerId + "_Canvas", "RainCanvas"].join(' ')}>
                </canvas>
            </div>
        );
    }
}

export default RainLayer;