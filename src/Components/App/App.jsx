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
            {}
        </div>
        );
    }
}

export default App;