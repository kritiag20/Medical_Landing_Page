import React, { Component } from 'react'
import Navbar from './Navbar'

export class Header extends Component {
    render() {
        return (
            <div>
                <div className="header-sec">
                    <div className="head-col-1">
                        mxklck
                        <div>
                            <Navbar />
                            <div className="head-main">
                                <div>
                                    We Inspire you.
                                </div>
                                <div>
                                    Your trust is our greatest initiatives.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="head-col-2">
                        mxklck
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
