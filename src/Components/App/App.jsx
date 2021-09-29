import React from 'react';
import Header from './../Header/Header.jsx';
import './App.css';



class App extends React.Component {
    state = {
        headerText: "this is a cool app!"
    };

    render () {
        return (
        <div>
            <Header/>
            <h3>{this.state.headerText}</h3>
            <button onClick={() => {
               this.setState({
                   headerText : "Woaah, Its a new headerText "
               });
            }}
        >
            Magic happens here!</button>
        </div>
        );
    }
}

export default App;