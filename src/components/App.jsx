import React from 'react';
import './app.scss';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTimeZone} from '../redux/timezones-reducer';
import Block from './Block';


const App = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    React.useEffect(() => {
        dispatch(fetchTimeZone())
    }, []);

    return (
        <div className='app'>
            <Block items={state.timezones}
                   isLoaded={state.timezones.isLoaded}/>
            <Block items={state.timezones}
                   isLoaded={state.timezones.isLoaded}/>
        </div>
    )
};

export default App;