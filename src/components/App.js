import React, { Component } from 'react';
import NavBar from './NavBar';

class App extends Component {
    render() {
        return (
            <div>
                <div className='mainDiv'></div>
                <NavBar />
                {this.props.children}
            </div>
        );
    }
}

export default App;