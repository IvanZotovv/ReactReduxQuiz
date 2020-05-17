import React, { Component } from 'react';
import "./style.css"

class Layout extends Component {
    render() {
        return(
            <div className="main-secition">
                <main className="main-block">
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;