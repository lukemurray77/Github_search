import React, { Component } from 'react';

class App extends Component {
    render () {
        return (
            <div>
                <div className='mainDiv'></div>
                {this.props.children}
            </div>
        );
    }
}

export default App;