import React, { Component } from 'react';
import './RainController.css';

import RainLayer from './RainLayer';

const NUMLAYERS = 3;

class RainController extends Component {
    constructor(props) {
        super(props);

        var layerIds = [];
        for(var i = 0; i < NUMLAYERS; i++) {
            layerIds.push(i);
        }

        this.state = {
            isRaining: true,
            layerIds: layerIds
        };
    }

    render() {
        return (
            <div className="RainController">
                {
                    this.state.layerIds.map((id) => 
                    <RainLayer 
                        key={"RainLayer_" + id} 
                        layerId={String(id)}
                        isRaining={this.state.isRaining}>
                    </RainLayer>)
                }
            </div>
        );
    }
}

export default RainController;