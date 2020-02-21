import React, { Component } from 'react';
import './RainLayer.css';
import { rainGraphics } from './RainGraphics';

class RainLayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            layerId: props.layerId,
            isRaining: props.isRaining,
            rainLocation: rainGraphics[props.layerId],
            rainDrops: []
        }
    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = rainGraphics[this.state.layerId];

        img.onload = () => { };

        this.spawnInterval = setInterval(() => {
            if (this.state.isRaining) {
                var x = window.innerWidth * Math.random();
                this.state.rainDrops.push([x, -100]);
            }
        }, 300);

        this.interval = setInterval(() => {
            var i = 0;
            while (i < this.state.rainDrops.length) {
                if (this.state.rainDrops[i][1] > canvas.height + 100) {
                    this.state.rainDrops.splice(i, 1);
                } else {
                    ctx.clearRect(this.state.rainDrops[i][0], this.state.rainDrops[i][1] - 5, 14, 98)
                    ctx.drawImage(img, this.state.rainDrops[i][0], this.state.rainDrops[i][1]);
                    this.state.rainDrops[i][1] += 5;
                    i++;
                }
            }
        }, 10);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
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