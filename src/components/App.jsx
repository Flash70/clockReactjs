import React from 'react';
import './app.scss'
import MyClock from "./Myclock";

const App = () => {
    return (
        <div className='app'>
            <h1>React is working!</h1>
            <MyClock/>
        </div>
    );
};

export default App;