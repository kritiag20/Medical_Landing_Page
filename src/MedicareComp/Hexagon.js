import React, { Component } from 'react'

export class Hexagon extends Component {
    render() {
        return (
            <div>
                 <div className="hexa-cont">
                    <div className="hexagon">
                        <div class="hexa"><span>
                            hrllo</span></div>
                    </div>
                    <div className="hexagon">
                        <div class="hexa"><span></span></div>
                    </div>
                    <div className="hexagon">
                        <div class="hexa"><span></span></div>
                    </div>
                    <div className="hexagon">
                        <div class="hexa"><span></span></div>
                    </div>
                    <div className="hexagon">
                        <div class="hexa"><span></span></div>
                    </div>
                </div>
                <div className="hexa-cont hexagon1">
                    <div className="hexagon">
                        <div class="hexa"><span></span></div>
                    </div>
                    <div className="hexagon">
                        <div class="hexa"><span></span></div>
                    </div>
                    <div className="hexagon">
                        <div class="hexa"><span></span></div>
                    </div>
                    <div className="hexagon">
                        <div class="hexa"><span></span></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hexagon
