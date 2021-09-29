import React from 'react';
import Header from './../Header/Header.jsx';
import './App.css';



class App extends React.Component {
    state = {
        headerText: "Name-It!"
    };

    render () {
        return (
        <div>
            <Header headtitle={this.state.headerText}/>
            {/* headtitle is a props */}
        </div>
        );
    }
}

export default App;