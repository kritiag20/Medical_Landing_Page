import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Find Doctors</li>
                    </ul>
                    <ul>
                        <li>Login</li>
                        <li>Sign in</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar
