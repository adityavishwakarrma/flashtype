import React from 'react';
import Header from './../Header/Header.jsx';
import SearchBox from './../SearchBox/SearchBox';
import './App.css';



class App extends React.Component {
    state = {
        headerText: "Name It!"
    };

    render () {
        return (
        <div>
            <Header headtitle={this.state.headerText}/>
            {/* headtitle is a props */}
            <SearchBox/>
        </div>
        );
    }
}

export default App;